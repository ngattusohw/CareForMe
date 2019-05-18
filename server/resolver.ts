import { User, Campaign, Update, Donation } from './models';
import { UserDB, CampaignDB, DonationDB, UpdateDB } from './mongo/mongoSchema';

export const resolvers = {
	Query: {
		async getUser(id: string) {
			//const result = await UserDB.findById(id);
			var result;
			const find = await UserDB.findOne({_id : "3"}, function(err, user) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(user);
				result = user;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getDoctors() {
			var result;
			const find = await UserDB.find({doctor: true}, function(err, doctors) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = doctors;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getCampaigns() {
			var result;
			const find = await CampaignDB.find({}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getCampaignsFiltered(filter) {
			var result;
			//const find = await CampaignDB.find(filter, function(err, data) {
			const find = await CampaignDB.find({recurring: true}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getUpdates(campaignid: string) {
			var result;
			// const find = await UpdateDB.find({campaignid: campaignid}, function(err, data) {
			const find = await UpdateDB.find({campaignId: "0"}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getDonationsByUser(userid: string) {
			var result;
			// const find = await DonationDB.find({userid: userid}, function(err, data) {
			const find = await DonationDB.find({userId: "0"}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getDonationsByCampaign(campaignid: string) {
			var result;
			// const find = await DonationDB.find({campaignid: campaignid}, function(err, data) {
			const find = await DonationDB.find({campaignId: "0"}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getDonation(id: string) {
			var result;
			// const find = await DonationDB.find({_id: id}, function(err, data) {
			const find = await DonationDB.find({_id: "0"}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
			return result;
		},
		async getUpdatesByCampaign(campaignid: string){
			var result;
			// const find = await UpdateDB.find({campaignid: campaignid}, function(err, data) {
			const find = await UpdateDB.find({campaignId: "0"}, function(err, data) {
				if (err) {
					console.log(err);
					return;
				}
				//console.log(doctors);
				result = data;
				return;
			});
			if (result === null) {
				return null;
			}
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
