import Sequelize from 'sequelize';
import requiresAuth from '../services/permissions';
import formatErrors from '../formatErrors';

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
};

export default BinResolver;
