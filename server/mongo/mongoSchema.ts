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

export const UserDB = model('user', UserSchema);
