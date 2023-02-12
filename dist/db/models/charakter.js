"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CharakterSchema = new mongoose_1.Schema({
    name: { type: String },
    height: { type: String },
    mass: { type: String },
    hair_color: { type: String },
    skin_color: { type: String },
    eye_color: { type: String },
    birth_year: { type: String },
    gender: { type: String },
    image_url: { type: String },
});
const Charakter = (0, mongoose_1.model)("Charakter", CharakterSchema);
exports.default = Charakter;
