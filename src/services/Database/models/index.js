import User from './User';
import Photo from './Photo';

// Associations
Photo.belongsTo(User);
User.hasMany(Photo);

export default {
  User,
  Photo,
};
