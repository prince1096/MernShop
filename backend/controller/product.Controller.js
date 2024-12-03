const Product = require("../models/product.Model");

const getCategoryProductController = async (req, res) => {
  try {
    const productCategory = await Product.distinct("category");

    // console.log();
  } catch (error) {
    res.status(404).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = { getCategoryProductController };
