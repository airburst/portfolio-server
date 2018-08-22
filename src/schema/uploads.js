export default `
  scalar Upload

  type UploadResponse {
    success: Boolean!
    exif: String
    error: String
    files: [String!]
  }

  type Mutation {
    uploadPhoto(file: Upload!): UploadResponse!
  }
`;
