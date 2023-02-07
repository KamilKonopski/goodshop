const express = require("express");
const filmsActions = require("../actions/films");
const charaktersActions = require("../actions/charakters");

const router = express.Router();

// fetch films
router.get("/films", filmsActions.getFilms);

//fetch charakters
router.get("/charakters", charaktersActions.getCharakters);

module.exports = router;
