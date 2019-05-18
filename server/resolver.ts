import { User, Campaign, Update, Donation } from './models';
import { UserDB, CampaignDB, DonationDB, UpdateDB } from './mongo/mongoSchema';
import { Document, Schema, Model, model, Types } from "mongoose";


export const resolvers = {
    Query: {
        getUser: async (_, { id }, { dataSources }): Promise<User> => {
            var result;
            const find = await UserDB.findOne({ _id: id }, function (err, user) {
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
            const find = await UserDB.find({ doctor: true }, function (err, doctors) {
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
            const find = await CampaignDB.find({}, function (err, data) {
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
            const find = await CampaignDB.find(filter, function (err, data) {
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
            const find = await UpdateDB.find({ campaignId: campaignid }, function (err, data) {
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
            const find = await DonationDB.find({ userId: userid }, function (err, data) {
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
            const find = await DonationDB.find({ campaignId: campaignid }, function (err, data) {
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
            const find = await DonationDB.findOne({ _id: id }, function (err, data) {
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
            const find = await UpdateDB.find({ campaignId: campaignid }, function (err, data) {
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
        donate: async (_, { userid, campaignid, amount }, { dataSources }): Promise<Donation> => {
            var data, result;
            data = DonationDB.create({ _id: Types.ObjectId(), userId: Types.ObjectId(userid), campaignId: Types.ObjectId(campaignid), amount: amount });
            try {
                result = await data;
            } catch (err) {
                throw err;
            }
            return result;
        },
        update: async (_, { userid, campaignid, comment }, { dataSources }): Promise<Update> => {
            var data, result;
            data = UpdateDB.create({ _id: Types.ObjectId(), userId: Types.ObjectId(userid), campaignId: Types.ObjectId(campaignid), comment: comment });
            try {
                result = await data;
            } catch (err) {
                throw err;
            }
            return result;
        },
        createCampaign: async (_, {
            description,
            creatorid,
            goal,
            recurring,
            wantsApproval }, { dataSources }
        ): Promise<Campaign> => {
            var data, result;
            data = CampaignDB.create({ _id: Types.ObjectId(), description: description, creatorid: Types.ObjectId(creatorid), goal: goal, recurring: recurring, donationIds: [], wantsApproval: wantsApproval });
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
            data = UserDB.updateOne({ _id: Types.ObjectId(id) }, { $set: { user } });
            try {
                result = await data;
            } catch (err) {
                throw err;
            }
            return result;
        },
        deleteUser: (_, { id }, { dataSources }): boolean => {
            UserDB.deleteOne({ _id: Types.ObjectId(id) }, function (err) {
                if (err) {
                    throw err;
                }
            });
            return true;
        },
        deleteCampaign: (_, { id }, { dataSources }): boolean => {
            CampaignDB.deleteOne({ _id: Types.ObjectId(id) }, function (err) {
                if (err) {
                    throw err;
                }
            });
            return true;
        },
        deleteDonationPledge: (_, { id }, { dataSources }): boolean => {
            DonationDB.deleteOne({ _id: Types.ObjectId(id) }, function (err) {
                if (err) {
                    throw err;
                }
            });
            return true;
        },
    },
};
