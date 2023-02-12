import express, { Request, Response } from "express";

import Film from "../db/models/film";

export default {
	getAllFilms(req: Request, res: Response) {
		Film.find({}, (err: Error, doc: Document) => {
			res.status(200).json(doc);
		});
	},

	getSingleFilm(req: Request, res: Response) {
		const id = req.params.id;

		Film.findOne({ _id: id }, (err: Error, doc: Document) => {
			res.status(200).json(doc);
		});
	},
};
