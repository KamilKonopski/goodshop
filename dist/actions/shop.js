"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shop_1 = __importDefault(require("../db/models/shop"));
exports.default = {
    getAllShopItems(req, res) {
        shop_1.default.find({}, (err, doc) => {
            res.status(200).json(doc);
        });
    },
    getSingleShopItem(req, res) {
        const id = req.params.id;
        shop_1.default.findOne({ _id: id }, (err, doc) => {
            res.status(200).json(doc);
        });
    },
};
