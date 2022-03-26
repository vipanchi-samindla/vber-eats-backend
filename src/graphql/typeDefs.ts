import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum rolesEnum {
    USER
    OWNER
    RIDER
  }

  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
    role: rolesEnum!
    profileImage: String
    password: String!
  }

  type Restaurant {
    id: ID!
    name: String!
    phone: String!
    address: String!
    logo: String
    createdAt: String!
  }

  type Query {
    sampleQuery: String!
  }

  type Mutation {
    registerUser(username: String!, password: String!, email: String!): User!
  }
`;
