import Sequelize from 'sequelize';
import requiresAuth from '../services/permissions';
import formatErrors from '../formatErrors';

const { Op } = Sequelize;

// TODO: Remove userId = 1!

const AlbumsResolver = {
  Query: {
    allAlbums: (parent, args, { models, userId = 1 }) =>
      models.Album.findAll({
        where: { userId: { [Op.eq]: userId } },
        include: [{ model: models.Photo, as: 'photos' }],
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: formatErrors(err, models) })),

    getPublicAlbums: (parent, args, { models, userId = 1 }) =>
      models.Album.findAll({
        where: {
          [Op.and]: {
            userId: { [Op.eq]: userId },
            isPublic: { [Op.eq]: true },
          },
        },
        include: [{ model: models.Photo, as: 'photos' }],
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: formatErrors(err, models) })),

  },

  Mutation: {
    addAlbum: async (parent, { album }, { models, userId = 1 }) => {
      const { id, ...details } = album;
      return models.Album.create({ ...details, userId });
    },

    updateAlbum: async (parent, { album }, { models }) => {
      const { id, ...details } = album;
      return models.Album.update({ ...details }, { where: { id } });
    },

    addPhotosToAlbum: async (parent, { albumId, photoIds }, { models }) => {
      try {
        const album = await models.Album.findById(albumId);
        if (!album) { return false; }
        const result = album.addPhotos(photoIds);
        return { data: result, errors: null };
      } catch (err) {
        return { data: false, errors: formatErrors(err, models) };
      }
    },

    removePhotosFromAlbum: async (parent, { albumId, photoIds }, { models }) => {
      try {
        const album = await models.Album.findById(albumId);
        if (!album) { return false; }
        const result = album.removePhotos(photoIds);
        return { data: result, errors: null };
      } catch (err) {
        return { data: false, errors: formatErrors(err, models) };
      }
    },

    // addView(albumId: Int!)

    // deleteAlbum: requiresAuth.createResolver(async (parent, { id }, { models }) => {
    //   const Album = await models.Album.findOne({ where: { id } });
    //   const files = Album.dataValues.urls;
    //   await deleteAlbumFiles(files);
    //   return models.Album.destroy({ where: { id } });
    // }),
  },
};

export default AlbumsResolver;
