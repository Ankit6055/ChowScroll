const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

function connectDB() {
  mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error: ", err);
  })
}

module.exports = connectDB;