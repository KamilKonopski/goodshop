import { model, Schema } from "mongoose";
import { Shop } from "../../types/interfaces";

const ShopSchema: Schema = new Schema({
	name: { type: String },
	price: { type: Number },
	image_url: { type: String },
	quantity: { type: Number },
	description: { type: String },
	type: { type: String },
});

const Shop = model<Shop>("Shop", ShopSchema, "shop");

export default Shop;
