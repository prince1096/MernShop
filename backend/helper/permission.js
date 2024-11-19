const User = require("../models/user.Model");

const uploadProductPermission = async (userId) => {
  const user = await User.findById(userId);

  if (user?.role !== "ADMIN") {
    return false;
  }

  return true;
};

module.exports = { uploadProductPermission };
