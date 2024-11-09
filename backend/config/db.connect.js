const mongoose = require("mongoose");
require("dotenv").config();
const mongoURL = process.env.MONGO;

const connectToDB = async () => {
  try {
    mongoose
      .connect(mongoURL)
      .then(() => console.log("Successfully Connected"));
  } catch (err) {
    console.log("Error in Connection", err);
  }
};

// mongoose
//   .connect(mongoURL)
//   .then(() => {
//     console.log("Successfully Conncected");
//   })
//   .catch((error) => {
//     console.log("Error in connection", error);
//   });

module.exports = connectToDB;
