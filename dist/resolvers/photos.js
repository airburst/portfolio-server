'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _graphqlSubscriptions = require('graphql-subscriptions');

var _file = require('../services/file');

var _permissions = require('../services/permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _formatErrors = require('../formatErrors');

var _formatErrors2 = _interopRequireDefault(_formatErrors);

var _processFile = require('../services/processFile');

var _processFile2 = _interopRequireDefault(_processFile);

var _batch = require('../services/batch');

var _batch2 = _interopRequireDefault(_batch);

var _pubsub = require('../pubsub');

var _pubsub2 = _interopRequireDefault(_pubsub);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Op = _sequelize2.default.Op;


var PhotosResolver = {
  Subscription: {
    uploadStarted: {
      subscribe: function subscribe() {
        return _pubsub2.default.asyncIterator(_pubsub.UPLOAD_STARTED);
      }
    },
    uploadProgress: {
      subscribe: (0, _graphqlSubscriptions.withFilter)(function () {
        return _pubsub2.default.asyncIterator(_pubsub.UPLOAD_PROGRESS);
      }, function (payload, args) {
        return payload.uploadProgress.filename === args.filename;
      })
      // subscribe: requiresAuth.createResolver(withFilter(
      //   () => pubsub.asyncIterator(UPLOAD_PROGRESS),
      //   (payload, args) => payload.uploadProgress.filename === args.filename,
      // )),
    }
  },

  Query: {
    allPhotos: function allPhotos(parent, _ref, _ref2) {
      var albumId = _ref.albumId,
          orderBy = _ref.orderBy;
      var models = _ref2.models,
          _ref2$userId = _ref2.userId,
          userId = _ref2$userId === undefined ? 1 : _ref2$userId;

      var filter = albumId ? (0, _defineProperty3.default)({}, Op.and, {
        userId: (0, _defineProperty3.default)({}, Op.eq, userId),
        bin: (0, _defineProperty3.default)({}, Op.eq, false),
        '$albums.id$': (0, _defineProperty3.default)({}, Op.eq, albumId)
      }) : (0, _defineProperty3.default)({}, Op.and, {
        userId: (0, _defineProperty3.default)({}, Op.eq, userId),
        bin: (0, _defineProperty3.default)({}, Op.eq, false)
      });
      var order = orderBy ? orderBy.split('_') : ['id', 'DESC'];

      return models.Photo.findAll({
        include: [{
          model: models.Album,
          attributes: ['id'],
          through: 'album_photos'
        }],
        where: filter,
        order: [order]
      }).then(function (result) {
        return {
          data: result.map(function (r) {
            return r.dataValues;
          }),
          errors: null
        };
      }).catch(function (err) {
        return { data: [], errors: (0, _formatErrors2.default)(err, models) };
      });
    },

    publicPhotos: function () {
      var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, _ref5, _ref6) {
        var albumId = _ref5.albumId,
            orderBy = _ref5.orderBy;
        var models = _ref6.models,
            _ref6$userId = _ref6.userId,
            userId = _ref6$userId === undefined ? 1 : _ref6$userId;
        var id, result, filter, order;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // Determine whether albumId is slug or number
                id = void 0;

                if (isNaN(parseInt(albumId, 10))) {
                  _context.next = 5;
                  break;
                }

                id = parseInt(albumId, 10);
                _context.next = 11;
                break;

              case 5:
                _context.next = 7;
                return models.Album.findOne({
                  where: { slug: (0, _defineProperty3.default)({}, Op.eq, albumId) }
                });

              case 7:
                result = _context.sent;

                if (result) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt('return', {
                  data: [],
                  errors: Error('No album by that name')
                });

              case 10:
                id = result.dataValues.id;

              case 11:
                filter = albumId ? (0, _defineProperty3.default)({}, Op.and, {
                  userId: (0, _defineProperty3.default)({}, Op.eq, userId),
                  bin: (0, _defineProperty3.default)({}, Op.eq, false),
                  isPublic: (0, _defineProperty3.default)({}, Op.eq, true),
                  '$albums.id$': (0, _defineProperty3.default)({}, Op.eq, id)
                }) : (0, _defineProperty3.default)({}, Op.and, {
                  userId: (0, _defineProperty3.default)({}, Op.eq, userId),
                  bin: (0, _defineProperty3.default)({}, Op.eq, false)
                });
                order = orderBy ? orderBy.split('_') : ['id', 'DESC'];
                return _context.abrupt('return', models.Photo.findAll({
                  include: [{
                    model: models.Album,
                    attributes: ['id'],
                    through: 'album_photos'
                  }],
                  where: filter,
                  order: [order]
                }).then(function (result) {
                  return {
                    data: result.map(function (r) {
                      return r.dataValues;
                    }),
                    errors: null
                  };
                }).catch(function (err) {
                  return { data: [], errors: (0, _formatErrors2.default)(err, models) };
                }));

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      function publicPhotos(_x, _x2, _x3) {
        return _ref7.apply(this, arguments);
      }

      return publicPhotos;
    }()
  },

  Mutation: {
    uploadPhoto: _permissions2.default.createResolver(function () {
      var _ref12 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(parent, _ref10, _ref11) {
        var file = _ref10.file;
        var models = _ref11.models,
            user = _ref11.user,
            totalUploadSize = _ref11.totalUploadSize;

        var _ref13, stream, filename, mimetype, _ref14, exif, error, urls, thumbnail, name, photoData;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return file;

              case 3:
                _ref13 = _context2.sent;
                stream = _ref13.stream;
                filename = _ref13.filename;
                mimetype = _ref13.mimetype;

                if (!(mimetype !== 'image/jpeg')) {
                  _context2.next = 10;
                  break;
                }

                console.error('User tried to upload a file with mimetype: ' + mimetype);
                return _context2.abrupt('return', { success: false, error: 'You cannot upload this type of file' });

              case 10:
                _context2.next = 12;
                return (0, _file.storeUpload)(stream, filename);

              case 12:
                _context2.next = 14;
                return (0, _processFile2.default)(filename);

              case 14:
                _ref14 = _context2.sent;
                exif = _ref14.exif;
                error = _ref14.error;
                urls = _ref14.urls;
                thumbnail = _ref14.thumbnail;
                name = _ref14.name;


                // Write to database
                photoData = (0, _extends3.default)({}, exif, { urls: urls, thumbnail: thumbnail, name: name, userId: user.id
                });
                _context2.next = 23;
                return models.Photo.create(photoData);

              case 23:
                _context2.next = 25;
                return (0, _file.cleanUpload)(filename);

              case 25:
                return _context2.abrupt('return', {
                  name: name, success: true, exif: (0, _stringify2.default)(exif), error: error, thumbnail: thumbnail
                });

              case 28:
                _context2.prev = 28;
                _context2.t0 = _context2['catch'](0);

                console.error(_context2.t0.message);
                return _context2.abrupt('return', { success: false, error: (0, _formatErrors2.default)(_context2.t0, models) });

              case 32:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined, [[0, 28]]);
      }));

      return function (_x4, _x5, _x6) {
        return _ref12.apply(this, arguments);
      };
    }()),

    uploadPhotos: _permissions2.default.createResolver(function () {
      var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(parent, _ref15, ctx) {
        var files = _ref15.files,
            _ref15$sizes = _ref15.sizes,
            sizes = _ref15$sizes === undefined ? [] : _ref15$sizes;
        var totalUploadSize, context;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                totalUploadSize = sizes.reduce(function (a, b) {
                  return a + b;
                }, 0);
                context = (0, _extends3.default)({}, ctx, { totalUploadSize: totalUploadSize });
                return _context3.abrupt('return', (0, _batch2.default)()(files, PhotosResolver.Mutation.uploadPhoto, { parent: parent, argName: 'file', context: context }, sizes));

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      return function (_x7, _x8, _x9) {
        return _ref16.apply(this, arguments);
      };
    }()),

    updatePhoto: _permissions2.default.createResolver(function () {
      var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(parent, _ref17, _ref18) {
        var photo = _ref17.photo;
        var models = _ref18.models;
        var id, details;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                id = photo.id, details = (0, _objectWithoutProperties3.default)(photo, ['id']);
                return _context4.abrupt('return', !!models.Photo.update(details, { where: { id: id } }));

              case 2:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      return function (_x10, _x11, _x12) {
        return _ref19.apply(this, arguments);
      };
    }()),

    deletePhoto: _permissions2.default.createResolver(function () {
      var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(parent, _ref20, _ref21) {
        var id = _ref20.id;
        var models = _ref21.models;
        var photo, files;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return models.Photo.findOne({ where: { id: id } });

              case 2:
                photo = _context5.sent;
                files = photo.dataValues.urls;
                _context5.next = 6;
                return (0, _file.deletePhotoFiles)(files);

              case 6:
                return _context5.abrupt('return', !!models.Photo.destroy({ where: { id: id } }));

              case 7:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      return function (_x13, _x14, _x15) {
        return _ref22.apply(this, arguments);
      };
    }())
  }
};

exports.default = PhotosResolver;