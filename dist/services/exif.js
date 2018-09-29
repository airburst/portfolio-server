'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _exif = require('exif');

var _imageSize = require('image-size');

var _imageSize2 = _interopRequireDefault(_imageSize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Convert '2015:07:11 11:56:35' to date
var convertDate = function convertDate(date) {
  if (!date) {
    return null;
  }
  var dateParts = date.split(' ');
  var dateString = [dateParts[0].replace(/:/gm, '-'), dateParts[1]].join('T');
  return new Date(dateString);
};

// TODO: read title and caption
var filterExif = function filterExif(data) {
  if (!data) {
    return {};
  }
  return {
    title: null,
    caption: data.image && data.image.ImageDescription,
    exposure: data.exif && data.exif.ExposureTime,
    shutter: data.exif && data.exif.ShutterSpeedValue,
    aperture: data.exif && data.exif.FNumber,
    iso: data.exif && data.exif.ISO,
    focalLength: data.exif && data.exif.FocalLength,
    dateTaken: data.exif && convertDate(data.exif.CreateDate)
  };
};

exports.default = function (filename) {
  return new _promise2.default(function (resolve) {
    var file = _path2.default.join(__dirname, '../../uploads', filename);
    // eslint-disable-next-line no-new
    new _exif.ExifImage({ image: file }, function (error, exifData) {
      resolve((0, _extends3.default)({}, filterExif(exifData), (0, _imageSize2.default)(file)));
    });
  });
};