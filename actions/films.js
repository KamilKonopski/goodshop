const Film = require("../db/models/film");

module.exports = {
	getFilms(req, res) {
		Film.find({}, (err, doc) => {
			res.status(200).json(doc);
		});
	},
};
