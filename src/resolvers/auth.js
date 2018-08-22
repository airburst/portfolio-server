export default {
  Query: {
    authenticate: async (parent, { endpoint, user, password }) =>
      // const rest = new EclipseRestService({ endpoint });
      // return rest.authenticate(user, password);
      ({ success: true, cookie: '123' }),
  },
};
