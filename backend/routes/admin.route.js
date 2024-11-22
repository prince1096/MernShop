const express = require("express");
const {
  allUsersController,
  singleUserController,
  updateUserController,
  uploadProductController,
  getProductController,
  checkController,
} = require("../controller/admin.controller");
const authToken = require("../middleware/authToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Panel Route");
});

router.get("/all-users", authToken, allUsersController);
router.get("/single-user/:userId", singleUserController);
router.put("/:userId", authToken, updateUserController);

// upload Product
router.post("/upload-product", uploadProductController);
router.get("/get-product", getProductController);

module.exports = router;
