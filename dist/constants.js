'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var UPLOAD_FOLDER = exports.UPLOAD_FOLDER = 'uploads';
var PHOTOS_FOLDER = exports.PHOTOS_FOLDER = 'photos';
var SALT_ROUNDS = exports.SALT_ROUNDS = 10;
var ALBUM = exports.ALBUM = 'album';
var PHOTO = exports.PHOTO = 'photo';

// Responsive resizing
// Number = width
// Object = { width, height }
var SIZES = exports.SIZES = ['original', 2560, 1440, 960, 700, 360, { longestEdge: 150 }];
var COVER_SIZE = exports.COVER_SIZE = 5; // item in SIZES array
var THUMBNAIL_SIZE = exports.THUMBNAIL_SIZE = 6; // item in SIZES array
var BATCH_CONCURRENCY = exports.BATCH_CONCURRENCY = 5;
var DELIM = exports.DELIM = '__';