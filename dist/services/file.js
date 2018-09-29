'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cleanUpload = exports.cleanUploads = exports.deletePhotoFiles = exports.storeUpload = exports.setProgress = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _rimraf = require('rimraf');

var _rimraf2 = _interopRequireDefault(_rimraf);

var _fileSystem = require('file-system');

var _progressStream = require('progress-stream');

var _progressStream2 = _interopRequireDefault(_progressStream);

var _constants = require('../constants');

var _pubsub = require('../pubsub');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT = _path2.default.join(__dirname, '../../');
var HTTP_URL = process.env.SERVER_URI + ':' + process.env.PORT;
var PHOTO_URL = HTTP_URL + '/photos';

// TODO: subscription
/**
 * This function sets a subscription emitter for upload progress. The progress object exposes
 * properties for transferred (b), remaining (b), length (b) and percentage.
 * @param {*} size in bytes
 * @param {*} filename
 */
var setProgress = exports.setProgress = function setProgress(size, filename) {
  return (0, _progressStream2.default)({ length: size, time: 10 }, function (progress) {
    return console.log(filename, Math.round(progress.percentage)) || (0, _pubsub.emitUploadProgress)(filename, Math.round(progress.percentage));
  });
};

// TODO: make progress work!
var storeUpload = exports.storeUpload = function storeUpload(stream, filename, progress) {
  return new _promise2.default(function (resolve, reject) {
    var storePath = _path2.default.join(__dirname, '../../' + _constants.UPLOAD_FOLDER, filename);
    if (progress) {
      stream.pipe(progress).pipe((0, _fileSystem.createWriteStream)(storePath)).on('finish', function () {
        return resolve();
      }).on('error', function (err) {
        return reject(err);
      });
    } else {
      stream.pipe((0, _fileSystem.createWriteStream)(storePath)).on('finish', function () {
        return resolve();
      }).on('error', function (err) {
        return reject(err);
      });
    }
  });
};

var deleteFile = function deleteFile(folder, filename) {
  return new _promise2.default(function (resolve) {
    var file = _path2.default.join(ROOT, folder, filename);
    (0, _rimraf2.default)(file, {}, function (error) {
      if (error) {
        console.log('Unable to delete ' + filename);
      }
      resolve();
    });
  });
};

var deletePhotoFiles = exports.deletePhotoFiles = function deletePhotoFiles(files) {
  return new _promise2.default(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(resolve, reject) {
      var deNulledList, localFiles;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(files && files.length)) {
                _context.next = 12;
                break;
              }

              // Replace any non-null http url with ROOT
              deNulledList = files.filter(function (n) {
                return n;
              });
              localFiles = deNulledList.map(function (f) {
                return f && f.replace(PHOTO_URL, '');
              });
              _context.prev = 3;
              _context.next = 6;
              return _promise2.default.all(localFiles.map(function (f) {
                return deleteFile(_constants.PHOTOS_FOLDER, f);
              }));

            case 6:
              resolve();
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context['catch'](3);

              reject(_context.t0);

            case 12:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[3, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());
};

var deleteAllFiles = function deleteAllFiles(folder) {
  return new _promise2.default(function (resolve) {
    (0, _rimraf2.default)(_path2.default.join(ROOT, folder, '/*'), {}, function (error) {
      if (error) {
        console.log('Unable to clean files folder: ' + error);
      }
      resolve();
    });
  });
};

var cleanUploads = exports.cleanUploads = function cleanUploads() {
  return deleteAllFiles(_constants.UPLOAD_FOLDER);
};

var cleanUpload = exports.cleanUpload = function cleanUpload(filename) {
  return deleteFile(_constants.UPLOAD_FOLDER, filename);
};