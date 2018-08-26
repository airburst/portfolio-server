import database from '../services/Database';
import { createHash } from '../services/auth';

export default {
  Mutation: {
    addUser: async (parent, {
      username, email, password, isAdmin = false,
    }, ctx) => {
      // Authorisation
      // if (!ctx.session) {
      //   return Error('You are not authorised to do this.');
      // }

      // Validation
      // Mandatory fields
      if (!username || !email || !password) {
        return {
          id: null,
          errors: [{ type: 'validation', message: 'Mandatory information not supplied' }],
        };
      }
      // Unique username and email
      // TODO:

      // Continue with write
      return database.addUser({
        username, email, password: createHash(password), isAdmin,
      });
    },
  },
};
