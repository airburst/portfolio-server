import getExifData from './exif';
import { resizeImage } from './resize';

export default file => new Promise(async (resolve, reject) => {
  try {
    const exif = await getExifData(file);
    const { urls, thumbnail, error } = await resizeImage(file, exif);
    resolve({
      exif, error, urls, thumbnail,
    });
  } catch (e) {
    reject(e);
  }
});
