export default `
  type BinResponse {
    albums: [Album!]
    photos: [Photo!]
    errors: [Error!]
  }

  type Query {
    allBinItems: BinResponse!
  }

  type Mutation {
    addToBin(type: String!, ids: [Int!]!): Boolean!
    restore: Boolean!
  }
`;

// type Mutation {
//   emptyBin: Boolean!
//   restoreAlbums(ids: [Int!]!): Boolean!
//   restorePhotos(ids: [Int!]!): Boolean!
//   restoreAll: Boolean!
// }
