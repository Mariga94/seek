import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import v1AuthRouter from "./routes/authRoutes.js";
import v1UserRouter from "./routes/userRoutes.js";
import v1ProjectRouter from "./routes/projectRoutes.js";
import v1OrderRouter from "./routes/orderRoutes.js";
dotenv.config();

const app = express();
const PORT = process.env.DEV_PORT || 3001;
const DATABASE_URL = process.env.MONGO;
const connectToDB = async () => {
  try {
    await mongoose.connect(DATABASE_URL);
    console.log("Connected to mongoDB! HURAAY");
  } catch (error) {
    console.log(error);
  }
};

app.use(cors({ origin: "http://127.0.0.1:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser());
app.use("/api/v1/auth", v1AuthRouter);
app.use("/api/v1/users", v1UserRouter);
app.use("/api/v1/projects", v1ProjectRouter);
app.use("/api/v1/orders", v1OrderRouter);

app.listen(PORT, () => {
  connectToDB();
  console.log(`API is listening on port ${PORT}`);
});
