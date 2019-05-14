import {gql} from 'apollo-server-express';

export const typeDefs = gql`
type Query {
  me: User
}

type Mutation {
}

type User {
  id: ID!
  name: String!
  doctor: Boolean!
  bio: String
  picture: String
}

type Campaign {
  id: ID!
  description: String!
  creator: User!
  goal: Int!
  recurring: Boolean!
  doctor: User
  wantsApproval: Boolean
  updates: [ID]
  donations: [ID]
}

type Update {
  id: ID!
  user: ID!
  comment: String!
  date: String!
}

type Donation {
  id: ID!
  user: ID!
  campaign: ID!
  amount: Int!
}
`;
