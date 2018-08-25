import bcrypt from 'bcrypt';

const saltRounds = 10;

export const createHash = password => bcrypt.hashSync(password, saltRounds);

export const compareHash = (password, hashed) => bcrypt.compareSync(password, hashed);
