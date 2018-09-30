'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _index2.default.User;
exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var username, email, password, found;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          // Create default user
          username = process.env.USERNAME || 'test';
          email = process.env.EMAIL || 'test@test.com';
          password = process.env.PASSWORD || 'password';
          _context.next = 5;
          return User.findOne({ where: { email: email } });

        case 5:
          found = _context.sent;

          if (found) {
            _context.next = 9;
            break;
          }

          _context.next = 9;
          return User.create({
            username: username, email: email, password: password, isAdmin: true
          });

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));