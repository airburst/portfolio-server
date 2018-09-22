import getExifData from './exif';
import { resizeImage } from './resize';

export default file => new Promise(async (resolve, reject) => {
  try {
    const exif = await getExifData(file);
    const {
      thumbnail, urls, error, name,
    } = await resizeImage(file, exif);
    resolve({
      exif, error, urls, thumbnail, name,
    });
  } catch (e) {
    reject(e);
  }
});
