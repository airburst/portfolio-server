export default `
  type Photo {
    id: Int!
    urls: [String]!
    thumbnail: String!
    title: String
    caption: String
    width: Int!
    height: Int!
    exposure: Int
    shutter: Int
    aperture: Int
    iso: Int
    focalLength: Int
    dateTaken: String
    isPublic: Boolean!
    createdAt: String!
  }

  type PhotoResponse {
    data: [Photo!]
    errors: [DatabaseError!]
  }

  type Query {
    allPhotos: PhotoResponse!
  }
`;
