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
  donate(campaignid: ID, amount: Int): Donation
  update(campaignid: ID, update: Update): Update
  createCampaign(description: String, creatorid: ID, goal: Int, recurring: Boolean, wantsApproval: Boolean): Campaign
  createUser(name: String, doctor: Boolean, bio: String, picture: String): User
  updateUser(userid: ID, user: User): User
  deleteUser(id: ID): Boolean
  deleteCampaign(id: ID): Boolean
  deleteDonationPledge(id: ID): Boolean
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
