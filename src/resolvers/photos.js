/* eslint-disable indent */
import { withFilter } from 'graphql-subscriptions';
import Sequelize from 'sequelize';
import formatErrors from '../formatErrors';
import pubsub, { UPLOAD_PROGRESS, UPLOAD_STARTED } from '../pubsub';
import batch from '../services/batch';
import { cleanUpload, deletePhotoFiles, storeUpload } from '../services/file';
import requiresAuth from '../services/permissions';
import processFile from '../services/processFile';

const { Op } = Sequelize;

const PhotosResolver = {
  Subscription: {
    uploadStarted: {
      subscribe: () => pubsub.asyncIterator(UPLOAD_STARTED),
    },
    uploadProgress: {
      subscribe: withFilter(
        () => pubsub.asyncIterator(UPLOAD_PROGRESS),
        (payload, args) => payload.uploadProgress.filename === args.filename,
      ),
      // subscribe: requiresAuth.createResolver(withFilter(
      //   () => pubsub.asyncIterator(UPLOAD_PROGRESS),
      //   (payload, args) => payload.uploadProgress.filename === args.filename,
      // )),
    },
  },

  Query: {
    allPhotos: (parent, { albumId, orderBy }, { models, userId = 1 }) => {
      const filter = albumId
        ? {
            [Op.and]: {
              userId: { [Op.eq]: userId },
              bin: { [Op.eq]: false },
              '$albums.id$': { [Op.eq]: albumId },
            },
          }
        : {
            [Op.and]: {
              userId: { [Op.eq]: userId },
              bin: { [Op.eq]: false },
            },
          };
      const order = orderBy ? orderBy.split('_') : ['id', 'DESC'];

      return models.Photo.findAll({
        include: [
          {
            model: models.Album,
            attributes: ['id'],
            through: 'album_photos',
          },
        ],
        where: filter,
        order: [order],
      })
        .then((result) => ({
          data: result.map((r) => r.dataValues),
          errors: null,
        }))
        .catch((err) => ({ data: [], errors: formatErrors(err, models) }));
    },

    publicPhotos: async (
      parent,
      { albumId, orderBy },
      { models, userId = 1 },
    ) => {
      // Determine whether albumId is slug or number
      let id;
      if (!isNaN(parseInt(albumId, 10))) {
        id = parseInt(albumId, 10);
      } else {
        // Text slug
        const result = await models.Album.findOne({
          where: { slug: { [Op.eq]: albumId } },
        });
        if (!result) {
          return {
            data: [],
            errors: Error('No album by that name'),
          };
        }
        id = result.dataValues.id;
      }

      const filter = albumId
        ? {
            [Op.and]: {
              userId: { [Op.eq]: userId },
              bin: { [Op.eq]: false },
              isPublic: { [Op.eq]: true },
              '$albums.id$': { [Op.eq]: id },
            },
          }
        : {
            [Op.and]: {
              userId: { [Op.eq]: userId },
              bin: { [Op.eq]: false },
            },
          };

      const order = orderBy
        ? [orderBy.split('_')]
        : [
            ['dateTaken', 'DESC'],
            ['createdAt', 'DESC'],
          ];

      return models.Photo.findAll({
        include: [
          {
            model: models.Album,
            attributes: ['id'],
            through: 'album_photos',
          },
        ],
        where: filter,
        order,
      })
        .then((result) => ({
          data: result.map((r) => r.dataValues),
          errors: null,
        }))
        .catch((err) => ({ data: [], errors: formatErrors(err, models) }));
    },
  },

  Mutation: {
    uploadPhoto: requiresAuth.createResolver(
      async (parent, { file }, { models, user, totalUploadSize }) => {
        const { createReadStream, filename, mimetype } = await file;

        // Image files only (jpg)
        if (mimetype !== 'image/jpeg') {
          console.error(
            `User tried to upload a file with mimetype: ${mimetype}`,
          );
          return {
            success: false,
            error: 'You cannot upload this type of file',
          };
        }

        try {
          await storeUpload(createReadStream, filename);

          // Process the file
          const { exif, error, urls, thumbnail, name } = await processFile(
            filename,
          );

          // Write to database
          const photoData = {
            ...exif,
            urls,
            thumbnail,
            name,
            userId: user.id,
          };
          await models.Photo.create(photoData);

          await cleanUpload(filename);

          return {
            name,
            success: true,
            exif: JSON.stringify(exif),
            error,
            thumbnail,
          };
        } catch (err) {
          console.error(`FAIL: Unable to upload ${filename}`);
          console.error(err.message);
          return { success: false, error: formatErrors(err, models) };
        }
      },
    ),

    uploadPhotos: requiresAuth.createResolver(
      async (parent, { files, sizes = [] }, ctx) => {
        const totalUploadSize = sizes.reduce((a, b) => a + b, 0);
        const context = { ...ctx, totalUploadSize };

        return batch()(
          files,
          PhotosResolver.Mutation.uploadPhoto,
          { parent, argName: 'file', context },
          sizes,
        );
      },
    ),

    updatePhoto: requiresAuth.createResolver(
      async (parent, { photo }, { models }) => {
        const { id, ...details } = photo;
        return !!models.Photo.update(details, { where: { id } });
      },
    ),

    deletePhoto: requiresAuth.createResolver(
      async (parent, { id }, { models }) => {
        const photo = await models.Photo.findOne({ where: { id } });
        const files = photo.dataValues.urls;
        await deletePhotoFiles(files);
        return !!models.Photo.destroy({ where: { id } });
      },
    ),
  },
};

export default PhotosResolver;
