import getExifData from './exif';
import { resizeImage } from './resize';

export default file => new Promise(async (resolve, reject) => {
  try {
    const { exif, error } = await getExifData(file);
    const { url, resizeError } = await resizeImage(file);
    let uploadError = null;
    if (error) { uploadError = error; }
    if (resizeError) { uploadError = resizeError; }
    resolve({ exif, error: uploadError, url });
  } catch (e) {
    reject(e);
  }
});
