import path from 'path';
import { createWriteStream } from 'file-system';
import Sequelize from 'sequelize';
import formatErrors from '../formatErrors';
import processFile from '../services/processFile';
import batch from '../services/batch';
import { UPLOAD_FOLDER } from '../constants';

const { Op } = Sequelize;

const storeUpload = (stream, filePath) => new Promise((resolve, reject) =>
  stream
    .pipe(createWriteStream(filePath))
    .on('finish', () => resolve())
    .on('error', err => reject(err)));

const PhotosResolver = {
  Query: {
    allPhotos: (parent, { orderBy }, { models, userId = 1 }) => {
    // Authorisation
    // if (!ctx.session) {
    //   return Error('You are not authorised to do this.');
    // }
      const order = orderBy ? orderBy.split('_') : ['id', 'DESC'];
      return models.Photo.findAll({
        where: { userId: { [Op.eq]: userId } },
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
    // TODO: pass user context
    uploadPhoto: async (parent, { file }, { models }) => {
      try {
        const { stream, filename, mimetype } = await file;
        const storePath = path.join(__dirname, `../../${UPLOAD_FOLDER}`, filename);

        // Image files only (jpg)
        if (mimetype !== 'image/jpeg') {
          console.error(`User tried to upload a file with mimetype: ${mimetype}`);
          return { success: false, error: 'You cannot upload this type of file' };
        }

        // Upload the file
        await storeUpload(stream, storePath);

        // Process the file
        const {
          exif, error, urls, thumbnail,
        } = await processFile(filename);

        // Write to database
        // TODO: use user id from context
        const photoData = {
          ...exif, urls, thumbnail, userId: 1,
        };
        await models.Photo.create(photoData);

        return {
          success: true, exif: JSON.stringify(exif), error, thumbnail,
        };
      } catch (err) {
        console.error(err.message);
        return { success: false, error: formatErrors(err, models) };
      }
    },
    uploadPhotos: async (parent, { files }, context) =>
      batch()(
        files,
        PhotosResolver.Mutation.uploadPhoto,
        { parent, argName: 'file', context },
      ),
  },
};

export default PhotosResolver;
