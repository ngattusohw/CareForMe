export interface User {
	id: string;
	name: string;
	doctor: boolean;
	date: string;
	bio?: string;
	picture?: string;
}

export interface Campaign {
	id: string;
	description: string;
	creatorid: string;
	goal: number;
	recurring: boolean;
	date: string;
	doctorid?: string;
	wantsApproval?: boolean;
	updateIds?: string[];
	donationIds?: string[];
}

export interface Update {
	id: string;
	userId: string;
	campaignId: string;
	comment: string;
	date: string;
}

export interface Donation {
	id: string;
	userId: string;
	campaignId: string;
	amount: number;
	date: string;
}
