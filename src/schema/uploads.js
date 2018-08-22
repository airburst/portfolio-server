export default `
  scalar Upload

  type Mutation {
    uploadPhoto(file: Upload!): Boolean!
  }
`;
