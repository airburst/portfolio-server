export default `
  type Album {
    id: Int!
    name: String!
    cover: String!
    isPublic: Boolean!
    createdAt: String!
    photos: [Photo!]
  }

  input AlbumInput {
    name: String
    cover: String
    isPublic: Boolean
  }

  type AlbumResponse {
    data: [Album!]
    errors: [Error!]
  }

  type Query {
    allAlbums: AlbumResponse!
    getPublicAlbums: AlbumResponse!
  }

  type Mutation {
    addAlbum(album: AlbumInput!): Boolean!
  }
`;
