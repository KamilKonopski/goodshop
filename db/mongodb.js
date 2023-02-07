const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);

//db connect
mongoose.connect(process.env.DB_API_KEY, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
