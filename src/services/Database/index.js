import Sequelize from 'sequelize';
import sequelize from './Sequelize';
import Models from './models';
import { createHash } from '../auth';

const { Op } = Sequelize;
const { User, Photo } = Models;

class Database {
  start() {
    return new Promise(async (resolve) => {
      try {
        await sequelize.sync({ force: true });
        resolve();
      } catch (err) {
        console.error(`Database start FAIL: ${err.message}`);
        process.exit(-1);
      }
    });
  }

  // Authenticate

  // Add user
  async addUser({
    username, email, password, isAdmin = false,
  }) {
    try {
      const result = await User.create({
        username, email, password: createHash(password), isAdmin,
      });
      const { id } = result.dataValues;
      return { id, errors: [] };
    } catch (err) {
      console.error(`Database:addUser FAIL (${username},${email}): ${err.errors}`);
      return { id: null, errors: err.errors };
    }
  }

  // Update user

  // Delete user

  // Get all photos for user
  async getPhotos(userId) {
    if (!userId) { return []; }
    try {
      const result = await Photo.findAll({
        attributes: ['url'],
        where: { user_id: { [Op.eq]: userId } },
      });
      if (!result) { return []; }
      return result.map(r => r.dataValues).map(r => Object.values(r)[0]);
    } catch (err) {
      console.error(`Database:getPhotos FAIL (userId=${userId}): ${err.message}`);
      return [];
    }
  }

  // Add a photo
  async addPhoto(photoObject) {
    try {
      const result = await Photo.create(photoObject);
      return result && result.dataValues.id;
    } catch (err) {
      console.error(`Database:addPhoto FAIL (${photoObject}): ${err.message}`);
      return null;
    }
  }

  // Update a photo

  // Delete a photo

  // Add GET types here
}

export default new Database();

// async getSql(sql) {
//   try {
//     const result = await sequelize.query(sql, { type: sequelize.QueryTypes.SELECT });
//     if (!result) { return []; }
//     return result.map(r => Object.values(r))[0];
//   } catch (err) {
//     console.error(`Database:getTypes FAIL: ${err.message}`);
//     return [];
//   }
// }
