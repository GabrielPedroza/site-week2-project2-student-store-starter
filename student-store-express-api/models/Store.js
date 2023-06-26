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

  createPurchaseOrder(shoppingCart, user) {
    // Validate input
    // ...

    // Calculate total and create purchase object
    // ...

    // Save purchase to db.json
    // ...

    return newPurchase;
  }
}

module.exports = new Store();
