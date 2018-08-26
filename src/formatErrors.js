export default (e, models) => {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(error => ({
      path: error.path,
      type: error.type,
      message: error.message,
    }));
  }
  return [{ path: 'name', message: 'something went wrong' }];
};
