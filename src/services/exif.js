import path from 'path';
import { ExifImage } from 'exif';

// TODO: read title and caption
const filterExif = (data) => {
  if (!data) { return {}; }
  return {
    width: data.image && data.image.ImageWidth,
    height: data.image && data.image.ImageHeight,
    exposure: data.exif && data.exif.ExposureTime,
    shutter: data.exif && data.exif.ShutterSpeedValue,
    aperture: data.exif && data.exif.FNumber,
    iso: data.exif && data.exif.ISO,
    focalLength: data.exif && data.exif.FocalLength,
    dateTaken: data.exif && data.exif.CreateDate,
  };
};

export default filename => new Promise((resolve) => {
  try {
    const file = path.join(__dirname, '../../uploads', filename);
    // eslint-disable-next-line no-new
    new ExifImage({ image: file }, ((error, exifData) => {
      if (error) {
        resolve({ error: error.message, exif: null });
      } else {
        resolve({ exif: filterExif(exifData), error: null });
      }
    }));
  } catch (error) {
    resolve({ error: error.message, exif: null });
  }
});
