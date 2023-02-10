const Film = require("../db/models/film");

module.exports = {
	getAllFilms(req, res) {
		Film.find({}, (err, doc) => {
			res.status(200).json(doc);
		});
	},

	getSingleFilm(req, res) {
		const id = req.params.id;

		Film.findOne({ _id: id }, (err, doc) => {
			res.status(200).json(doc);
		});
	},
};
