const express = require("express");

const cors = require("cors");
const connectToDB = require("./config/db.connect");
const mainRouter = require("./routes");
require("dotenv").config(); // used for read any secret from .env file
const cookieParser = require("cookie-parser");

connectToDB(); // it should be called first

const app = express();

// write this express.json() so that we can get object otherwise it will be json
app.use(express.json());

// what we write inside cors helps us to connect with frontend url and to save the cookies in the browser
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// this is used for sending cookies
app.use(cookieParser());
app.use("/api/v1", mainRouter);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Running!!! On Port ${PORT}`);
});
