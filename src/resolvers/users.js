export default {
  Mutation: {
    addUser: async (parent, {
      username, email, password, isAdmin = false,
    }, { models }) => {
      // Authorisation
      // if (!ctx.session) {
      //   return Error('You are not authorised to do this.');
      // }

      // Validation
      if (!username || !email || !password) {
        return {
          id: null,
          errors: [{ type: 'validation', message: 'Mandatory information not supplied' }],
        };
      }
      return models.User.create({
        username, email, password, isAdmin,
      });
    },
  },
};

// getPhotos
// const result = await Photo.findAll({
//   attributes: ['url'],
//   where: { user_id: { [Op.eq]: userId } },
// });
// if (!result) { return []; }
// return result.map(r => r.dataValues).map(r => Object.values(r)[0]);
