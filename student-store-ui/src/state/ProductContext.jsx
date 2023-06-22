import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])

  const setFetchedProducts = (fetchedProducts) => {
    setProducts(fetchedProducts);
  };

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const itemInCart = cartItems.find((item) => item.id === product.id);

    if (itemInCart) {
      // If the product is already in the cart, update the quantity
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      // If the product is not in the cart, add it
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const contextValues = {
    filteredProducts,
    products,
    cartItems,
    setFetchedProducts,
    addToCart,
    setProducts,
    removeFromCart,
    setFilteredProducts
  };

  return (
    <ProductContext.Provider value={contextValues}>{children}</ProductContext.Provider>
  );
};
