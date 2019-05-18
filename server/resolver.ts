import { User, Campaign, Update, Donation } from './models';
import { UserDB, CampaignDB, DonationDB, UpdateDB } from './mongo/mongoSchema';


export const resolvers = {
	Query: {
		getUser: async (_, { id }, { dataSources }): Promise<User> => {
			var result;
			const find = await UserDB.findOne({_id : id}, function(err, user) {
				if (err) {
					console.log(err);
					return;
				}
				result = user;
				return;
			});
			return result;
		},
		getDoctors: async (_, { }, { dataSources }): Promise<User[]> => {
			var result;
			const find = await UserDB.find({doctor: true}, function(err, doctors) {
				if (err) {
					console.log(err);
					return;
				}
				result = doctors;
				return;
			});
			return result;
		},
		getCampaigns: async (_, { }, { dataSources }): Promise<Campaign[]> => {
			var result;
			const find = await CampaignDB.find({}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
			return result;
		},
		getCampaignsFiltered: async (_, { filter }, { dataSources }): Promise<Campaign[]> => {
			var result;
			const find = await CampaignDB.find(filter, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
			return result;
		},
		getUpdates: async (_, { campaignid }, { dataSources }): Promise<Update[]> => {
			var result;
			const find = await UpdateDB.find({campaignId: campaignid}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
			return result;
		},
		getDonationsByUser: async (_, { userid }, { dataSources }): Promise<Donation[]> => {
			var result;
			const find = await DonationDB.find({userId: userid}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
			return result;
		},
		getDonationsByCampaign: async (_, { campaignid }, { dataSources }): Promise<Donation[]> => {
			var result;
			const find = await DonationDB.find({campaignId: campaignid}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
			return result;
		},
		getDonation: async (_, { id }, { dataSources }): Promise<Donation> => {
			var result;
			const find = await DonationDB.find({_id: id}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
			return result;
		},
		getUpdatesByCampaign: async (_, { campaignid }, { dataSources }): Promise<Update[]> => {
			var result;
			const find = await UpdateDB.find({campaignId: campaignid}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				result = data;
				return;
			});
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
		donate: (campaignid: string, amount: number): Donation => {
			return {
				id: 'D0',
				userId: 'U2',
				campaignId: campaignid,
				amount: amount,
				date: '2019-01-04T00:00Z',
			};
		},
		update: (campaignid: string, update): Update => {
			return {
				id: 'UP1',
				userId: update.userId,
				campaignId: update.campaignId,
				comment: update.comment,
				date: update.date,
			};
		},
		createCampaign: (
			description: string,
			creatorid: string,
			goal: number,
			recurring: boolean,
			wantsApproval: boolean
		): Campaign => {
			return {
				id: 'C5',
				description: description,
				creatorid: creatorid,
				goal: goal,
				recurring: recurring,
				date: '2019-01-02T00:00Z',
				donationIds: [],
				wantsApproval: wantsApproval,
			};
		},
		async createUser(name: String, doctor: boolean, bio: String, picture: String) {
			const newUser = new UserDB({name: name, doctor: doctor, bio: bio, picture: picture});
			var createdUser;
			await newUser.save(function (err, user) {
				if (err) {
					console.log(err);
					return;
				}
				createdUser = {
					id: user._id,
					name: user.name,
					doctor: user.doctor,
					date: user.date,
					bio: user.bio,
					picture: user.picture
				};
				return;
			});
			return createdUser;
		},
		updateUser: (userid: string, user): User => {
			return {
				id: userid,
				name: user.name,
				doctor: user.doctor,
				date: user.date,
			};
		},
		deleteUser: (id: string): boolean => {
			return true;
		},
		deleteCampaign: (id: string): boolean => {
			return true;
		},
		deleteDonationPledge: (id: string): boolean => {
			return true;
		},
	},
};
