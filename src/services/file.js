import path from 'path';
import rimraf from 'rimraf';
import { createWriteStream } from 'file-system';
import progressStream from 'progress-stream';
import { UPLOAD_FOLDER, PHOTOS_FOLDER } from '../constants';

const ROOT = path.join(__dirname, '../../');
const HTTP_URL = `${process.env.SERVER_URI}:${process.env.PORT}`;
const PHOTO_URL = `${HTTP_URL}/photos`;

// TODO: subscription

const emitProgress = progress => console.log(Math.round(progress.percentage));

export const setProgress = size => progressStream({ length: size, time: 10 }, emitProgress);

// TODO: make progress work!
export const storeUpload = (stream, filename, progress) =>
  new Promise((resolve, reject) => {
    const storePath = path.join(__dirname, `../../${UPLOAD_FOLDER}`, filename);
    if (progress) {
      stream
        .pipe(progress)
        .pipe(createWriteStream(storePath))
        .on('finish', () => resolve())
        .on('error', err => reject(err));
    } else {
      stream
        .pipe(createWriteStream(storePath))
        .on('finish', () => resolve())
        .on('error', err => reject(err));
    }
  });

const deleteFile = (folder, filename) => new Promise((resolve) => {
  const file = path.join(ROOT, folder, filename);
  rimraf(file, {}, (error) => {
    if (error) {
      console.log(`Unable to delete ${filename}`);
    }
    resolve();
  });
});

export const deletePhotoFiles = files =>
  new Promise(async (resolve, reject) => {
    if (files && files.length) {
      // Replace any non-null http url with ROOT
      const deNulledList = files.filter(n => n);
      const localFiles = deNulledList.map(f => f && f.replace(PHOTO_URL, ''));
      try {
        await Promise.all(localFiles.map(f => deleteFile(PHOTOS_FOLDER, f)));
        resolve();
      } catch (err) {
        reject(err);
      }
    }
  });

const deleteAllFiles = folder => new Promise((resolve) => {
  rimraf(path.join(ROOT, folder, '/*'), {}, (error) => {
    if (error) {
      console.log(`Unable to clean files folder: ${error}`);
    }
    resolve();
  });
});

export const cleanUploads = () => deleteAllFiles(UPLOAD_FOLDER);

export const cleanUpload = filename => deleteFile(UPLOAD_FOLDER, filename);
