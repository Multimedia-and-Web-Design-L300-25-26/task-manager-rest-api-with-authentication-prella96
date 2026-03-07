import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "../src/app.js";

dotenv.config({ path: ".env.test" });

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  if (mongoose.connection.readyState !== 0) {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  }
});

export default app;