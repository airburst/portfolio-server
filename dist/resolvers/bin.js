'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _permissions = require('../services/permissions');

var _permissions2 = _interopRequireDefault(_permissions);

var _file = require('../services/file');

var _formatErrors = require('../formatErrors');

var _formatErrors2 = _interopRequireDefault(_formatErrors);

var _constants = require('../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Op = _sequelize2.default.Op;


var BinResolver = {
  Query: {
    allBinItems: _permissions2.default.createResolver(function (parent, args, _ref) {
      var models = _ref.models,
          user = _ref.user;

      var albums = models.Album.findAll({
        where: (0, _defineProperty3.default)({}, Op.and, {
          userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
          bin: (0, _defineProperty3.default)({}, Op.eq, true)
        }),
        include: [{ model: models.Photo, as: 'photos' }]
      }).then(function (result) {
        return {
          albums: result.map(function (r) {
            return r.dataValues;
          }),
          errors: null
        };
      }).catch(function (err) {
        return { photos: [], errors: (0, _formatErrors2.default)(err, models) };
      });

      var photos = models.Photo.findAll({
        where: (0, _defineProperty3.default)({}, Op.and, {
          userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
          bin: (0, _defineProperty3.default)({}, Op.eq, true)
        })
      }).then(function (result) {
        return {
          photos: result.map(function (r) {
            return r.dataValues;
          }),
          errors: null
        };
      }).catch(function (err) {
        return { albums: [], errors: (0, _formatErrors2.default)(err, models) };
      });

      // NOTE: This does not concatenate errors; last one wins!
      return _promise2.default.all([albums, photos]).then(function (result) {
        return result.reduce(function (prev, cur) {
          return (0, _extends3.default)({}, prev, cur);
        }, {});
      }).catch(function (err) {
        return { albums: [], photos: [], errors: (0, _formatErrors2.default)(err, models) };
      });
    })
  },

  Mutation: {
    addToBin: _permissions2.default.createResolver(function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(parent, _ref2, _ref3) {
        var type = _ref2.type,
            ids = _ref2.ids,
            albumId = _ref2.albumId;
        var models = _ref3.models,
            user = _ref3.user;

        var result, _result, albums;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(type === _constants.ALBUM)) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 1;
                _context.next = 4;
                return models.Album.update({ bin: true }, {
                  returning: true,
                  where: (0, _defineProperty3.default)({}, Op.and, {
                    userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
                    id: (0, _defineProperty3.default)({}, Op.in, ids)
                  })
                });

              case 4:
                result = _context.sent;
                return _context.abrupt('return', !!result);

              case 8:
                _context.prev = 8;
                _context.t0 = _context['catch'](1);
                return _context.abrupt('return', false);

              case 11:
                if (!(type === _constants.PHOTO)) {
                  _context.next = 26;
                  break;
                }

                _context.prev = 12;
                _context.next = 15;
                return models.Photo.update({ bin: true }, {
                  returning: true,
                  where: (0, _defineProperty3.default)({}, Op.and, {
                    userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
                    id: (0, _defineProperty3.default)({}, Op.in, ids)
                  })
                });

              case 15:
                _result = _context.sent;
                _context.next = 18;
                return models.Album.findAll();

              case 18:
                albums = _context.sent;

                albums.forEach(function (album) {
                  if (ids.includes(album.dataValues.coverId)) {
                    models.Album.update({ cover: null, coverId: null }, { where: { id: album.dataValues.id } });
                  }
                });

                return _context.abrupt('return', !!_result);

              case 23:
                _context.prev = 23;
                _context.t1 = _context['catch'](12);
                return _context.abrupt('return', false);

              case 26:
                return _context.abrupt('return', false);

              case 27:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined, [[1, 8], [12, 23]]);
      }));

      return function (_x, _x2, _x3) {
        return _ref4.apply(this, arguments);
      };
    }()),

    restore: _permissions2.default.createResolver(function () {
      var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(parent, args, _ref5) {
        var models = _ref5.models,
            user = _ref5.user;
        var restoreAlbums, restorePhotos;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return models.Album.update({ bin: false }, {
                  returning: true,
                  where: (0, _defineProperty3.default)({}, Op.and, {
                    userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
                    bin: (0, _defineProperty3.default)({}, Op.eq, true)
                  })
                });

              case 3:
                restoreAlbums = _context2.sent;
                _context2.next = 6;
                return models.Photo.update({ bin: false }, {
                  returning: true,
                  where: (0, _defineProperty3.default)({}, Op.and, {
                    userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
                    bin: (0, _defineProperty3.default)({}, Op.eq, true)
                  })
                });

              case 6:
                restorePhotos = _context2.sent;
                return _context2.abrupt('return', true);

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', false);

              case 13:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined, [[0, 10]]);
      }));

      return function (_x4, _x5, _x6) {
        return _ref6.apply(this, arguments);
      };
    }()),

    emptyBin: _permissions2.default.createResolver(function () {
      var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(parent, args, _ref7) {
        var models = _ref7.models,
            user = _ref7.user;
        var results;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return models.Album.destroy({
                  returning: true,
                  where: (0, _defineProperty3.default)({}, Op.and, {
                    userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
                    bin: (0, _defineProperty3.default)({}, Op.eq, true)
                  })
                });

              case 3:
                _context4.next = 5;
                return models.Photo.findAll({
                  attributes: ['id', 'urls'],
                  where: (0, _defineProperty3.default)({}, Op.and, {
                    userId: (0, _defineProperty3.default)({}, Op.eq, user.id),
                    bin: (0, _defineProperty3.default)({}, Op.eq, true)
                  })
                });

              case 5:
                results = _context4.sent;

                results.forEach(function () {
                  var _ref9 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(result) {
                    var _result$dataValues, id, urls;

                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _result$dataValues = result.dataValues, id = _result$dataValues.id, urls = _result$dataValues.urls;
                            _context3.next = 3;
                            return (0, _file.deletePhotoFiles)(urls);

                          case 3:
                            _context3.next = 5;
                            return models.Photo.destroy({ where: { id: id } });

                          case 5:
                          case 'end':
                            return _context3.stop();
                        }
                      }
                    }, _callee3, undefined);
                  }));

                  return function (_x10) {
                    return _ref9.apply(this, arguments);
                  };
                }());
                return _context4.abrupt('return', true);

              case 10:
                _context4.prev = 10;
                _context4.t0 = _context4['catch'](0);
                return _context4.abrupt('return', false);

              case 13:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined, [[0, 10]]);
      }));

      return function (_x7, _x8, _x9) {
        return _ref8.apply(this, arguments);
      };
    }())
  }
};

exports.default = BinResolver;