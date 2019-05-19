import { User, Campaign, Update, Donation } from './models';
import { UserDB, CampaignDB, DonationDB, UpdateDB } from './mongoSchema';
import { Document, Schema, Model, model, Types } from 'mongoose';

const errorHandler = function(err, data) {
	if (err) {
		console.log(err);
	}
	console.log(data);
	return;
};

export const resolvers = {
	Query: {
		getUser: async (_, { id }, { dataSources }): Promise<User> => {
			const result = await UserDB.findOne({ _id: Types.ObjectId(id) }, errorHandler);
			return result;
		},
		getDoctors: async (_, {}, { dataSources }): Promise<User[]> => {
			const result = await UserDB.find({ doctor: true }, errorHandler);
			return result;
		},
		getCampaigns: async (_, {}, { dataSources }): Promise<Campaign[]> => {
			const result = await CampaignDB.find({ hasApproval: { $ne: false } }, errorHandler);
			return result;
		},
		getCampaignsFiltered: async (_, { filter }, { dataSources }): Promise<Campaign[]> => {
			const result = await CampaignDB.find(filter, errorHandler);
			return result;
		},
		getDonationsByUser: async (_, { userid }, { dataSources }): Promise<Donation[]> => {
			const result = await DonationDB.find({ userId: Types.ObjectId(userid) }, errorHandler);
			return result;
		},
		getDonationsByCampaign: async (_, { campaignid }, { dataSources }): Promise<Donation[]> => {
			const result = await DonationDB.find({ campaignId: Types.ObjectId(campaignid) }, errorHandler);
			return result;
		},
		getDonation: async (_, { id }, { dataSources }): Promise<Donation> => {
			const result = await DonationDB.findOne({ _id: Types.ObjectId(id) }, errorHandler);
			return result;
		},
		getUpdatesByCampaign: async (_, { campaignid }, { dataSources }): Promise<Update[]> => {
			const result = await UpdateDB.find({ campaignId: Types.ObjectId(campaignid) }, errorHandler);
			return result;
		},
		me: (): User => {
			return {
				id: 'U0',
				name: 'Test 0',
				doctor: false,
				date: '2019-01-01T00:00Z',
			};
		},
	},
	Mutation: {
		donate: async (_, { userid, campaignid, amount, donatorName }, { dataSources }): Promise<Donation> => {
			var data, result;
			data = DonationDB.create({
				_id: Types.ObjectId(),
				userId: Types.ObjectId(userid),
				campaignId: Types.ObjectId(campaignid),
				amount: amount,
				donatorName: donatorName,
			});
			try {
				result = await data;
			} catch (err) {
				throw err;
			}
			return result;
		},
		update: async (_, { userid, campaignid, comment }, { dataSources }): Promise<Update> => {
			var data, result;
			data = UpdateDB.create({
				_id: Types.ObjectId(),
				userId: Types.ObjectId(userid),
				campaignId: Types.ObjectId(campaignid),
				comment: comment,
			});
			try {
				result = await data;
			} catch (err) {
				throw err;
			}
			return result;
		},
		createCampaign: async (
			_,
			{ title, description, creatorid, goal, recurring, wantsApproval, creatorName },
			{ dataSources }
		): Promise<Campaign> => {
			var data, result;
			data = CampaignDB.create({
				_id: Types.ObjectId(),
				title: title,
				description: description,
				creatorid: Types.ObjectId(creatorid),
				goal: goal,
				recurring: recurring,
				donationIds: [],
				wantsApproval: wantsApproval,
				creatorName: creatorName,
			});
			try {
				result = await data;
			} catch (err) {
				throw err;
			}
			return result;
		},
		approveCampaign: async (_, { id }, { dataSources }): Promise<Campaign> => {
			var data, result;
			data = CampaignDB.findOneAndUpdate({ _id: Types.ObjectId(id) }, { $set: { hasApproval: true } });
			try {
				result = await data;
			} catch (err) {
				throw err;
			}
			return result;
		},
		createUser: async (_, { name, doctor, bio, picture }, { dataSources }): Promise<User> => {
			var data, result;
			data = UserDB.create({ _id: Types.ObjectId(), name: name, doctor: doctor, bio: bio, picture: picture });
			try {
				result = await data;
			} catch (err) {
				throw err;
			}
			return result;
		},
		updateUser: async (_, { id, user }, { dataSources }): Promise<User> => {
			var data, result;
			data = UserDB.findOneAndUpdate({ _id: Types.ObjectId(id) }, { $set: { user } });
			try {
				result = await data;
			} catch (err) {
				throw err;
			}
			return result;
		},
		deleteUser: (_, { id }, { dataSources }): boolean => {
			UserDB.deleteOne({ _id: Types.ObjectId(id) }, function(err) {
				if (err) {
					throw err;
				}
			});
			return true;
		},
		deleteCampaign: (_, { id }, { dataSources }): boolean => {
			CampaignDB.deleteOne({ _id: Types.ObjectId(id) }, function(err) {
				if (err) {
					throw err;
				}
			});
			return true;
		},
		deleteDonationPledge: (_, { id }, { dataSources }): boolean => {
			DonationDB.deleteOne({ _id: Types.ObjectId(id) }, function(err) {
				if (err) {
					throw err;
				}
			});
			return true;
		},
	},
};
