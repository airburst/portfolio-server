import { tryLogin } from '../services/auth';
import formatErrors from '../formatErrors';
import requiresAuth from '../services/permissions';

export default {
  Mutation: {
    login: (parent, { username, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(username, password, models, SECRET, SECRET2),
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
