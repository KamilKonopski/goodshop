import { Request, Response } from "express";

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

	async addNewComment(req: Request, res: Response) {
		const id = req.params.id;
		const name = req.body.name;
		const body = req.body.body;

		let errors: { name: string; comment: string } = {
			name: "",
			comment: "",
		};

		if (name == "") {
			errors.name = "Invalid name!";
		}

		if (body == "") {
			errors.comment = "Invalid comment!";
		}

		if (Object.keys(errors).length > 0) {
			return res.status(422).json({
				message: "Adding the comment failed due to validation errors.",
				errors,
			});
		}

		const film = await Film.findOne({ _id: id });
		film!.comments.push({ name: name, body: body });
		await film!.save();

		res.status(201).json(film);
	},
};
