export default `
  type Mutation {
    addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): Int
  }
`;
