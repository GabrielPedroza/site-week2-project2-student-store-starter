const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

router.get("/", (req, res) => {
  const products = Store.getAllProducts();
  res.json({ products });
});

// router.get("/:productId", (req, res) => {
//   const productId = req.params.productId;
//   const product = Store.getProductById(productId);
//   if (product) {
//     res.json({ product });
//   } else {
//     res.status(404).json({ error: "Product not found" });
//   }
// });

// router.post("/", (req, res) => {
//   const shoppingCart = req.body.shoppingCart;
//   const user = req.body.user;

//   try {
//     const purchase = Store.createPurchaseOrder(shoppingCart, user);
//     res.status(201).json({ purchase });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;
