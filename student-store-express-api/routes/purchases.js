const express = require("express");
const router = express.Router();
const Store = require("../models/Store");

router.get("/", (req, res) => {
  const orders = Store.getAllPurchases();
  res.json({ orders });
});

router.get("/:purchaseId", (req, res) => {
  const id = req.params.purchaseId;
  const order = Store.getPurchaseById(id);
  if (order) {
    res.json({ order });
  } else {
    res.status(404).json({ error: "Order not found" });
  }
});

router.post("/makePurchase", (req, res) => {
  
  const { id, shoppingCart, email, total } = req.body;
  
  const newPurchase = Store.createPurchaseOrder(id, shoppingCart, email, total);
  res.status(201).json({ purchase: newPurchase });
})
module.exports = router;
