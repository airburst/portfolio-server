export const UPLOAD_FOLDER = 'uploads';
export const PHOTOS_FOLDER = 'photos';
export const SALT_ROUNDS = 10;
export const ALBUM = 'album';
export const PHOTO = 'photo';

// Responsive resizing
// Number = width
// Object = { width, height }
export const SIZES = [
  'original',
  2560,
  1440,
  960,
  700,
  360,
  { longestEdge: 150 },
];
export const COVER_SIZE = 5; // item in SIZES array
export const THUMBNAIL_SIZE = 6; // item in SIZES array
export const BATCH_CONCURRENCY = 5;
export const DELIM = '__';
