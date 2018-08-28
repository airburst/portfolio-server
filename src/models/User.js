import dotenv from 'dotenv';
import bcrypt from 'bcrypt';
import Sequelize from 'sequelize';
import sequelize from './sequelize';
import { SALT_ROUNDS } from '../constants';

// export const compareHash = (password, hashed) => bcrypt.compareSync(password, hashed);

dotenv.config();

const { Op } = Sequelize;

const User = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  isAdmin: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  blocked: Sequelize.BOOLEAN,
});

// Hash password before committing to db
User.beforeCreate((u) => {
  u.password = bcrypt.hashSync(u.password, SALT_ROUNDS);
});

export const findByLogin = async (login) => {
  let user = await User.findOne({
    where: { username: login },
  });

  if (!user) {
    user = await User.findOne({
      where: { email: login },
    });
  }

  return user;
};

export default User;
