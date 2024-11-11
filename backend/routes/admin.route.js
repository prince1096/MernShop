const express = require("express");
const { allUsersController } = require("../controller/admin.controller");
const authToken = require("../middleware/authToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Panel Route");
});

router.get("/all-users", authToken, allUsersController);

module.exports = router;
