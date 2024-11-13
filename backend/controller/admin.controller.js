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
    const userExist = await User.findOne({ userId });

    if (!userExist) {
      return res.status(400).json({
        message: "User didn't exist",
        error: true,
        success: false,
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

module.exports = {
  allUsersController,
  singleUserController,
};
