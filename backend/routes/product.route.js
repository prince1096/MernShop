const express = require("express");

const router = express.Router();

// product route

router.get("/", (req, res) => {
  res.send({
    message: "Product Route",
  });
});
