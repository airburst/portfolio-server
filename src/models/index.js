import dotenv from 'dotenv';
import sequelize from './sequelize';
import User, { findByLogin } from './User';
import Photo from './Photo';

dotenv.config();

// Associations
Photo.belongsTo(User);
User.hasMany(Photo);

export default {
  User,
  findByLogin,
  Photo,
  sequelize,
};
