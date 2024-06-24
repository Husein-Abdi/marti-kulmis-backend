const dotenv = require ("dotenv");
const mongoose = require("mongoose");
dotenv.config();
const DB = process.env.DATABASE;
mongoose.set('strictQuery', false)

const connectDB = async () => {
  try {
    mongoose
    .connect(DB, {})
    .then(() => {
      console.log("Database successfully connected");
    })
  } catch (error) {
     console.log(error)
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
