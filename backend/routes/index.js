const express = require("express");

const router = express.Router();

const userRouter = require("./user.route");
const adminRouter = require("./admin.route");

router.use("/user", userRouter);
router.use("/admin", adminRouter);

router.get("/", (req, res) => {
  res.send("All Route come here");
});

module.exports = router;
