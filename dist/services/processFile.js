'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _exif = require('./exif');

var _exif2 = _interopRequireDefault(_exif);

var _resize = require('./resize');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (file) {
  return new _promise2.default(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
      var exif, _ref2, thumbnail, urls, error, name;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _exif2.default)(file);

            case 3:
              exif = _context.sent;
              _context.next = 6;
              return (0, _resize.resizeImage)(file, exif);

            case 6:
              _ref2 = _context.sent;
              thumbnail = _ref2.thumbnail;
              urls = _ref2.urls;
              error = _ref2.error;
              name = _ref2.name;

              resolve({
                exif: exif, error: error, urls: urls, thumbnail: thumbnail, name: name
              });
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context['catch'](0);

              reject(_context.t0);

            case 17:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[0, 14]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};