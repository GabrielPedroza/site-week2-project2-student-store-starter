const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

router.get("/", (req, res) => {
  const products = Store.getAllProducts();
  res.json({ products });
});

module.exports = router;
