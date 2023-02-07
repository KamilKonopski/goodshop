const mongoose = require("mongoose");

const Charakter = mongoose.model("Charakter", {
	title: String,
	height: String,
	mass: String,
	hair_color: String,
	skin_color: String,
	eye_color: String,
	birth_year: String,
	gender: String,
	image_url: String,
});

module.exports = Charakter;
