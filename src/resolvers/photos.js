import Sequelize from 'sequelize';
import formatErrors from '../formatErrors';

const { Op } = Sequelize;

export default {
  Query: {
    allPhotos: (parent, args, { models, userId = 1 }) =>
    // Authorisation
    // if (!ctx.session) {
    //   return Error('You are not authorised to do this.');
    // }
      models.Photo.findAll({
        where: { userId: { [Op.eq]: userId } },
      })
        .then(result => ({
          data: result.map(r => r.dataValues),
          errors: null,
        }))
        .catch(err => ({ data: [], errors: formatErrors(err, models) }))
    ,
  },
};
