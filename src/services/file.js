import path from 'path';
import rimraf from 'rimraf';
import fs, { createWriteStream } from 'file-system';
import progressStream from 'progress-stream';
import { UPLOAD_FOLDER, PHOTOS_FOLDER } from '../constants';
import { emitUploadStarted, emitUploadProgress } from '../pubsub';

const ROOT = path.join(__dirname, '../../');
const HTTP_URL = `${process.env.SERVER_URI}:${process.env.PORT}`;
const PHOTO_URL = `${HTTP_URL}/photos`;

// TODO: subscription
/**
 * This function sets a subscription emitter for upload progress. The progress object exposes
 * properties for transferred (b), remaining (b), length (b) and percentage.
 * @param {*} size in bytes
 * @param {*} filename
 */
export const setProgress = (size, filename) =>
  progressStream(
    { length: size, time: 10 },
    progress => console.log(filename, Math.round(progress.percentage))
    || emitUploadProgress(filename, Math.round(progress.percentage)),
  );


// TODO: make progress work!
export const storeUpload = (stream, filename, progress) =>
  new Promise((resolve, reject) => {
    const storePath = path.join(__dirname, `../../${UPLOAD_FOLDER}`, filename);
    if (progress) {
      /* stream
          .pipe(progress)
          .pipe(createWriteStream(storePath))
          .on('finish', () => resolve())
          .on('error', err => reject(err)); */
    } else {
      stream
        .on('error', (error) => {
          if (stream.truncated) {
            fs.unlinkSync(storePath);
          }
          reject(error);
        })
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
