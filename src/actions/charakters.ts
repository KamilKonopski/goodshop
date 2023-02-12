import express, { Request, Response } from "express";

import Charakter from "../db/models/charakter";

export default {
	getAllCharakters(req: Request, res: Response) {
		Charakter.find({}, (err: Error, doc: Document) => {
			res.status(200).json(doc);
		});
	},

	getSingleCharakter(req: Request, res: Response) {
		const id = req.params.id;

		Charakter.findOne({ _id: id }, (err: Error, doc: Document) => {
			res.status(200).json(doc);
		});
	},
};
