const { uploadProductPermission } = require("../helper/permission");
const Product = require("../models/product.Model");
const User = require("../models/user.Model");

// Get All User

const allUsersController = async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.json({
      message: "All Users",
      data: allUsers,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// single User

const singleUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    // console.log(userId, "28");

    const user = await User.findOne({ _id: userId });
    // console.log(user, "32");

    if (!user) {
      return res.status(400).json({
        message: "User not exist",
        error: true,
        success: false,
      });
    }

    res.status(200).json({
      message: "User Exist",
      data: user,
      success: true,
      error: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// Update User

const updateUserController = async (req, res) => {
  try {
    const userId = req.params.userId;
    const userBody = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, userBody, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(400).json({
        message: "User not Found",
        success: false,
        error: true,
      });
    }

    res.status(200).json({
      data: updatedUser,
      message: "User updated Successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// Upload Product

const uploadProductController = async (req, res) => {
  try {
    const sessionUserId = req.useId;

    if (!uploadProductPermission(sessionUserId)) {
      return res.status(400).json({
        message: "Permission Denied",
        error: true,
        success: false,
      });
    }

    const uploadProduct = new Product(req.body);

    const savedProduct = await uploadProduct.save();

    if (savedProduct) {
      res.status(201).json({
        message: "Product upload successfully",
        error: false,
        success: true,
        data: savedProduct,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const getProductController = async (req, res) => {
  try {
    const allProduct = await Product.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      message: "all Product",
      success: true,
      error: false,
      data: allProduct,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message || error,
      error: true,
      success: true,
    });
  }
};

// UpdateProductController

const updateProductController = async (req, res) => {
  try {
    if (!uploadProductPermission(req.userId)) {
      throw new Error("Permission Denied");
    }

    const { _id, ...resBody } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(_id, resBody);

    res.status(200).json({
      message: "Product Updated",
      data: updatedProduct,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(404).json({
      error: error.message || error,
      error: true,
      success: true,
    });
  }
};

module.exports = {
  allUsersController,
  singleUserController,
  updateUserController,
  uploadProductController,
  getProductController,
  updateProductController,
};
