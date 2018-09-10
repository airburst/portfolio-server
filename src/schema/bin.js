export default `
  type BinResponse {
    albums: [Album!]
    photos: [Photo!]
    errors: [Error!]
  }

  type Query {
    allBinItems: BinResponse!
  }
`;

// type Mutation {
//   emptyBin: Boolean!
//   restoreAlbums(ids: [Int!]!): Boolean!
//   restorePhotos(ids: [Int!]!): Boolean!
//   restoreAll: Boolean!
// }
