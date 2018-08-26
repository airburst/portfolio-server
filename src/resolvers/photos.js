import Sequelize from 'sequelize';
import formatErrors from '../formatErrors';

const { Op } = Sequelize;

export default {
  Query: {
    allPhotos: (parent, args, { models, userId = 1 }) => {
    // Authorisation
    // if (!ctx.session) {
    //   return Error('You are not authorised to do this.');
    // }
      console.log(userId);

      return models.Photo.findAll({
        // attributes: ['url'],
        where: { userId: { [Op.eq]: userId } },
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: formatErrors(err, models) }));
    },
  },
};

// if (!result) { return []; }
// return result.map(r => r.dataValues).map(r => Object.values(r)[0]);
