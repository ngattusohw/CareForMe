import { User, Campaign, Update, Donation } from './models';
import { UserDB } from './mongo/mongoSchema';

export const resolvers = {
	Query: {
		async getUser(id: string) {
			const result = await UserDB.findById(id);
			return result.toObject();
		},
		async getDoctors() {
			const result = await UserDB.find(doctor: true);
			return result.toObject();
		},
		getCampaigns: (): Campaign[] => {
			return [
				{
					id: 'C1',
					description: 'A test campaign',
					creatorid: 'U1',
					goal: 400,
					recurring: false,
					date: '2019-01-02T00:00Z',
					donationIds: [],
				},
			];
		},
		getCampaignsFiltered: (filter): Campaign[] => {
			return [];
		},
		getUpdates: (campaignid: string): Update[] => {
			return [];
		},
		getDonationsByUser: (userid: string): Donation[] => {
			return [];
		},
		getDonationsByCampaign: (campaignid: string): Donation[] => {
			return [];
		},
		getDonation: (id: string): Donation => {
			return {
				id: id,
				userId: 'U2',
				campaignId: 'C1',
				amount: 200,
				date: '2019-01-04T00:00Z',
			};
		},
		getUpdatesByCampaign: (campaignid: string): Update[] => {
			return [];
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
