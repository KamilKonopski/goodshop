import express from "express";
import filmsActions from "../actions/films";
import charaktersActions from "../actions/charakters";
import shopActions from "../actions/shop";

const router = express.Router();

// general route
router.get("/", (req, res) => {
	res.send("Server is running...");
});

// fetch films
router.get("/films", filmsActions.getAllFilms);

//fetch single film
router.get("/films/:id", filmsActions.getSingleFilm);

//add new comment to single film
router.put("/films/:id", filmsActions.addNewComment);

//fetch charakters
router.get("/charakters", charaktersActions.getAllCharakters);

//fetch single charakter
router.get("/charakters/:id", charaktersActions.getSingleCharakter);

//fetch all shop items
router.get("/shop", shopActions.getAllShopItems);

//fetch single shop item
router.get("/shop/:id", shopActions.getSingleShopItem);

export default router;
