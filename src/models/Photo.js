import Sequelize from 'sequelize';
import sequelize from './sequelize';

const Photo = sequelize.define('photos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  urls: {
    type: Sequelize.JSON,
    allowNull: false,
  },
  thumbnail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  title: Sequelize.STRING,
  caption: Sequelize.STRING,
  width: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  height: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  exposure: Sequelize.INTEGER,
  shutter: Sequelize.INTEGER,
  aperture: Sequelize.INTEGER,
  iso: Sequelize.INTEGER,
  focalLength: Sequelize.INTEGER,
  dateTaken: Sequelize.DATE,
  isPublic: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  bin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
},
{
  indexes: [
    {
      name: 'i_photo_name',
      unique: true,
      fields: ['name'],
    },
    {
      name: 'i_photo_title',
      unique: true,
      fields: ['title'],
    },
  ],
});

export default Photo;
