const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;

const authToken = async (req, res, next) => {
  try {
    // console.log("req header 6", req.header);
    const token = req?.cookies?.token || req.header;

    if (!token) {
      return res.status(400).json({
        message: "User not login",
        error: true,
        success: false,
      });
    }
    const decodedToken = jwt.verify(token, JWT_SECRET, function (err, decoded) {
      // console.log("err17", err);
      // console.log("decoded 18", decoded);

      if (err) {
        console.log("error auth", err);
      }

      req.userId = decoded?._id;
      next();
    });
    // console.log("token27", token);
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = authToken;
