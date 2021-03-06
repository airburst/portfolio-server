export default `
  type Album {
    id: Int!
    name: String!
    slug: String
    description: String
    cover: String
    coverId: Int
    views: Int!
    isPublic: Boolean!
    createdAt: String!
    photos: [Photo!]
  }

  input AlbumInput {
    id: Int
    name: String
    slug: String
    description: String
    cover: String
    coverId: Int
    isPublic: Boolean
  }

  type AlbumResponse {
    data: Album
    errors: [Error!]
  }

  type AlbumsResponse {
    data: [Album!]
    errors: [Error!]
  }

  type AlbumUpdateResponse {
    data: Boolean!
    errors: [Error!]
  }

  type Query {
    allAlbums(id: Int): AlbumsResponse!
    getPublicAlbums: AlbumsResponse!
    getAlbum(albumId: Int!): AlbumResponse!
  }

  type Mutation {
    addAlbum(album: AlbumInput!): Boolean!
    updateAlbum(album: AlbumInput!): Boolean!
    addPhotosToAlbum(albumId: Int!, photoIds: [Int!]!): AlbumUpdateResponse!
    removePhotosFromAlbum(albumId: Int!, photoIds: [Int!]!): AlbumUpdateResponse!
    addView(albumId: Int!): Boolean!
    deleteAlbum(albumId: Int!): Boolean!
  }
`;

// setCover(albumId: Int!, photoId: Int!): AlbumUpdateResponse!
