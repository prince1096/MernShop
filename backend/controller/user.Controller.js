const User = require("../models/user.Model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSignUpController = async (req, res) => {
  try {
    const signUpData = req.body;

    const { name, email, password, profilePic } = signUpData;

    if (!email || !password) {
      throw new Error("Please provide all details");
    }

    const existingUser = await User.findOne({ email });

    // remember to write return always otherwise error is coming bcz more then one json will be there
    if (existingUser) {
      return res.status(400).json({ message: "User Exists" });
    }

    // hashing password

    const salt = bcrypt.genSaltSync(10);

    const hashedPassword = bcrypt.hashSync(password, salt);

    if (!hashedPassword) {
      throw new Error("Something is wrong");
    }

    // using web token to create token

    const newUser = new User({
      ...signUpData,
      role: "GENERAL",
      password: hashedPassword,
    });

    // save the new user

    await newUser.save();

    res.status(201).json({
      data: newUser,
      success: true,
      error: false,
      message: "User Created Successfully",
    });

    // console.log(newUser);
  } catch (error) {
    res.status(404).json({
      message: error.message || error,
      error: true,
      success: false,
    });
    console.log(error);
  }
};

const userLogInController = async (req, res) => {
  // console.log(req.body);
  try {
    const loginDetails = req.body;

    // console.log(loginDetails.email, loginDetails.password);

    const { email, password } = loginDetails;

    if (!email || !password) {
      throw new Error("Please provide login Credentials");
    }

    const user = await User.findOne({ email });
    console.log(user, "user");

    if (!user) {
      return res.status(400).json({
        message: "User Not found",
      });
    }

    // compare password
    const checkPassword = await bcrypt.compare(
      loginDetails.password,
      user.password
    );

    // console.log("checkPassword", checkPassword);

    if (checkPassword) {
      const tokenData = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 12,
      });
      // console.log(token);

      const tokenOptions = {
        httpOnly: true,
        secure: true,
      };

      res.cookie("token", token, tokenOptions).json({
        message: "User Login Successfully",
        success: true,
        token: token,
        error: false,
        status: 200,
      });
    } else {
      res.status(403).jsn({
        message: "Check your password",
        success: false,
        error: true,
      });
    }
  } catch (error) {
    res.json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const userDetailsController = async (req, res) => {
  try {
    // console.log("user id", req.userId);

    const user = await User.findById(req.userId);
    // console.log("user", user);

    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "User Details",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

const userLogoutController = async (req, res) => {
  // we have to clear cookies from browser

  try {
    res.clearCookie("token");

    res.status(200).json({
      message: "Logged out successfully",
      error: false,
      success: true,
      data: [],
    });
  } catch (error) {
    res.json({
      message: err.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  userSignUpController,
  userLogInController,
  userDetailsController,
  userLogoutController,
};
