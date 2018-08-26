export default `
  type DatabaseError {
    message: String
    type: String
  }

  type createRecordResponse {
    id: Int
    errors: [DatabaseError]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): createRecordResponse!
  }
`;
