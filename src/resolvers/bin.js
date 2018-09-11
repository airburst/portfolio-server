import Sequelize from 'sequelize';
import requiresAuth from '../services/permissions';
import formatErrors from '../formatErrors';
import { ALBUM, PHOTO } from '../constants';

const { Op } = Sequelize;

const BinResolver = {
  Query: {
    allBinItems: requiresAuth.createResolver(
      (parent, args, { models, user }) => {
        const albums = models.Album.findAll({
          where: {
            [Op.and]: {
              userId: { [Op.eq]: user.id },
              bin: { [Op.eq]: true },
            },
          },
          include: [{ model: models.Photo, as: 'photos' }],
        })
          .then(result => ({
            albums: result.map(r => r.dataValues),
            errors: null,
          }))
          .catch(err => ({ photos: [], errors: formatErrors(err, models) }));

        const photos = models.Photo.findAll({
          where: {
            [Op.and]: {
              userId: { [Op.eq]: user.id },
              bin: { [Op.eq]: true },
            },
          },
        })
          .then(result => ({
            photos: result.map(r => r.dataValues),
            errors: null,
          }))
          .catch(err => ({ albums: [], errors: formatErrors(err, models) }));

        // NOTE: This does not concatenate errors; last one wins!
        return Promise.all([albums, photos])
          .then(result => result.reduce((prev, cur) => ({ ...prev, ...cur }), {}))
          .catch(err => ({ albums: [], photos: [], errors: formatErrors(err, models) }));
      },
    ),
  },

  Mutation: {
    addToBin: requiresAuth.createResolver(
      async (parent, { type, ids }, { models, user }) => {
        if (type === ALBUM) {
          try {
            const result = await models.Album.update({ bin: true }, {
              returning: true,
              where: {
                [Op.and]: {
                  userId: { [Op.eq]: user.id },
                  id: { [Op.in]: ids },
                },
              },
            });
            return !!result;
          } catch (err) {
            return false;
          }
        }
        if (type === PHOTO) {
          try {
            const result = await models.Photo.update({ bin: true }, {
              returning: true,
              where: {
                [Op.and]: {
                  userId: { [Op.eq]: user.id },
                  id: { [Op.in]: ids },
                },
              },
            });
            return !!result;
          } catch (err) {
            return false;
          }
        }
        return false;
      },
    ),

    restore: requiresAuth.createResolver(
      async (parent, args, { models, user }) => {
        try {
          const restoreAlbums = await models.Album.update({ bin: false }, {
            returning: true,
            where: {
              [Op.and]: {
                userId: { [Op.eq]: user.id },
                bin: { [Op.eq]: true },
              },
            },
          });
          const restorePhotos = await models.Photo.update({ bin: false }, {
            returning: true,
            where: {
              [Op.and]: {
                userId: { [Op.eq]: user.id },
                bin: { [Op.eq]: true },
              },
            },
          });
          return true;
        } catch (err) {
          return false;
        }
      },
    ),
  },
};

export default BinResolver;
