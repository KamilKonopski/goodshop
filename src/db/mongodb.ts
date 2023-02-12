import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.set("strictQuery", false);

//db connect
mongoose.connect(process.env.DB_API_KEY, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
} as ConnectOptions);
