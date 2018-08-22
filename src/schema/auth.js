export default `
  type AuthResponse {
    success: Boolean!
    cookie: String
  }

  type Query {
    authenticate(username: String!, password: String!): AuthResponse!
  }
`;
