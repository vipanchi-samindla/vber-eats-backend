import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  type Query {
    queryCheck: String!
  }

  type Mutation {
    mutationCheck: String!
  }
`;
