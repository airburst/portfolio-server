import getExifData from './exif';
import { resizeImage } from './resize';

export default file => new Promise(async (resolve, reject) => {
  try {
    const { exif, error } = await getExifData(file);
    const files = await resizeImage(file);
    resolve({ exif, error, files });
  } catch (e) {
    reject(e);
  }
});
