import { gql } from 'apollo-server-express';

export default gql`
  type Book {
    title: String
    author: String
  }

  type User{
    firstName: String
    lastName: String
    email: String
  }

  type Query {
    books: [Book],
    users: [User]
  }
`;
