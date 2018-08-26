export default `
  scalar Upload

  type UploadResponse {
    success: Boolean!
    exif: String
    error: String
    url: String
  }

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
  }
`;
