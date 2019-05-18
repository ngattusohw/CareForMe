import { User, Campaign, Update, Donation } from './models';
import { UserDB, CampaignDB, DonationDB, UpdateDB } from './mongoSchema';
import { Document, Schema, Model, model, Types } from "mongoose";

const errorHandler = function(err, data) {
	if (err) {
		console.log(err);
	}
	console.log(data);
	return;
}

export const resolvers = {
	Query: {
		getUser: async (_, { id }, { dataSources }): Promise<User> => {
			const result = await UserDB.findOne({_id : Types.ObjectId(id)}, errorHandler);
			return result;
		},
		getDoctors: async (_, { }, { dataSources }): Promise<User[]> => {
			const result = await UserDB.find({doctor: true}, errorHandler);
			return result;
		},
		getCampaigns: async (_, { }, { dataSources }): Promise<Campaign[]> => {
			const result = await CampaignDB.find({}, errorHandler);
			return result;
		},
		getCampaignsFiltered: async (_, { filter }, { dataSources }): Promise<Campaign[]> => {
			const result = await CampaignDB.find(filter, errorHandler);
			return result;
		},
		getDonationsByUser: async (_, { userid }, { dataSources }): Promise<Donation[]> => {
			const result = await DonationDB.find({userId: Types.ObjectId(userid)}, errorHandler);
			return result;
		},
		getDonationsByCampaign: async (_, { campaignid }, { dataSources }): Promise<Donation[]> => {
			const result = await DonationDB.find({campaignId: Types.ObjectId(campaignid)}, errorHandler);
			return result;
		},
		getDonation: async (_, { id }, { dataSources }): Promise<Donation> => {
			const result = await DonationDB.findOne({_id: Types.ObjectId(id)}, errorHandler);
			return result;
		},
		getUpdatesByCampaign: async (_, { campaignid }, { dataSources }): Promise<Update[]> => {
			const result = await UpdateDB.find({campaignId: Types.ObjectId(campaignid)}, errorHandler);
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
        donate: async (_, { userid, campaignid, amount, date }, { dataSources }): Promise<Donation> => {
            var result;
            const create = await DonationDB.create({ _id: Types.ObjectId(), userId: Types.ObjectId(userid), campaignId: Types.ObjectId(campaignid), amount: amount, date: date }, async function (err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                result = await data;
                return;
            });
            return result;
        },
        update: (_, { campaignid, update }, { dataSources }): Update => {
            return {
                id: 'UP1',
                userId: update.userId,
                campaignId: update.campaignId,
                comment: update.comment,
                date: update.date,
            };
        },
        createCampaign: (_, {
            description,
            creatorid,
            goal,
            recurring,
            wantsApproval }, { dataSources }
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
        createUser: async (_, { name, date, doctor, bio, picture }, { dataSources }): Promise<User> => {
            var result;
            const create = await UserDB.create({ _id: Types.ObjectId(), name: name, date: date, doctor: doctor, bio: bio, picture: picture }, async function (err, data) {
                if (err) {
                    console.log(err);
                    return;
                }
                console.log(JSON.stringify(data));
                result = await data;
                return;
            });
            return result;
        },
        updateUser: async (_, { userid, user }, { dataSources }): Promise<User> => {
            var result;
            const update = await UserDB.updateOne({ _id: Types.ObjectId(userid) }, {
                $set: { user }
            }, async function (err, user) {
                if (err) {
                    console.log(err);
                    return;
                }
                result = await user;
                return;
            });
            return result;
        },
        deleteUser: (_, { id }, { dataSources }): boolean => {
            return true;
        },
        deleteCampaign: (_, { id }, { dataSources }): boolean => {
            return true;
        },
        deleteDonationPledge: (_, { id }, { dataSources }): boolean => {
            return true;
        },
    },
};
