import { Document, Schema, Model, model, Types } from "mongoose";
import { User, Campaign, Update, Donation } from './models';

const UserSchema: Schema = new Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	doctor: Boolean,
	date: String,
	bio: String,
	picture: String
});
UserSchema.pre("save", function (next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});


const CampaignSchema: Schema = new Schema({
	_id: Schema.Types.ObjectId,
	description: String,
	creatorid: { type: Schema.Types.ObjectId },
	goal: Number,
	recurring: Boolean,
	date: String,
	doctorid: { type: Schema.Types.ObjectId },
	wantsApproval: Boolean,
	updateIds: [{ type: Schema.Types.ObjectId }],
	donationIds: [{ type: Schema.Types.ObjectId }]
});
CampaignSchema.pre("save", function (next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});


const UpdateSchema: Schema = new Schema({
	_id: Schema.Types.ObjectId,
	userId: { type: Schema.Types.ObjectId },
	campaignId: { type: Schema.Types.ObjectId },
	comment: String,
	date: String
});
UpdateSchema.pre("save", function (next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	next();
});


const DonationSchema: Schema = new Schema({
	_id: Schema.Types.ObjectId,
	userId: { type: Schema.Types.ObjectId },
	campaignId: { type: Schema.Types.ObjectId },
	amount: Number,
	date: String
});
DonationSchema.pre("save", function (next) {
	let now = new Date();
	if (!this.date) {
		this.date = now;
	}
	if (!this._id) {
		this._id = Types.ObjectId();
	}
	next();
});

export const UserDB = model('user', UserSchema, 'user');
export const CampaignDB = model('campaign', CampaignSchema, 'campaign');
export const UpdateDB = model('update', UpdateSchema, 'update');
export const DonationDB = model('donation', DonationSchema, 'donation');
