export default `
  scalar Upload

  enum PhotoOrderByInput {
    id_ASC
    id_DESC
    title_ASC
    title_DESC
    dateTaken_ASC
    dateTaken_DESC
    createdAt_ASC
    createdAt_DESC
  }

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
    errors: [Error!]
  }

  type Query {
    allPhotos(orderBy: PhotoOrderByInput): PhotoResponse!
  }

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
    uploadPhotos(files: [Upload!]!, sizes: [Int!]): [UploadResponse!]!
  }
`;
