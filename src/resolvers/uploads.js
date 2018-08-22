import { createWriteStream } from 'file-system';
import path from 'path';
import processFile from '../services/processFile';
import { UPLOAD_FOLDER } from '../constants';

const storeUpload = (stream, filePath) => new Promise((resolve, reject) =>
  stream
    .pipe(createWriteStream(filePath))
    .on('finish', () => resolve())
    .on('error', err => reject(err)));

export default {
  Mutation: {
    uploadPhoto: async (parent, { file }, { environment }) => {
      try {
        const { stream, filename, mimetype } = await file;
        const storePath = path.join(__dirname, `../../${UPLOAD_FOLDER}`, filename);

        // Image files only (jpg)
        if (mimetype !== 'image/jpeg') {
          console.error(`User tried to upload a file with mimetype: ${mimetype}`);
          return { success: false, error: 'You cannot upload this type of file' };
        }

        // Upload the file
        await storeUpload(stream, storePath);

        // Process the file
        const { exif, error, files } = await processFile(filename);

        if (filename) {
          console.info(`File ${filename} processed`);
        }
        return {
          success: true, exif: JSON.stringify(exif), error, files,
        };
      } catch (err) {
        console.error(err.message);
        return { success: false, error: err.message };
      }
    },
  },
};
