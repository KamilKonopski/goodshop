"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FilmSchema = new mongoose_1.Schema({
    title: { type: String },
    episode_id: { type: Number },
    opening_crawl: { type: String },
    direction: { type: String },
    producer: { type: String },
    release_date: { type: String },
    image_url: { type: String },
});
const Film = (0, mongoose_1.model)("Film", FilmSchema);
exports.default = Film;
