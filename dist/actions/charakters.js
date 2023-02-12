"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const charakter_1 = __importDefault(require("../db/models/charakter"));
exports.default = {
    getAllCharakters(req, res) {
        charakter_1.default.find({}, (err, doc) => {
            res.status(200).json(doc);
        });
    },
    getSingleCharakter(req, res) {
        const id = req.params.id;
        charakter_1.default.findOne({ _id: id }, (err, doc) => {
            res.status(200).json(doc);
        });
    },
};
