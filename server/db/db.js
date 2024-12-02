import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

export const setupDatabase = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI)
      .then(() => console.log("✅ MongoDB"))
      .catch((err) => console.error("❌ MongoDB connection error:", err));
  } catch (err) {
    console.error("Error connecting to the DB and seeding:", err);
  }
};
