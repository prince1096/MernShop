const express = require("express");

const router = express.Router();

const userRouter = require("./user.route");

router.use("/user", userRouter);

router.get("/", (req, res) => {
  res.send("All Route come here");
});

module.exports = router;
