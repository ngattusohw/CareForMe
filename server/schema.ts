import {gql} from 'apollo-server-express';

export const typeDefs = gql`
type Query {
  getUser(id: ID): User
  getDoctors: [User]!
  getCampaigns: [Campaign]!
  getCampaignsFiltered(filter: Campaign): [Campaign]!
  getUpdates(campaignid: ID): [Update]!
  getDonationsByUser(userid: ID): [Donation]!
  getDonationsByCampaign(campaignid: ID): [Donation]!
  getDonation(id: ID): Donation
  getUpdatesByCampaign(campaignid: ID): [Update]!
  me: User
}

type Mutation {
}

type User {
  id: ID!
  name: String!
  doctor: Boolean!
  date: String!
  bio: String
  picture: String
}

type Campaign {
  id: ID!
  description: String!
  creator: User!
  goal: Int!
  recurring: Boolean!
  date: String!
  doctor: User
  wantsApproval: Boolean
  updateIds: [ID]
  donationIds: [ID]
}

type Update {
  id: ID!
  userId: ID!
  comment: String!
  date: String!
}

type Donation {
  id: ID!
  userId: ID!
  campaignId: ID!
  amount: Int!
  date: String!
}
`;
