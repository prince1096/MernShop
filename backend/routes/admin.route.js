const express = require("express");
const {
  allUsersController,
  singleUserController,
  updateUserController,
  uploadProductController,
  getAllProductController,
} = require("../controller/admin.controller");
const authToken = require("../middleware/authToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Panel Route");
});

router.get("/all-users", authToken, allUsersController);
router.get("/:userId", singleUserController);
router.put("/:userId", authToken, updateUserController);

// upload Product
router.post("/upload-product", uploadProductController);

module.exports = router;
