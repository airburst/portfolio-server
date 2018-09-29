'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findByLogin = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = require('./sequelize');

var _sequelize4 = _interopRequireDefault(_sequelize3);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export const compareHash = (password, hashed) => bcrypt.compareSync(password, hashed);

_dotenv2.default.config();

var Op = _sequelize2.default.Op;


var User = _sequelize4.default.define('users', {
  id: {
    type: _sequelize2.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: _sequelize2.default.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: _sequelize2.default.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  isAdmin: {
    type: _sequelize2.default.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  blocked: _sequelize2.default.BOOLEAN
});

// Hash password before committing to db
User.beforeCreate(function (u) {
  u.password = _bcrypt2.default.hashSync(u.password, _constants.SALT_ROUNDS);
});

var findByLogin = exports.findByLogin = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(login) {
    var user;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return User.findOne({
              where: { username: login }
            });

          case 2:
            user = _context.sent;

            if (user) {
              _context.next = 7;
              break;
            }

            _context.next = 6;
            return User.findOne({
              where: { email: login }
            });

          case 6:
            user = _context.sent;

          case 7:
            return _context.abrupt('return', user);

          case 8:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function findByLogin(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = User;