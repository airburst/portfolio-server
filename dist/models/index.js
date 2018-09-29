'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('./sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _User = require('./User');

var _User2 = _interopRequireDefault(_User);

var _Photo = require('./Photo');

var _Photo2 = _interopRequireDefault(_Photo);

var _Album = require('./Album');

var _Album2 = _interopRequireDefault(_Album);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Associations
_Photo2.default.belongsTo(_User2.default);
_Album2.default.belongsTo(_User2.default);
_Photo2.default.belongsToMany(_Album2.default, { through: 'album_photos' });
_Album2.default.belongsToMany(_Photo2.default, { through: 'album_photos', onDelete: 'CASCADE' });
/**
 * Provides the following accessor methods:
 * Album.getPhotos
 * Album.setPhotos
 * Album.addPhoto(s)
 * Album.removePhoto(s)  .. and likelwise for Photos.getAlbums, etc.
 */

exports.default = {
  User: _User2.default,
  findByLogin: _User.findByLogin,
  Photo: _Photo2.default,
  Album: _Album2.default,
  sequelize: _sequelize2.default
};

// TODO: add indexes for sort and search cols