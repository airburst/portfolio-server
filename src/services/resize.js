/* eslint-disable no-confusing-arrow */
import path from 'path';
import fs from 'file-system';
import dotenv from 'dotenv';
import mkdirp from 'mkdirp';
import sharp from 'sharp';
import {
  UPLOAD_FOLDER,
  PHOTOS_FOLDER,
  SIZES,
  DELIM,
  THUMBNAIL_SIZE,
} from '../constants';
import { ROOT } from './utils';

dotenv.config();

const BASE_URL = path.join(ROOT, PHOTOS_FOLDER);

// Write any missing folders in a file path
const writePath = (filePath, cb) => mkdirp.sync(path.dirname(filePath));

const fileExists = (filePath) => fs.existsSync(filePath);

const getNewFileVersion = (filePath, version = 0) => {
  if (!fileExists(filePath)) {
    return filePath;
  }
  const folder = path.dirname(filePath);
  const newFilename = path.basename(filePath);
  const ext = path.extname(newFilename);
  const body = newFilename.split('.')[0].split(`${DELIM}${version}`)[0];
  return getNewFileVersion(
    path.join(folder, `${body}${DELIM}${version + 1}${ext}`),
    version + 1,
  );
};

const safeName = (f) => f.replace(/[^a-z0-9._-]/gi, '').toLowerCase();

const makeFolderName = (fileName) => {
  const d = new Date();
  const y = d.getFullYear().toString();
  const m = (d.getMonth() + 1).toString();
  const day = d.getDate().toString();
  const filePath = path.join(BASE_URL, y, m, day, safeName(fileName || ''));
  return getNewFileVersion(filePath);
};

const makeRelativePath = (absolutePath) => `/${absolutePath.replace(ROOT, '')}`;

const getDimensions = (size) => {
  if (!size || size === 'original') {
    return '';
  }
  // Set filename with size and an 'h' for fixed-height crops and w for width
  if (size.height) {
    return `-${size.height}h`;
  }
  if (size.width) {
    return `-${size.width}w`;
  }
  return `-${size}w`;
};

const imageIsTooSmall = (actualWidth, resizeTo) => {
  if (resizeTo === 'original') {
    return false;
  }
  const resizeWidth = resizeTo.width ? resizeTo.width : resizeTo;
  return actualWidth < resizeWidth;
};

// Return a size object oriented to resize the longest edge
const longestEdge = ({ width, height }, resizeTo) =>
  // const aspect = width / height;
  width >= height
    ? { width: resizeTo, height: null }
    : { width: null, height: resizeTo };

// eslint-disable-next-line import/prefer-default-export
export const resize = (filename, exif) => async (size) => {
  if (imageIsTooSmall(exif.width, size)) {
    return Promise.resolve(null); // Don't upsample!
  }
  if (size.longestEdge) {
    size = longestEdge(exif, size.longestEdge); // Resize to correct orientation
  }
  const inPath = path.join(ROOT, UPLOAD_FOLDER, filename);
  const ext = path.extname(filename);
  const outName = makeFolderName(
    `${filename.split(ext)[0]}${getDimensions(size)}${ext}`,
  );
  try {
    writePath(outName);

    const outPath = path.join(outName);
    if (typeof size === 'number') {
      await sharp(inPath).resize(size).toFormat('jpeg').toFile(outPath);
    } else {
      await sharp(inPath)
        .resize(size.width, size.height)
        .toFormat('jpeg')
        .toFile(outPath);
    }
    // Convert file paths to relative server paths
    return Promise.resolve(makeRelativePath(outPath));
  } catch (e) {
    console.log('resize error:', e.message);
    return Promise.reject(e);
  }
};

export const resizeImage = async (filename, exif) => {
  try {
    const name = path.basename(filename);
    const urls = await Promise.all(SIZES.map(resize(filename, exif)));
    return {
      name,
      urls,
      thumbnail: urls[THUMBNAIL_SIZE],
      error: null,
    };
  } catch (err) {
    return { url: null, error: err };
  }
};
