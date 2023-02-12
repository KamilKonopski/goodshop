import express from "express";
import apiRouter from "./routes/api";
import cors from "cors";

const app = express();
const port = 8888;

app.use(cors());

//db
require("./db/mongodb");

//routes
app.use("/", apiRouter);

//server
app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
