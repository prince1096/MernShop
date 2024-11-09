const express = require("express");

const cors = require("cors");
const connectToDB = require("./config/db.connect");
const mainRouter = require("./routes");
require("dotenv").config();
const cookieParser = require("cookie-parser");
// const
connectToDB();

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use("/api/v1", mainRouter);

const PORT = 8080 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is Running!!! On Port ${PORT}`);
});
