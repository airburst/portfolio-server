
import path from 'path';
import { PHOTOS_FOLDER } from '../constants';

const env = process.env.NODE_ENV;

export const HTTP_URL = `${process.env.SERVER_URI}:${process.env.PORT}`;

export const PHOTO_URL = `${HTTP_URL}/${PHOTOS_FOLDER}`;

export const ROOT = (env && env === 'development')
  ? path.join(__dirname, '../../')
  : '/usr/app';
