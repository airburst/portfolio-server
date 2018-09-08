import Sequelize from 'sequelize';
import requiresAuth from '../services/permissions';
import formatErrors from '../formatErrors';

const { Op } = Sequelize;

const AlbumsResolver = {
  Query: {
    allAlbums: requiresAuth.createResolver(
      (parent, { id }, { models, user }) => {
        const filter = id
          ? { [Op.and]: { userId: { [Op.eq]: user.id }, id: { [Op.eq]: id } } }
          : { userId: { [Op.eq]: user.id } };
        return models.Album.findAll({
          where: filter,
          include: [{ model: models.Photo, as: 'photos' }],
        })
          .then(result => ({
            data: result.map(r => r.dataValues),
            errors: null,
          }))
          .catch(err => ({ data: [], errors: formatErrors(err, models) }));
      },
    ),

    // NOTE: Hard-coded user id
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

    getAlbum: (parent, { albumId }, { models }) =>
      models.Album.findOne({
        where: {
          [Op.and]: {
            id: { [Op.eq]: albumId },
            isPublic: { [Op.eq]: true },
          },
        },
        include: [{ model: models.Photo, as: 'photos' }],
      })
        .then(result => ({
          data: result.dataValues,
          errors: null,
        }))
        .catch(err => ({ data: null, errors: formatErrors(err, models) })),
  },

  Mutation: {
    addAlbum: requiresAuth.createResolver(
      async (parent, { album }, { models, user }) => {
        const { id, ...details } = album;
        return models.Album.create({ ...details, userId: user.id });
      },
    ),

    updateAlbum: requiresAuth.createResolver(
      async (parent, { album }, { models }) => {
        const { id, ...details } = album;
        return models.Album.update({ ...details }, { where: { id } });
      },
    ),

    addPhotosToAlbum: requiresAuth.createResolver(
      async (parent, { albumId, photoIds }, { models }) => {
        try {
          const album = await models.Album.findById(albumId);
          if (!album) { return false; }
          const result = album.addPhotos(photoIds);
          return { data: result, errors: null };
        } catch (err) {
          return { data: false, errors: formatErrors(err, models) };
        }
      },
    ),

    removePhotosFromAlbum: requiresAuth.createResolver(
      async (parent, { albumId, photoIds }, { models }) => {
        try {
          const album = await models.Album.findById(albumId);
          if (!album) { return false; }
          const result = album.removePhotos(photoIds);
          return { data: result, errors: null };
        } catch (err) {
          return { data: false, errors: formatErrors(err, models) };
        }
      },
    ),


    addView: requiresAuth.createResolver(
      async (parent, { albumId }, { models }) => {
        const album = await models.Album.findById(albumId);
        let { views } = album.dataValues;
        views += 1;
        return album.update({ views });
      },
    ),

    deleteAlbum: requiresAuth.createResolver(
      async (parent, { albumId }, { models }) =>
        models.Album.destroy({ where: { id: albumId } }),
    ),
  },
};

export default AlbumsResolver;
