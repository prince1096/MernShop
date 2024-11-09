const express = require("express");
const {
  userSignUpController,
  userLogInController,
} = require("../controller/user.Controller");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Login and Signup Route");
});

// router.get("/signup", (req, res) => {
//   res.send("Signup Route");
// });

router.post("/signup", userSignUpController);
router.post("/login", userLogInController);

module.exports = router;
