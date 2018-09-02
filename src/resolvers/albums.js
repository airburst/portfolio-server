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

    // updateAlbum()

    // addPhotosToAlbum(albumId: Int!, photoIds: [Int!]!)

    // removePhotosToAlbum(albumId: Int!, photoIds: [Int!]!)

    // setCoverPhoto(albumId: Int!, cover: String!)

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
