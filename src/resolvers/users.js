import database from '../services/Database';

export default {
  Mutation: {
    addUser: async (parent, {
      username, email, password, isAdmin = false,
    }, ctx) =>
      database.addUser({
        username, email, password, isAdmin,
      }),
  },
};
