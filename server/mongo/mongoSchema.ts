import { Document, Schema, Model, model} from "mongoose";
import { User, Campaign, Update, Donation } from '../models';

const UserSchema: Schema = new Schema({
	_id: String,
	name: String,
	doctor: Boolean,
	date: String,
	bio: String,
	picture: String
});
UserSchema.pre("save", function(next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});


const CampaignSchema: Schema = new Schema({
	_id: String,
	description: String,
	creatorid: String,
	goal: Number,
	recurring: Boolean,
	date: String,
	doctorid: String,
	wantsApproval: Boolean,
	updateIds: [String],
	donationIds: [String]
});
CampaignSchema.pre("save", function(next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});


const UpdateSchema: Schema = new Schema({
	_id: String,
	userId: String,
	campaignId: String,
	comment: String,
	date: String
});
UpdateSchema.pre("save", function(next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});


const DonationSchema: Schema = new Schema({
	_id: String,
	userId: String,
	campaignId: String,
	amount: Number,
	date: String
});
DonationSchema.pre("save", function(next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});

export const UserDB = model('user', UserSchema, 'user');
export const CampaignDB = model('campaign', CampaignSchema, 'campaign');
export const UpdateDB = model('update', UpdateSchema, 'update');
export const DonationDB = model('donation', DonationSchema, 'donation');
