'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _permissions = require('../services/permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _formatErrors = require('../formatErrors');

var _formatErrors2 = _interopRequireDefault(_formatErrors);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Op = _sequelize2.default.Op;


var AlbumsResolver = {
  Query: {
    allAlbums: _permissions2.default.createResolver(function (parent, _ref, _ref2) {
      var id = _ref.id;
      var models = _ref2.models,
          user = _ref2.user;

      var filter = id ? (0, _defineProperty3.default)({}, Op.and, {
        userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
        bin: (0, _defineProperty3.default)({}, Op.eq, false),
        id: (0, _defineProperty3.default)({}, Op.eq, id)
      }) : (0, _defineProperty3.default)({}, Op.and, {
        userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
        bin: (0, _defineProperty3.default)({}, Op.eq, false)
      });
      return models.Album.findAll({
        where: filter,
        include: [{ model: models.Photo, as: 'photos' }],
        order: [['name']]
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
    }),

    // NOTE: Hard-coded user id
    getPublicAlbums: function getPublicAlbums(parent, args, _ref5) {
      var models = _ref5.models,
          _ref5$userId = _ref5.userId,
          userId = _ref5$userId === undefined ? 1 : _ref5$userId;
      return models.Album.findAll({
        where: (0, _defineProperty3.default)({}, Op.and, {
          userId: (0, _defineProperty3.default)({}, Op.eq, userId),
          isPublic: (0, _defineProperty3.default)({}, Op.eq, true),
          bin: (0, _defineProperty3.default)({}, Op.eq, false),
          cover: (0, _defineProperty3.default)({}, Op.ne, null)
        }),
        include: [{ model: models.Photo, as: 'photos' }],
        order: [['createdAt', 'DESC']]
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

    getAlbum: function getAlbum(parent, _ref6, _ref7) {
      var albumId = _ref6.albumId;
      var models = _ref7.models;
      return models.Album.findOne({
        where: (0, _defineProperty3.default)({}, Op.and, {
          id: (0, _defineProperty3.default)({}, Op.eq, albumId),
          isPublic: (0, _defineProperty3.default)({}, Op.eq, true),
          bin: (0, _defineProperty3.default)({}, Op.eq, false)
        }),
        include: [{ model: models.Photo, as: 'photos' }]
      }).then(function (result) {
        return {
          data: result.dataValues,
          errors: null
        };
      }).catch(function (err) {
        return { data: null, errors: (0, _formatErrors2.default)(err, models) };
      });
    }
  },

  Mutation: {
    addAlbum: _permissions2.default.createResolver(function () {
      var _ref10 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, _ref8, _ref9) {
        var album = _ref8.album;
        var models = _ref9.models,
            user = _ref9.user;
        var id, details;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = album.id, details = (0, _objectWithoutProperties3.default)(album, ['id']);
                return _context.abrupt('return', !!models.Album.create((0, _extends3.default)({}, details, { userId: user.id })));

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      return function (_x, _x2, _x3) {
        return _ref10.apply(this, arguments);
      };
    }()),

    updateAlbum: _permissions2.default.createResolver(function () {
      var _ref13 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(parent, _ref11, _ref12) {
        var album = _ref11.album;
        var models = _ref12.models;
        var id, details;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                id = album.id, details = (0, _objectWithoutProperties3.default)(album, ['id']);
                return _context2.abrupt('return', !!models.Album.update((0, _extends3.default)({}, details), { where: { id: id } }));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      return function (_x4, _x5, _x6) {
        return _ref13.apply(this, arguments);
      };
    }()),

    addPhotosToAlbum: _permissions2.default.createResolver(function () {
      var _ref16 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(parent, _ref14, _ref15) {
        var albumId = _ref14.albumId,
            photoIds = _ref14.photoIds;
        var models = _ref15.models;
        var album, firstPhoto, cover, coverId, result;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return models.Album.findById(albumId);

              case 3:
                album = _context3.sent;

                if (album) {
                  _context3.next = 6;
                  break;
                }

                return _context3.abrupt('return', false);

              case 6:
                _context3.next = 8;
                return models.Photo.findById(photoIds[0]);

              case 8:
                firstPhoto = _context3.sent;

                // Set cover photo id and url
                cover = firstPhoto.dataValues.urls[_constants.COVER_SIZE];
                coverId = firstPhoto.dataValues.id;
                _context3.next = 13;
                return models.Album.update({ cover: cover, coverId: coverId }, { where: { id: albumId } });

              case 13:
                _context3.next = 15;
                return album.addPhotos(photoIds);

              case 15:
                result = _context3.sent;
                return _context3.abrupt('return', { data: !!result, errors: null });

              case 19:
                _context3.prev = 19;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', { data: false, errors: (0, _formatErrors2.default)(_context3.t0, models) });

              case 22:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined, [[0, 19]]);
      }));

      return function (_x7, _x8, _x9) {
        return _ref16.apply(this, arguments);
      };
    }()),

    removePhotosFromAlbum: _permissions2.default.createResolver(function () {
      var _ref19 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(parent, _ref17, _ref18) {
        var albumId = _ref17.albumId,
            photoIds = _ref17.photoIds;
        var models = _ref18.models;
        var album, result;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return models.Album.findById(albumId);

              case 3:
                album = _context4.sent;

                if (album) {
                  _context4.next = 6;
                  break;
                }

                return _context4.abrupt('return', false);

              case 6:
                _context4.next = 8;
                return album.removePhotos(photoIds);

              case 8:
                result = _context4.sent;
                return _context4.abrupt('return', { data: !!result, errors: null });

              case 12:
                _context4.prev = 12;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', { data: false, errors: (0, _formatErrors2.default)(_context4.t0, models) });

              case 15:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined, [[0, 12]]);
      }));

      return function (_x10, _x11, _x12) {
        return _ref19.apply(this, arguments);
      };
    }()),

    addView: function () {
      var _ref22 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(parent, _ref20, _ref21) {
        var albumId = _ref20.albumId;
        var models = _ref21.models;
        var album, views;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return models.Album.findById(albumId);

              case 2:
                album = _context5.sent;
                views = album.dataValues.views;

                views += 1;
                return _context5.abrupt('return', !!album.update({ views: views }));

              case 6:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      function addView(_x13, _x14, _x15) {
        return _ref22.apply(this, arguments);
      }

      return addView;
    }(),

    deleteAlbum: _permissions2.default.createResolver(function () {
      var _ref25 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(parent, _ref23, _ref24) {
        var albumId = _ref23.albumId;
        var models = _ref24.models;
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt('return', !!models.Album.destroy({ where: { id: albumId } }));

              case 1:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      return function (_x16, _x17, _x18) {
        return _ref25.apply(this, arguments);
      };
    }())
  }
};

exports.default = AlbumsResolver;