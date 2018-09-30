'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _index2.default.User,
    Photo = _index2.default.Photo,
    Album = _index2.default.Album;
exports.default = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
  var album, albumPhotos;
  return _regenerator2.default.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return User.create({
            username: 'test', email: 'test@fairhursts.net', password: 'password', isAdmin: true
          });

        case 2:
          _context.next = 4;
          return User.create({ username: 'bob', email: 'bob@bob.com', password: 'test' });

        case 4:
          _context.next = 6;
          return Photo.create({
            name: 'photo1',
            urls: [],
            thumbnail: 'http://localhost:3000/photos/9/1/photo1.url',
            title: 'New photo 1',
            width: 1800,
            height: 1200,
            userId: 1
          });

        case 6:
          _context.next = 8;
          return Photo.create({
            name: 'photo2',
            urls: [],
            thumbnail: 'http://localhost:3000/photos/9/1/photo2.url',
            title: 'New photo 2',
            width: 1800,
            height: 1200,
            userId: 1
          });

        case 8:
          _context.next = 10;
          return Album.create({
            name: 'General',
            cover: 'http://localhost:3000/photos/9/1/photo1.url',
            userId: 1
          });

        case 10:
          _context.next = 12;
          return Album.findById(1);

        case 12:
          album = _context.sent;
          _context.next = 15;
          return album.addPhotos([1, 2]);

        case 15:
          _context.next = 17;
          return album.getPhotos();

        case 17:
          albumPhotos = _context.sent;

          console.log('TCL: albumPhotos', albumPhotos.map(function (ap) {
            return ap.dataValues.title;
          }));

          // Deleting a photo also removes from album
          // await Photo.destroy({ where: { id: 1 } });
          // const albumPhotos2 = await album.getPhotos();
          // console.log('TCL: albumPhotos', albumPhotos2.map(ap => ap.dataValues.title));


          // Remove a photo from the album without deleting it (e.g. for other albums)
          // await album.removePhoto(1);
          // await album.removePhotos([1, 2]);
          // const albumPhotos2 = await album.getPhotos();
          // console.log('TCL: albumPhotos2', albumPhotos2.map(ap => ap.dataValues.title));

          // Deleting an album removes all join table links
          // await Album.destroy({ where: { id: 1 } });
          // await Photo.destroy({ where: { id: 1 } });
          // await Photo.destroy({ where: { id: 2 } });

        case 19:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));