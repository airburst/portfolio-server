'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (e, models) {
  if (e instanceof models.sequelize.ValidationError) {
    return e.errors.map(function (error) {
      return {
        path: error.path,
        type: error.type,
        message: error.message
      };
    });
  }
  return [{ path: 'name', message: 'something went wrong' }];
};