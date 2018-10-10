
import path from 'path';
import { PHOTOS_FOLDER } from '../constants';

const env = process.env.NODE_ENV;
console.log('TCL: env', env);

export const HTTP_URL = `${process.env.SERVER_URI}:${process.env.PORT}`;
console.log('TCL: HTTP_URL', HTTP_URL);

export const PHOTO_URL = `${HTTP_URL}/${PHOTOS_FOLDER}`;

export const ROOT = (env && env === 'development')
  ? path.join(__dirname, '../../')
  : path.join(__dirname, '../');
