'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = require('./sequelize');

var _sequelize4 = _interopRequireDefault(_sequelize3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Album = _sequelize4.default.define('albums', {
  id: {
    type: _sequelize2.default.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: _sequelize2.default.STRING,
    allowNull: false
  },
  slug: _sequelize2.default.STRING,
  description: _sequelize2.default.TEXT,
  cover: _sequelize2.default.STRING,
  coverId: _sequelize2.default.INTEGER,
  isPublic: {
    type: _sequelize2.default.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  views: {
    type: _sequelize2.default.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  bin: {
    type: _sequelize2.default.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  indexes: [{
    name: 'i_album_name',
    unique: true,
    fields: ['name']
  }]
});

exports.default = Album;