import models from './index';

const { User, Photo, Album } = models;

export default async () => {
  // Create users
  await User.create({
    username: 'test', email: 'test@fairhursts.net', password: 'password', isAdmin: true,
  });
  await User.create({ username: 'bob', email: 'bob@bob.com', password: 'test' });

  // Create photos
  await Photo.create({
    name: 'photo1',
    urls: [],
    thumbnail: 'http://localhost:3000/photos/9/1/photo1.url',
    title: 'New photo 1',
    width: 1800,
    height: 1200,
    userId: 1,
  });
  await Photo.create({
    name: 'photo2',
    urls: [],
    thumbnail: 'http://localhost:3000/photos/9/1/photo2.url',
    title: 'New photo 2',
    width: 1800,
    height: 1200,
    userId: 1,
  });

  // Create album
  await Album.create({
    name: 'General',
    cover: 'http://localhost:3000/photos/9/1/photo1.url',
    userId: 1,
  });

  // Add photos to album
  const album = await Album.findById(1);
  await album.addPhotos([1, 2]);

  // Get photos in album
  const albumPhotos = await album.getPhotos();
  console.log('TCL: albumPhotos', albumPhotos.map(ap => ap.dataValues.title));

  // Deleting a photo also removes from album
  // await Photo.destroy({ where: { id: 1 } });
  // const albumPhotos2 = await album.getPhotos();
  // console.log('TCL: albumPhotos', albumPhotos2.map(ap => ap.dataValues.title));


  // Remove a photo from the album without deleting it (e.g. for other albums)
  // await album.removePhoto(1);
  // await album.removePhotos([1, 2]);
  // const albumPhotos2 = await album.getPhotos();
  // console.log('TCL: albumPhotos2', albumPhotos2.map(ap => ap.dataValues.title));

  // Deleting an album removes all join table links
  // await Album.destroy({ where: { id: 1 } });
  // await Photo.destroy({ where: { id: 1 } });
  // await Photo.destroy({ where: { id: 2 } });
};
