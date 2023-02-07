const Charakter = require("../db/models/charakter");

module.exports = {
	getCharakters(req, res) {
		Charakter.find({}, (err, doc) => {
			res.status(200).json(doc);
		});
	},
};
