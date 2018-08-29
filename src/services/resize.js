import path from 'path';
import fs from 'file-system';
import dotenv from 'dotenv';
import mkdirp from 'mkdirp';
import sharp from 'sharp';
import {
  UPLOAD_FOLDER, PHOTOS_FOLDER, SIZES, DELIM, THUMBNAIL_SIZE,
} from '../constants';

dotenv.config();

const BASE_URL = path.join(__dirname, `../../${PHOTOS_FOLDER}`);

// Write any missing folders in a file path
const writePath = (filePath, cb) => {
  mkdirp(path.dirname(filePath), (err) => {
    if (err) return cb(err);
    return cb();
  });
};

const fileExists = filePath => fs.existsSync(filePath);

const getNewFileVersion = (filePath, version = 0) => {
  if (!fileExists(filePath)) {
    return filePath;
  }
  const folder = path.dirname(filePath);
  const newFilename = path.basename(filePath);
  const ext = path.extname(newFilename);
  const body = newFilename.split('.')[0].split(`${DELIM}${version}`)[0];
  return getNewFileVersion(path.join(folder, `${body}${DELIM}${version + 1}${ext}`), version + 1);
};

const safeName = f => f.replace(/[^a-z0-9._-]/gi, '').toLowerCase();

const makeFolderName = (fileName) => {
  const d = new Date();
  const y = d.getFullYear().toString();
  const m = (d.getMonth() + 1).toString();
  const day = d.getDate().toString();
  const filePath = path.join(BASE_URL, y, m, day, safeName(fileName || ''));
  return getNewFileVersion(filePath);
};

const makeRelativePath = (absolutePath) => {
  const abs = path.join(__dirname, '../..');
  return absolutePath.replace(abs, `${process.env.SERVER_URI}:${process.env.PORT}`);
};

const getDimensions = (size) => {
  if (!size || size === 'original') {
    return '';
  }
  // Set filename with size and an 'h' for fixed-height crops and w for width
  if (size.height) { return `-${size.height}h`; }
  if (size.width) { return `-${size.width}w`; }
  return `-${size}w`;
};

const imageIsTooSmall = (actualWidth, resizeTo) => {
  if (resizeTo === 'original') { return false; }
  const resizeWidth = resizeTo.width ? resizeTo.width : resizeTo;
  return (actualWidth < resizeWidth);
};

// Return a size object oriented to resize the longest edge
const longestEdge = ({ width, height }, resizeTo) =>
  // const aspect = width / height;
  ((width >= height)
    ? { width: resizeTo, height: null }
    : { width: null, height: resizeTo });

// eslint-disable-next-line import/prefer-default-export
export const resize = (filename, exif) => size => new Promise((resolve, reject) => {
  if (imageIsTooSmall(exif.width, size)) {
    resolve(null); // Don't upsample!
  }
  if (size.longestEdge) {
    size = longestEdge(exif, size.longestEdge); // Resize to correct orientation
  }
  const inPath = path.join(__dirname, `../../${UPLOAD_FOLDER}`, filename);
  const ext = path.extname(filename);
  const outName = makeFolderName(`${filename.split(ext)[0]}${getDimensions(size)}${ext}`);
  try {
    writePath(outName, async () => {
      const outPath = path.join(outName);
      if (typeof size === 'number') {
        await sharp(inPath)
          .resize(size)
          .toFormat('jpeg')
          .toFile(outPath);
      } else {
        await sharp(inPath)
          .resize(size.width, size.height)
          .toFormat('jpeg')
          .toFile(outPath);
      }
      // Convert file paths to relative server paths
      resolve(makeRelativePath(outPath));
    });
  } catch (e) {
    console.log('resize error:', e.message);
    reject(e);
  }
});

export const resizeImage = async (filename, exif) => {
  try {
    const name = path.basename(filename);
    const urls = await Promise.all(SIZES.map(resize(filename, exif)));
    return {
      name, urls, thumbnail: urls[THUMBNAIL_SIZE], error: null,
    };
  } catch (err) {
    return { url: null, error: err };
  }
};

/* Use like:
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy"> */
