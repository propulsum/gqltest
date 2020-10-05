import { gql } from 'apollo-server-express';
import UserSchema from './userSchema';

export default [
  gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  `,
  UserSchema,
  gql`
    enum NoseconeShape {
      conical
      ogive
    }

    type Nosecone{
      id: Int
      partName: String
      radius: Float
      length: Float
      thickness: Float
      shape: NoseconeShape
    }

    extend type Query {
      nosecones: [Nosecone]
    }
    extend type Mutation {
      createNosecone(
        partName: String
        radius: Float
        length: Float
        thickness: Float
        shape: NoseconeShape
      ): Nosecone
      createRocketPart(
        partName: String
      ): String
    }
  `,
];
