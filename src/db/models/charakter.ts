import { model, Schema } from "mongoose";
import { Charakter } from "../../types/interfaces";

const CharakterSchema: Schema = new Schema({
	name: { type: String },
	height: { type: String },
	mass: { type: String },
	hair_color: { type: String },
	skin_color: { type: String },
	eye_color: { type: String },
	birth_year: { type: String },
	gender: { type: String },
	image_url: { type: String },
});

const Charakter = model<Charakter>("Charakter", CharakterSchema);

export default Charakter;
