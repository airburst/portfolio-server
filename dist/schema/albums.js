"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Album {\n    id: Int!\n    name: String!\n    slug: String\n    description: String\n    cover: String\n    coverId: Int\n    views: Int!\n    isPublic: Boolean!\n    createdAt: String!\n    photos: [Photo!]\n  }\n\n  input AlbumInput {\n    id: Int\n    name: String\n    slug: String\n    description: String\n    cover: String\n    coverId: Int\n    isPublic: Boolean\n  }\n\n  type AlbumResponse {\n    data: Album\n    errors: [Error!]\n  }\n\n  type AlbumsResponse {\n    data: [Album!]\n    errors: [Error!]\n  }\n\n  type AlbumUpdateResponse {\n    data: Boolean!\n    errors: [Error!]\n  }\n\n  type Query {\n    allAlbums(id: Int): AlbumsResponse!\n    getPublicAlbums: AlbumsResponse!\n    getAlbum(albumId: Int!): AlbumResponse!\n  }\n\n  type Mutation {\n    addAlbum(album: AlbumInput!): Boolean!\n    updateAlbum(album: AlbumInput!): Boolean!\n    addPhotosToAlbum(albumId: Int!, photoIds: [Int!]!): AlbumUpdateResponse!\n    removePhotosFromAlbum(albumId: Int!, photoIds: [Int!]!): AlbumUpdateResponse!\n    addView(albumId: Int!): Boolean!\n    deleteAlbum(albumId: Int!): Boolean!\n  }\n";

// setCover(albumId: Int!, photoId: Int!): AlbumUpdateResponse!