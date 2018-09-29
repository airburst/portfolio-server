'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _exif = require('./exif');

var _exif2 = _interopRequireDefault(_exif);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Exif Data', function () {
  it('is extracted from an image file', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var _ref2, exif, error;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _exif2.default)('Ella-and-Fia.jpg');

          case 2:
            _ref2 = _context.sent;
            exif = _ref2.exif;
            error = _ref2.error;


            expect(exif).toMatchObject({
              width: 4248,
              height: 2832,
              exposure: 0.0025,
              shutter: 8.643856,
              aperture: 2.8,
              iso: 200,
              focalLength: 200,
              dateTaken: '2018:08:19 15:24:42'
            });
            expect(error).toBe(null);

          case 7:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  })));

  it('returns an error when no exif info is present', (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
    var _ref4, exif, error;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _exif2.default)('mac.jpg');

          case 2:
            _ref4 = _context2.sent;
            exif = _ref4.exif;
            error = _ref4.error;


            expect(exif).toBe(null);
            expect(error).toBe('No Exif segment found in the given image.');

          case 7:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  })));
}); /* eslint-env jest */