const allUsersController = async (req, res) => {
  try {
    // const
    res.json({ message: "All Users" });
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
