'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.emitUploadProgress = exports.emitUploadStarted = exports.UPLOAD_PROGRESS = exports.UPLOAD_STARTED = undefined;

var _apolloServer = require('apollo-server');

var pubsub = new _apolloServer.PubSub();
exports.default = pubsub;
var UPLOAD_STARTED = exports.UPLOAD_STARTED = 'UPLOAD_STARTED';
var UPLOAD_PROGRESS = exports.UPLOAD_PROGRESS = 'UPLOAD_PROGRESS';

var emitUploadStarted = exports.emitUploadStarted = function emitUploadStarted(filename) {
  return pubsub.publish(UPLOAD_STARTED, {
    uploadStarted: filename
  });
};

var emitUploadProgress = exports.emitUploadProgress = function emitUploadProgress(filename, percentage) {
  return pubsub.publish(UPLOAD_PROGRESS, {
    uploadProgress: { filename: filename, percentage: percentage }
  });
};