import formatErrors from '../formatErrors';

export default {
  Mutation: {
    addUser: (parent, args, { models }) =>
    // Authorisation
    // if (!ctx.session) {
    //   return Error('You are not authorised to do this.');
    // }

      models.User.create(args)
        .then(result => ({ id: result.id, errors: null }))
        .catch(err => ({ id: null, errors: formatErrors(err, models) })),
  },
};

// getPhotos
// const result = await Photo.findAll({
//   attributes: ['url'],
//   where: { user_id: { [Op.eq]: userId } },
// });
// if (!result) { return []; }
// return result.map(r => r.dataValues).map(r => Object.values(r)[0]);
