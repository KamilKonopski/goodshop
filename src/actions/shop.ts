import { Request, Response } from "express";

import Shop from "../db/models/shop";

export default {
	getAllShopItems(req: Request, res: Response) {
		Shop.find({}, (err: Error, doc: Document) => {
			res.status(200).json(doc);
		});
	},

	getSingleShopItem(req: Request, res: Response) {
		const id = req.params.id;

		Shop.findOne({ _id: id }, (err: Error, doc: Document) => {
			res.status(200).json(doc);
		});
	},
};
