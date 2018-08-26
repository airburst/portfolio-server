import formatErrors from '../formatErrors';

export default {
  Mutation: {
    addUser: (parent, args, { models }) =>
    // Authorisation
    // if (!ctx.session) {
    //   return Error('You are not authorised to do this.');
    // }

      // try {
      models.User.create(args)
        .then(result => ({ id: result.id, errors: null }))
        .catch(err => ({ id: null, errors: formatErrors(err, models) }))
    // } catch (e) {
    //   return { id: -2, errors: formatErrors(e, models) };
    // }
    ,
  },
};

// getPhotos
// const result = await Photo.findAll({
//   attributes: ['url'],
//   where: { user_id: { [Op.eq]: userId } },
// });
// if (!result) { return []; }
// return result.map(r => r.dataValues).map(r => Object.values(r)[0]);
