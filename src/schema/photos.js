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
    name: String!
    success: Boolean!
    exif: String
    error: String
    thumbnail: String
  }

  type Photo {
    id: Int!
    name: String!
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

  input PhotoInput {
    id: Int!
    name: String
    title: String
    caption: String
    isPublic: Boolean
  }

  type PhotoResponse {
    data: [Photo!]
    errors: [Error!]
  }

  type Progress {
    filename: String
    percentage: Int
  }

  type Query {
    allPhotos(albumId: Int, orderBy: PhotoOrderByInput): PhotoResponse!
  }

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
    uploadPhotos(files: [Upload!]!, sizes: [Int!]): [UploadResponse!]!
    updatePhoto(photo: PhotoInput!): Boolean!
    deletePhoto(id: Int!): Boolean!
  }

  type Subscription {
    uploadStarted: String
    uploadProgress(filename: String!): Progress
  }
`;
