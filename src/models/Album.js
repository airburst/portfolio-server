import Sequelize from 'sequelize';
import sequelize from './sequelize';

const Album = sequelize.define('albums', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: Sequelize.STRING,
  description: Sequelize.TEXT,
  cover: Sequelize.STRING,
  coverId: Sequelize.INTEGER,
  isPublic: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  views: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  bin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
}, {
  indexes: [
    {
      name: 'i_album_name',
      unique: true,
      fields: ['name'],
    },
  ],
});


export default Album;
