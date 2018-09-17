import path from 'path';
import { ExifImage } from 'exif';
import sizeOf from 'image-size';

// Convert '2015:07:11 11:56:35' to date
const convertDate = (date) => {
  if (!date) { return null; }
  const dateParts = date.split(' ');
  const dateString = [dateParts[0].replace(/:/gm, '-'), dateParts[1]].join('T');
  return new Date(dateString);
};

// TODO: read title and caption
const filterExif = (data) => {
  if (!data) { return {}; }
  return {
    title: null,
    caption: data.image && data.image.ImageDescription,
    exposure: data.exif && data.exif.ExposureTime,
    shutter: data.exif && data.exif.ShutterSpeedValue,
    aperture: data.exif && data.exif.FNumber,
    iso: data.exif && data.exif.ISO,
    focalLength: data.exif && data.exif.FocalLength,
    dateTaken: data.exif && convertDate(data.exif.CreateDate),
  };
};

export default filename => new Promise((resolve) => {
  const file = path.join(__dirname, '../../uploads', filename);
  // eslint-disable-next-line no-new
  new ExifImage({ image: file }, ((error, exifData) => {
    resolve({ ...filterExif(exifData), ...sizeOf(file) });
  }));
});
