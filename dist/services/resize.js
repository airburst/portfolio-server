'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resizeImage = exports.resize = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fileSystem = require('file-system');

var _fileSystem2 = _interopRequireDefault(_fileSystem);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _sharp = require('sharp');

var _sharp2 = _interopRequireDefault(_sharp);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

var BASE_URL = _path2.default.join(__dirname, '../../' + _constants.PHOTOS_FOLDER);

// Write any missing folders in a file path
var writePath = function writePath(filePath, cb) {
  (0, _mkdirp2.default)(_path2.default.dirname(filePath), function (err) {
    if (err) return cb(err);
    return cb();
  });
};

var fileExists = function fileExists(filePath) {
  return _fileSystem2.default.existsSync(filePath);
};

var getNewFileVersion = function getNewFileVersion(filePath) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!fileExists(filePath)) {
    return filePath;
  }
  var folder = _path2.default.dirname(filePath);
  var newFilename = _path2.default.basename(filePath);
  var ext = _path2.default.extname(newFilename);
  var body = newFilename.split('.')[0].split('' + _constants.DELIM + version)[0];
  return getNewFileVersion(_path2.default.join(folder, '' + body + _constants.DELIM + (version + 1) + ext), version + 1);
};

var safeName = function safeName(f) {
  return f.replace(/[^a-z0-9._-]/gi, '').toLowerCase();
};

var makeFolderName = function makeFolderName(fileName) {
  var d = new Date();
  var y = d.getFullYear().toString();
  var m = (d.getMonth() + 1).toString();
  var day = d.getDate().toString();
  var filePath = _path2.default.join(BASE_URL, y, m, day, safeName(fileName || ''));
  return getNewFileVersion(filePath);
};

var makeRelativePath = function makeRelativePath(absolutePath) {
  var abs = _path2.default.join(__dirname, '../..');
  return absolutePath.replace(abs, process.env.SERVER_URI + ':' + process.env.PORT);
};

var getDimensions = function getDimensions(size) {
  if (!size || size === 'original') {
    return '';
  }
  // Set filename with size and an 'h' for fixed-height crops and w for width
  if (size.height) {
    return '-' + size.height + 'h';
  }
  if (size.width) {
    return '-' + size.width + 'w';
  }
  return '-' + size + 'w';
};

var imageIsTooSmall = function imageIsTooSmall(actualWidth, resizeTo) {
  if (resizeTo === 'original') {
    return false;
  }
  var resizeWidth = resizeTo.width ? resizeTo.width : resizeTo;
  return actualWidth < resizeWidth;
};

// Return a size object oriented to resize the longest edge
var longestEdge = function longestEdge(_ref, resizeTo) {
  var width = _ref.width,
      height = _ref.height;
  return (
    // const aspect = width / height;
    width >= height ? { width: resizeTo, height: null } : { width: null, height: resizeTo }
  );
};

// eslint-disable-next-line import/prefer-default-export
var resize = exports.resize = function resize(filename, exif) {
  return function (size) {
    return new _promise2.default(function (resolve, reject) {
      if (imageIsTooSmall(exif.width, size)) {
        resolve(null); // Don't upsample!
      } else {
        if (size.longestEdge) {
          size = longestEdge(exif, size.longestEdge); // Resize to correct orientation
        }
        var inPath = _path2.default.join(__dirname, '../../' + _constants.UPLOAD_FOLDER, filename);
        var ext = _path2.default.extname(filename);
        var outName = makeFolderName('' + filename.split(ext)[0] + getDimensions(size) + ext);
        try {
          writePath(outName, (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var outPath;
            return _regenerator2.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    outPath = _path2.default.join(outName);

                    if (!(typeof size === 'number')) {
                      _context.next = 6;
                      break;
                    }

                    _context.next = 4;
                    return (0, _sharp2.default)(inPath).resize(size).toFormat('jpeg').toFile(outPath);

                  case 4:
                    _context.next = 8;
                    break;

                  case 6:
                    _context.next = 8;
                    return (0, _sharp2.default)(inPath).resize(size.width, size.height).toFormat('jpeg').toFile(outPath);

                  case 8:
                    // Convert file paths to relative server paths
                    resolve(makeRelativePath(outPath));

                  case 9:
                  case 'end':
                    return _context.stop();
                }
              }
            }, _callee, undefined);
          })));
        } catch (e) {
          console.log('resize error:', e.message);
          reject(e);
        }
      }
    });
  };
};

var resizeImage = exports.resizeImage = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(filename, exif) {
    var name, urls;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            name = _path2.default.basename(filename);
            _context2.next = 4;
            return _promise2.default.all(_constants.SIZES.map(resize(filename, exif)));

          case 4:
            urls = _context2.sent;
            return _context2.abrupt('return', {
              name: name, urls: urls, thumbnail: urls[_constants.THUMBNAIL_SIZE], error: null
            });

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2['catch'](0);
            return _context2.abrupt('return', { url: null, error: _context2.t0 });

          case 11:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[0, 8]]);
  }));

  return function resizeImage(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

/* Use like:
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy"> */