const express = require("express");
const {
  getProductCategoryController,
  getCategoryWistProduct,
  getProductDetails,
} = require("../controller/product.Controller");

const router = express.Router();

// product route

router.get("/", (req, res) => {
  res.send({
    message: "Product Route",
  });
});

router.get("/get-categoryProduct", getProductCategoryController);
router.post("/get-ProductByCategory", getCategoryWistProduct);
router.post("/productDetails", getProductDetails);

module.exports = router;
