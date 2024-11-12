const User = require("../models/user.Model");

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

module.exports = {
  allUsersController,
};
