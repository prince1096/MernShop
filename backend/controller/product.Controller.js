const Product = require("../models/product.Model");

const getCategoryProductController = async (req, res) => {
  try {
    const productCategory = await Product.distinct("category");

    const productByCategory = [];

    for (const category of productCategory) {
      const product = await Product.findOne({ category });

      if (product) {
        productByCategory.push(product);
        // productByCategory = [...productByCategory, product];
      }
    }

    res.status(200).json({
      message: "Product by Category",
      data: productByCategory,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = { getCategoryProductController };
