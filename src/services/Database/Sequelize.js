import Sequelize from 'sequelize';
import { credentials } from './config';

const {
  host, user, password, database, port,
} = credentials;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  logging: false,
  // sync: { force: true },
});

export default sequelize;
