const express = require("express");
const {
  getCategoryProductController,
} = require("../controller/product.Controller");

const router = express.Router();

// product route

router.get("/", (req, res) => {
  res.send({
    message: "Product Route",
  });
});

router.get("/get-categoryProduct", getCategoryProductController);

module.exports = router;
