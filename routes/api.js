const express = require("express");
const filmsActions = require("../actions/films");

const router = express.Router();

// fetch films
router.get("/films", filmsActions.getFilms);

module.exports = router;
