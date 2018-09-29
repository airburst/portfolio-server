'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _auth = require('../services/auth');

var _permissions = require('../services/permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _formatErrors = require('../formatErrors');

var _formatErrors2 = _interopRequireDefault(_formatErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Mutation: {
    login: function login(parent, _ref, _ref2) {
      var username = _ref.username,
          password = _ref.password;
      var models = _ref2.models,
          SECRET = _ref2.SECRET,
          SECRET2 = _ref2.SECRET2;
      return (0, _auth.tryLogin)(username, password, models, SECRET, SECRET2);
    },
    addUser: _permissions2.default.createResolver(function (parent, args, _ref3) {
      var models = _ref3.models;
      return models.User.create(args).then(function (result) {
        return { id: result.id, errors: null };
      }).catch(function (err) {
        return { id: null, errors: (0, _formatErrors2.default)(err, models) };
      });
    })
  }
};