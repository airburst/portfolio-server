'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = require('./sequelize');

var _sequelize4 = _interopRequireDefault(_sequelize3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Photo = _sequelize4.default.define('photos', {
  id: {
    type: _sequelize2.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  urls: {
    type: _sequelize2.default.JSON,
    allowNull: false
  },
  thumbnail: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  title: _sequelize2.default.STRING,
  caption: _sequelize2.default.STRING,
  width: {
    type: _sequelize2.default.INTEGER,
    allowNull: false
  },
  height: {
    type: _sequelize2.default.INTEGER,
    allowNull: false
  },
  exposure: _sequelize2.default.INTEGER,
  shutter: _sequelize2.default.INTEGER,
  aperture: _sequelize2.default.INTEGER,
  iso: _sequelize2.default.INTEGER,
  focalLength: _sequelize2.default.INTEGER,
  dateTaken: _sequelize2.default.DATE,
  isPublic: {
    type: _sequelize2.default.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  bin: {
    type: _sequelize2.default.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  indexes: [{
    name: 'i_photo_name',
    unique: true,
    fields: ['name']
  }, {
    name: 'i_photo_title',
    unique: true,
    fields: ['title']
  }]
});

exports.default = Photo;