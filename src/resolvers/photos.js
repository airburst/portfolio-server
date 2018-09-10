import Sequelize from 'sequelize';
import {
  storeUpload, setProgress, cleanUpload, deletePhotoFiles,
} from '../services/file';
import requiresAuth from '../services/permissions';
import formatErrors from '../formatErrors';
import processFile from '../services/processFile';
import batch from '../services/batch';

const { Op } = Sequelize;

const PhotosResolver = {
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
        include: [{
          model: models.Album,
          attributes: ['id'],
          through: 'album_photos',
        }],
        where: filter,
        order: [order],
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: formatErrors(err, models) }));
    },
  },

  Mutation: {
    uploadPhoto: requiresAuth.createResolver(
      async (parent, { file }, { models, progress, user }) => {
        try {
          const { stream, filename, mimetype } = await file;

          // Image files only (jpg)
          if (mimetype !== 'image/jpeg') {
            console.error(`User tried to upload a file with mimetype: ${mimetype}`);
            return { success: false, error: 'You cannot upload this type of file' };
          }

          await storeUpload(stream, filename, progress);

          // Process the file
          const {
            exif, error, urls, thumbnail, name,
          } = await processFile(filename);

          // Write to database
          const photoData = {
            ...exif, urls, thumbnail, name, userId: user.id,
          };
          await models.Photo.create(photoData);

          await cleanUpload(filename);

          return {
            success: true, exif: JSON.stringify(exif), error, thumbnail,
          };
        } catch (err) {
          console.error(err.message);
          return { success: false, error: formatErrors(err, models) };
        }
      },
    ),

    uploadPhotos: requiresAuth.createResolver(
      async (parent, { files, sizes = [] }, ctx) => {
        const totalUploadSize = sizes.reduce((a, b) => a + b, 0);
        const progress = setProgress(totalUploadSize);
        const context = { ...ctx, progress };

        return batch()(
          files,
          PhotosResolver.Mutation.uploadPhoto,
          { parent, argName: 'file', context },
        );
      },
    ),

    updatePhoto: requiresAuth.createResolver(
      async (parent, { photo }, { models }) => {
        const { id, ...details } = photo;
        return models.Photo.update(details, { where: { id } });
      },
    ),

    deletePhoto: requiresAuth.createResolver(
      async (parent, { id }, { models }) => {
        const photo = await models.Photo.findOne({ where: { id } });
        const files = photo.dataValues.urls;
        await deletePhotoFiles(files);
        return models.Photo.destroy({ where: { id } });
      },
    ),
  },
};

export default PhotosResolver;
