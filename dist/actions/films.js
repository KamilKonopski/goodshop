"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const film_1 = __importDefault(require("../db/models/film"));
exports.default = {
    getAllFilms(req, res) {
        film_1.default.find({}, (err, doc) => {
            res.status(200).json(doc);
        });
    },
    getSingleFilm(req, res) {
        const id = req.params.id;
        film_1.default.findOne({ _id: id }, (err, doc) => {
            res.status(200).json(doc);
        });
    },
    async addNewComment(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const body = req.body.body;
        let errors = {};
        if (name === "") {
            errors.name = "Invalid name!";
        }
        if (body === "") {
            errors.comment = "Invalid comment!";
        }
        console.log(errors);
        if (Object.keys(errors).length > 0) {
            return res.status(422).json({
                message: "Adding the comment failed due to validation errors.",
                errors,
            });
        }
        const film = await film_1.default.findOne({ _id: id });
        film.comments.push({ name: name, body: body });
        await film.save();
        res.status(201).json(film);
    },
};
