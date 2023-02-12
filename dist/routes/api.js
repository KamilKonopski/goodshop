"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const films_1 = __importDefault(require("../actions/films"));
const charakters_1 = __importDefault(require("../actions/charakters"));
const router = express_1.default.Router();
// general route
router.get("/", (req, res) => {
    res.send("Server is running...");
});
// fetch films
router.get("/films", films_1.default.getAllFilms);
//fetch single film
router.get("/films/:id", films_1.default.getSingleFilm);
//fetch charakters
router.get("/charakters", charakters_1.default.getAllCharakters);
//fech single charakter
router.get("/charakters/:id", charakters_1.default.getSingleCharakter);
exports.default = router;
