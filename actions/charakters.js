const Charakter = require("../db/models/charakter");

module.exports = {
	getAllCharakters(req, res) {
		Charakter.find({}, (err, doc) => {
			res.status(200).json(doc);
		});
	},

	getSingleCharakter(req, res) {
		const id = req.params.id;

		Charakter.findOne({ _id: id }, (err, doc) => {
			res.status(200).json(doc);
		});
	},
};
