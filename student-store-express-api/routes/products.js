const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

router.get("/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = Store.getProductById(productId);
  if (product) {
    res.json({ product });
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});

module.exports = router;
