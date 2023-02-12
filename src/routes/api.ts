import express from "express";
import filmsActions from "../actions/films";
import charaktersActions from "../actions/charakters";

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
router.get("/charakters", charaktersActions.getAllCharakters);

//fech single charakter
router.get("/charakters/:id", charaktersActions.getSingleCharakter);

export default router;
