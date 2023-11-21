import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import db from "./src/data/database";
import contactUsRoutes from "./src/routes/contactUs";
dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 8000;

db.once("open", () => {
  console.log("Connected to MongoDB");
  app.use(express.json());

  app.use("/contactUs", contactUsRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
