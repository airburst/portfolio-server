import path from 'path';
import { ExifImage } from 'exif';
import sizeOf from 'image-size';

// TODO: read title and caption
const filterExif = (data) => {
  if (!data) { return {}; }
  return {
    exposure: data.exif && data.exif.ExposureTime,
    shutter: data.exif && data.exif.ShutterSpeedValue,
    aperture: data.exif && data.exif.FNumber,
    iso: data.exif && data.exif.ISO,
    focalLength: data.exif && data.exif.FocalLength,
    dateTaken: data.exif && data.exif.CreateDate,
  };
};

export default filename => new Promise((resolve) => {
  const file = path.join(__dirname, '../../uploads', filename);
  // eslint-disable-next-line no-new
  new ExifImage({ image: file }, ((error, exifData) => {
    resolve({ ...filterExif(exifData), ...sizeOf(file) });
  }));
});
