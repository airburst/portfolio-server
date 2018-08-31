import path from 'path';
import { createWriteStream } from 'file-system';
import progressStream from 'progress-stream';
import { UPLOAD_FOLDER } from '../constants';

const emitProgress = progress => console.log(Math.round(progress.percentage)); // TODO: subscription

export const setProgress = size => progressStream({ length: size, time: 10 }, emitProgress);

// TODO: make progress work!
export const storeUpload = (stream, filename, progress) =>
  new Promise((resolve, reject) => {
    const storePath = path.join(__dirname, `../../${UPLOAD_FOLDER}`, filename);
    // if (progress) {
    //   stream
    //     .pipe(progress)
    //     .pipe(createWriteStream(storePath))
    //     .on('finish', () => resolve())
    //     .on('error', err => reject(err));
    // } else {
    stream
      .pipe(createWriteStream(storePath))
      .on('finish', () => resolve())
      .on('error', err => reject(err));
    // }
  });

// TODO: delete file / folder
