"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ShopSchema = new mongoose_1.Schema({
    name: { type: String },
    price: { type: Number },
    image_url: { type: String },
    quantity: { type: Number },
    description: { type: String },
    type: { type: String },
});
const Shop = (0, mongoose_1.model)("Shop", ShopSchema);
exports.default = Shop;
