import { gql } from 'apollo-server-express';

export default gql`
    type User {
      id: Int
      firstName: String
      lastName: String
      email: String
    }

    type UserMutationResponse {
      success: Boolean
      message: String
      user: User
    }

    extend type Query {
      users(firstName: String, lastName: String, email: String): [User]
      user(id: Int!): User
    }
    extend type Mutation {
      createUser(
        firstName: String!
        lastName: String
        email: String
      ): UserMutationResponse

      deleteUser(id: Int!): UserMutationResponse
    }
  `;
