const mongoose = require("mongoose");
const db = "mongodb://localhost/students_toolkit";
// const db = "YOUR_MONGO_DATBASE_URI_HERE";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });

    console.log("mongodb is successfully connected...");
  } catch (error) {
    console.log("error " + error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
