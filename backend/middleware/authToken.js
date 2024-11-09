const authToken = async (req, res, next) => {
  try {
    const token = req?.cookies?.token || req.header;
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};
