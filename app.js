const express = require("express");
const app = express();
const port = 8888;

//db
require("./db/mongodb");

app.get("/", (req, res) => {
	res.send("Hello World");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
