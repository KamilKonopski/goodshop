const express = require("express");
const apiRouter = require("./routes/api");

const app = express();
const port = 8888;

//db
require("./db/mongodb");

//routes
app.use("/", apiRouter);

//server
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
