import { User, Campaign, Update, Donation } from './models';

export const resolvers = {
    Query: {
        getUser: (_, { id }, { dataSources }): User => {
            return {
                id: id,
                name: 'Test 1',
                doctor: false,
                date: '2019-01-01T00:00Z',
            };
        },
        getDoctors: (_, { }, { dataSources }): User[] => {
            return [
                {
                    id: 'U2',
                    name: 'Test 2',
                    doctor: true,
                    date: '2019-01-01T00:00Z',
                },
                {
                    id: 'U3',
                    name: 'Test 3',
                    doctor: true,
                    date: '2019-01-01T00:00Z',
                },
                {
                    id: 'U4',
                    name: 'Test 4',
                    doctor: true,
                    date: '2019-01-01T00:00Z',
                },
            ];
        },
        getCampaigns: (_, { }, { dataSources }): Campaign[] => {
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
        getCampaignsFiltered: (_, { filter }, { dataSources }): Campaign[] => {
            return [];
        },
        getUpdates: (_, { campaignid }, { dataSources }): Update[] => {
            return [];
        },
        getDonationsByUser: (_, { userid }, { dataSources }): Donation[] => {
            return [];
        },
        getDonationsByCampaign: (_, { campaignid }, { dataSources }): Donation[] => {
            return [];
        },
        getDonation: (_, { id }, { dataSources }): Donation => {
            return {
                id: id,
                userId: 'U2',
                campaignId: 'C1',
                amount: 200,
                date: '2019-01-04T00:00Z',
            };
        },
        getUpdatesByCampaign: (_, { campaignid }, { dataSources }): Update[] => {
            return [];
        },
        me: (_, { }, { dataSources }): User => {
            return {
                id: 'U0',
                name: 'Test 0',
                doctor: false,
                date: '2019-01-01T00:00Z',
            };
        },
    },
    Mutation: {
        donate: (_, { campaignid, amount }, { dataSources }): Donation => {
            return {
                id: 'D0',
                userId: 'U2',
                campaignId: campaignid,
                amount: amount,
                date: '2019-01-04T00:00Z',
            };
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
        createUser: (_, { name, doctor, bio, picture }, { dataSources }): User => {
            return {
                id: 'U0',
                name: 'Test 0',
                doctor: false,
                date: '2019-01-01T00:00Z',
            };
        },
        updateUser: (_, { userid, user }, { dataSources }): User => {
            return {
                id: userid,
                name: user.name,
                doctor: user.doctor,
                date: user.date,
            };
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
