import mongoose, { ConnectOptions } from "mongoose";

require("dotenv").config();

const dbURI = process.env.LINK_TO_ATLAS || "";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("mongo local db is connected");
  })
  .catch((error) => {
    console.log(error);
  });

const db = mongoose.connection;

// Event listeners for the MongoDB connection
db.on("connected", () => {
  console.log(`Connected to MongoDB`);
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

process.on("SIGINT", async () => {
  try {
    await mongoose.disconnect();
    console.log("MongoDB connection closed due to app termination");
    process.exit(0);
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
    process.exit(1);
  }
});

export default db;
