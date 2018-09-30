import models from './index';

const { User } = models;

export default async () => {
  // Create default user
  const username = process.env.USERNAME || 'test';
  const email = process.env.EMAIL || 'test@test.com';
  const password = process.env.PASSWORD || 'password';

  const found = await User.findOne({ where: { email } });

  if (!found) {
    await User.create({
      username, email, password, isAdmin: true,
    });
  }
};
