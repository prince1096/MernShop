const Product = require("../models/product.Model");

const getProductCategoryController = async (req, res) => {
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

// get product on basis of category

const getCategoryWistProduct = async (req, res) => {
  const objCategory = req?.body;
  const category = objCategory?.category;
  // console.log(category, typeof category);

  const product = await Product.find({ category });

  res.status(200).json({
    message: "Product",
    success: true,
    error: false,
    data: product,
  });
  try {
  } catch (error) {
    res.status(404).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// getProductDetails

const getProductDetails = async (req, res) => {
  try {
    const { productId } = req.body;
    // console.log(productId);
    const product = await Product.findById(productId);

    res.status(200).json({
      message: "product",
      data: product,
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(404).json({
      message: error?.message || message,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  getProductCategoryController,
  getCategoryWistProduct,
  getProductDetails,
};
