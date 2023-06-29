const fs = require("fs");

class Store {
  constructor() {
    this.data = require("../data/db.json");
  }

  getAllProducts() {
    return this.data.products;
  }

  getProductById(productId) {
    return this.data.products.find((product) => product.id === +productId);
  }

  getAllPurchases() {
    return this.data.purchases;
  }

  getPurchaseById(purchaseId) {
    return this.data.purchases.find((purchase) => purchase.id == purchaseId);
  }

  createPurchaseOrder(id, shoppingCart, email, total) {
    const newPurchase = { id, shoppingCart, email, total };
    this.data.purchases.push(newPurchase)

    return newPurchase;
  }
}

module.exports = new Store();
