import { model, Schema } from "mongoose";
import { Film } from "../../types/interfaces";

const FilmSchema: Schema = new Schema({
	title: { type: String },
	episode_id: { type: Number },
	opening_crawl: { type: String },
	direction: { type: String },
	producer: { type: String },
	release_date: { type: String },
	image_url: { type: String },
});

const Film = model<Film>("Film", FilmSchema);

export default Film;
