export default `
  scalar Upload

  type UploadResponse {
    success: Boolean!
    exif: String
    error: String
    thumbnail: String
  }

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

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
    uploadPhotos(files: [Upload!]!): [UploadResponse!]!
  }
`;
