"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const port = 8888;
app.use((0, cors_1.default)());
//db
require("./db/mongodb");
//routes
app.use("/", api_1.default);
//server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
