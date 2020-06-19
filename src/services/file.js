import fs, { createWriteStream } from 'file-system';
import path from 'path';
import progressStream from 'progress-stream';
import rimraf from 'rimraf';
import { UPLOAD_FOLDER } from '../constants';
import { emitUploadProgress } from '../pubsub';
import { ROOT } from './utils';

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
    (progress) =>
      console.log(filename, Math.round(progress.percentage)) ||
      emitUploadProgress(filename, Math.round(progress.percentage))
  );

// TODO: make progress work!
export const storeUpload = (createReadStream, filename) =>
  new Promise((resolve, reject) => {
    const storePath = path.join(ROOT, UPLOAD_FOLDER, filename);
    const readStream = createReadStream(filename);
    readStream
      .on('error', (error) => {
        if (readStream.truncated) {
          fs.unlinkSync(storePath);
        }
        reject(error);
      })
      .pipe(createWriteStream(storePath))
      .on('finish', () => resolve())
      .on('error', (err) => reject(err));
  });

const deleteFile = (filename, folder = '/') =>
  new Promise((resolve) => {
    const file = path.join(ROOT, folder, filename);
    rimraf(file, {}, (error) => {
      if (error) {
        console.log(`Unable to delete ${filename}`);
      }
      resolve();
    });
  });

export const deletePhotoFiles = async (files) => {
  if (files && files.length) {
    // Replace any non-null http url with ROOT
    const deNulledList = files.filter((n) => n);
    try {
      await Promise.all(deNulledList.map((f) => deleteFile(f)));
      return Promise.resolve();
    } catch (err) {
      return Promise.reject(err);
    }
  }
};

const deleteAllFiles = (folder) =>
  new Promise((resolve) => {
    rimraf(path.join(ROOT, folder, '/*'), {}, (error) => {
      if (error) {
        console.log(`Unable to clean files folder: ${error}`);
      }
      resolve();
    });
  });

export const cleanUploads = () => deleteAllFiles(UPLOAD_FOLDER);

export const cleanUpload = (filename) => deleteFile(filename, UPLOAD_FOLDER);
