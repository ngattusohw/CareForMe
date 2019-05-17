import {User, Campaign, Update, Donation} from '../models';

export const resolvers = {
    Query: {
        getUser: (id: string): User => {
            return {
                id: id,
                name: "Test 1",
                doctor: false,
                date: "2019-01-01T00:00Z"
            }
        },
        getDoctors: (): User[] => {
            return [
                {
                    id: "U2",
                    name: "Test 2",
                    doctor: true,
                    date: "2019-01-01T00:00Z"
                },
                {
                    id: "U3",
                    name: "Test 3",
                    doctor: true,
                    date: "2019-01-01T00:00Z"
                },
                {
                    id: "U4",
                    name: "Test 4",
                    doctor: true,
                    date: "2019-01-01T00:00Z"
                },
            ]
        },
        getCampaigns: (): Campaign[] => {
            return [
                {
                    id: "C1",
                    description: "A test campaign",
                    creatorid: "U1",
                    goal: 400,
                    recurring: false,
                    date: "2019-01-02T00:00Z",
                    donationIds: []
                }
            ]
        },
        getCampaignsFiltered: (filter: Campaign): Campaign[] => {
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
                userId: "U2",
                campaignId: "C1",
                amount: 200,
                date: "2019-01-04T00:00Z"
            };
        },
        getUpdatesByCampaign: (campaignid: string): Update[] => {
            return [];
        },
        me: (): User =>{
            return {
                id: "U0",
                name: "Test 0",
                doctor: false,
                date: "2019-01-01T00:00Z"
            }
        }
    },
    Mutation: {
        donate: (campaignid: string, amount: number): Donation => {
            return {
                id: "D0",
                userId: "U2",
                campaignId: campaignid,
                amount: amount,
                date: "2019-01-04T00:00Z"
            };
        },
        update: (campaignid: string, update: Update): Update => {
            return {
                id: "UP1",
                userId: "U1",
                campaignId: "C1",
                comment: "Blah blah",
                date: "2019-02-01T00:00Z"
            }
        },
        createCampaign: (description: string, creatorid: string, goal: number, recurring: boolean, wantsApproval: boolean): Campaign => {
            return {
                id: "C5",
                description: description,
                creatorid: creatorid,
                goal: goal,
                recurring: recurring,
                date: "2019-01-02T00:00Z",
                donationIds: [],
                wantsApproval: wantsApproval
            }
        },
        createUser: (name: String, doctor: boolean, bio: String, picture: String): User => {
            return {
                id: "U0",
                name: "Test 0",
                doctor: false,
                date: "2019-01-01T00:00Z"
            }
        },
        updateUser: (userid: string, user: User): User => {
            return {
                id: "U0",
                name: "Test 0",
                doctor: false,
                date: "2019-01-01T00:00Z"
            }
        },
        deleteUser: (id: string): boolean => {
            return true;
        },
        deleteCampaign: (id: string): boolean => {
            return true;
        },
        deleteDonationPledge: (id: string): boolean => {
            return true;
        }
    }
}
