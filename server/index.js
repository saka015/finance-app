import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "./routes/user.routes.js";
import { setupDatabase } from "./db/db.js";
import dataRoute from "./routes/data.routes.js";

dotenv.config();

// mongodbConnect();
setupDatabase();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", userRoute);
app.use("/api/data", dataRoute);

app.listen(5000, () => console.log("✅ Server 5000"));
