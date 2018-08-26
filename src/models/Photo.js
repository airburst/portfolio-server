import Sequelize from 'sequelize';
import sequelize from './sequelize';

const Photo = sequelize.define('photos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
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
});
// {
//   indexes: [
//     {
//       name: 'i_mex_name',
//       unique: true,
//       fields: ['mex_name'],
//     },
//     {
//       name: 'i_mex_parent_rec_id',
//       unique: true,
//       fields: ['mex_parent_rec_id'],
//     },
//   ],
// }

export default Photo;
