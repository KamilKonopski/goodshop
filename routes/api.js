const express = require("express");
const filmsActions = require("../actions/films");
const charaktersActions = require("../actions/charakters");

const router = express.Router();

// general route
router.get("/", (req, res) => {
	res.send("Server is running...");
});

// fetch films
router.get("/films", filmsActions.getAllFilms);

//fetch single film
router.get("/films/:id", filmsActions.getSingleFilm);

//fetch charakters
router.get("/charakters", charaktersActions.getCharakters);

module.exports = router;
