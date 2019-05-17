import { gql } from 'apollo-server-express';

export const typeDefs = gql`
	type User {
		id: ID!
		name: String!
		doctor: Boolean!
		date: String!
		bio: String
		picture: String
	}

	input UserInput {
		name: String
		doctor: Boolean
		date: String
		bio: String
		picture: String
	}

	type Campaign {
		id: ID!
		description: String!
		creatorid: ID!
		goal: Int!
		recurring: Boolean!
		date: String!
		doctorid: ID
		wantsApproval: Boolean
		updateIds: [ID]
		donationIds: [ID]
	}

	input CampaignInput {
		description: String
		creatorid: ID
		goal: Int
		recurring: Boolean
		date: String
		doctorid: ID
		wantsApproval: Boolean
	}

	type Update {
		id: ID!
		userId: ID!
		campaignId: ID!
		comment: String!
		date: String!
	}

	input UpdateInput {
		comment: String
		userId: ID
		campaignId: ID
		date: String
	}

	type Donation {
		id: ID!
		userId: ID!
		campaignId: ID!
		amount: Int!
		date: String!
	}

	type Query {
		getUser(id: ID): User
		getDoctors: [User]!
		getCampaigns: [Campaign]!
		getCampaignsFiltered(filter: CampaignInput): [Campaign]!
		getUpdates(campaignid: ID): [Update]!
		getDonationsByUser(userid: ID): [Donation]!
		getDonationsByCampaign(campaignid: ID): [Donation]!
		getDonation(id: ID): Donation
		getUpdatesByCampaign(campaignid: ID): [Update]!
		me: User
	}

	type Mutation {
		donate(campaignid: ID, amount: Int): Donation
		update(campaignid: ID, update: UpdateInput): Update
		createCampaign(
			description: String
			creatorid: ID
			goal: Int
			recurring: Boolean
			wantsApproval: Boolean
		): Campaign
		createUser(name: String, doctor: Boolean, bio: String, picture: String): User
		updateUser(userid: ID, user: UserInput): User
		deleteUser(id: ID): Boolean
		deleteCampaign(id: ID): Boolean
		deleteDonationPledge(id: ID): Boolean
	}
`;
