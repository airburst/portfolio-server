import sequelize from './sequelize';
import User, { findByLogin } from './User';
import Photo from './Photo';
import Album from './Album';

// Associations
Photo.belongsTo(User);
Album.belongsTo(User);
Photo.belongsToMany(Album, { through: 'album_photos' });
Album.belongsToMany(Photo, { through: 'album_photos', onDelete: 'CASCADE' });
/**
 * Provides the following accessor methods:
 * Album.getPhotos
 * Album.setPhotos
 * Album.addPhoto(s)
 * Album.removePhoto(s)  .. and likelwise for Photos.getAlbums, etc.
 */

export default {
  User,
  findByLogin,
  Photo,
  Album,
  sequelize,
};

// TODO: add indexes for sort and search cols
