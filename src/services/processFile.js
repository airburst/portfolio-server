import getExifData from './exif';
import { resizeImage } from './resize';

export default async (file) => {
  try {
    const exif = await getExifData(file);
    const { thumbnail, urls, error, name } = await resizeImage(file, exif);

    return Promise.resolve({
      exif,
      error,
      urls,
      thumbnail,
      name,
    });
  } catch (e) {
    return Promise.reject(e);
  }
};
