const mongoose = require("mongoose");

const Film = mongoose.model("Film", {
	title: String,
	episode_id: Number,
	opening_crawl: String,
	direction: String,
	producer: String,
	release_date: String,
	image_url: String,
});

module.exports = Film;
