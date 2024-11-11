const express = require("express");
const {
  userSignUpController,
  userLogInController,
  userDetailsController,
  userLogoutController,
} = require("../controller/user.Controller");
const authToken = require("../middleware/authToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User Login and Signup Route");
});

// router.get("/signup", (req, res) => {
//   res.send("Signup Route");
// });

router.post("/signup", userSignUpController);
router.post("/login", userLogInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/logout", userLogoutController);

module.exports = router;
