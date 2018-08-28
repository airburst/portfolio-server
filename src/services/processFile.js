import getExifData from './exif';
import { resizeImage } from './resize';
// import { delay } from './batch';

export default file => new Promise(async (resolve, reject) => {
  try {
    const exif = await getExifData(file);
    const { thumbnail, urls, error } = await resizeImage(file, exif);
    // await delay(5000);
    resolve({
      exif, error, urls, thumbnail,
    });
  } catch (e) {
    reject(e);
  }
});
