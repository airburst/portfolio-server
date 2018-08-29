export default `
  type Error {
    path: String
    message: String
    type: String
  }

  type createRecordResponse {
    id: Int
    errors: [Error!]
  }

  type LoginResponse {
    success: Boolean!
    token: String
    refreshToken: String
    errors: [Error!]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): createRecordResponse!
    login(username: String!, password: String!): LoginResponse!
  }
`;
