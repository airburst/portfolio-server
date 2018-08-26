import models from './index';

const { User, Photo } = models;

export default async () => {
  // Create users
  await User.create({
    username: 'mark', email: 'mark@fairhursts.net', password: 'password', isAdmin: true,
  });
  await User.create({ username: 'bob', email: 'bob@bob.com', password: 'test' });

  // Create photos
};
