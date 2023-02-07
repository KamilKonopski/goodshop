const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose.set("strictQuery", false);

//db connect
mongoose.connect(
	`mongodb+srv://KamilMaerS:${process.env.DB_API_KEY}@cluster0.nxgromj.mongodb.net/?retryWrites=true&w=majority`,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);
