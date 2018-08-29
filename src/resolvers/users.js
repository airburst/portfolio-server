import { tryLogin } from '../services/auth';
import requiresAuth from '../services/permissions';
import formatErrors from '../formatErrors';

export default {
  Mutation: {
    login: (parent, { username, password }, { models, SECRET, SECRET2 }) =>
      tryLogin(username, password, models, SECRET, SECRET2),
    addUser: requiresAuth.createResolver((parent, args, { models }) =>
      models.User.create(args)
        .then(result => ({ id: result.id, errors: null }))
        .catch(err => ({ id: null, errors: formatErrors(err, models) }))),
  },
};
