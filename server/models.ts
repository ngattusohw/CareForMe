import { Document } from "mongoose";

export interface User extends Document {
	id: string;
	name: string;
	doctor: boolean;
	date: string;
	bio?: string;
	picture?: string;
}

export interface Campaign extends Document {
	id: string;
	title: String;
	description: string;
	creatorid: string;
	goal: number;
	recurring: boolean;
	date: string;
	doctorid?: string;
	wantsApproval?: boolean;
}

export interface Update extends Document {
	id: string;
	userId: string;
	campaignId: string;
	comment: string;
	date: string;
}

export interface Donation extends Document {
	id: string;
	userId: string;
	campaignId: string;
	amount: number;
	date: string;
}
