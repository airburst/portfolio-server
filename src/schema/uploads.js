export default `
  scalar Upload

  type UploadResponse {
    success: Boolean!
    exif: String
    error: String
    thumbnail: String
    urls: [String]
  }

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
  }
`;
