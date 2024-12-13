const express = require("express");
const {
  getProductCategoryController,
} = require("../controller/product.Controller");

const router = express.Router();

// product route

router.get("/", (req, res) => {
  res.send({
    message: "Product Route",
  });
});

router.get("/get-categoryProduct", getProductCategoryController);

module.exports = router;
