"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = "\n  type Error {\n    path: String\n    message: String\n    type: String\n  }\n\n  type createRecordResponse {\n    id: Int\n    errors: [Error!]\n  }\n\n  type LoginResponse {\n    success: Boolean!\n    token: String\n    refreshToken: String\n    errors: [Error!]\n  }\n\n  type Mutation {\n    addUser(username: String!, email: String!, password: String!, isAdmin: Boolean): createRecordResponse!\n    login(username: String!, password: String!): LoginResponse!\n  }\n";