const express = require("express");
const {
  allUsersController,
  singleUserController,
  updateUserController,
  uploadProductController,
  getProductController,
  updateProductController,
} = require("../controller/admin.controller");
const authToken = require("../middleware/authToken");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin Panel Route");
});

router.get("/all-users", authToken, allUsersController);
router.get("/single-user/:userId", singleUserController);
router.put("/user/:userId", authToken, updateUserController);

// upload Product
router.post("/upload-product", authToken, uploadProductController);
router.get("/get-product", getProductController);
router.put("/update-product", authToken, updateProductController);

module.exports = router;
