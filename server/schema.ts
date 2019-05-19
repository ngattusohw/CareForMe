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
		title: String!
		description: String!
		creatorid: ID!
		goal: Int!
		recurring: Boolean!
		date: String!
		doctorid: ID
		wantsApproval: Boolean
		hasApproval: Boolean
	}

	input CampaignInput {
		title: String
		description: String
		creatorid: ID
		goal: Int
		recurring: Boolean
		date: String
		doctorid: ID
		wantsApproval: Boolean
		hasApproval: Boolean
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
		getUserFromSession(sessionId: String): String
		me(): User
	}

	type Mutation {
		donate(userid: ID, campaignid: ID, amount: Int, date: String): Donation
		update(campaignid: ID, update: UpdateInput): Update
		createCampaign(
			description: String
			creatorid: ID
			goal: Int
			recurring: Boolean
			wantsApproval: Boolean
		): Campaign
		approveCampaign(id: ID): Campaign
		createUser(name: String, date: String, doctor: Boolean, bio: String, picture: String): User
		updateUser(id: ID, user: UserInput): User
		deleteUser(id: ID): Boolean
		deleteCampaign(id: ID): Boolean
		deleteDonationPledge(id: ID): Boolean
		login(name: String): String
		logout(): Boolean
	}
`;
