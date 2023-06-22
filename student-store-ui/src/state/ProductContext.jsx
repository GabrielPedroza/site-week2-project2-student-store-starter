import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const setFetchedProducts = (fetchedProducts) => {
    setProducts(fetchedProducts);
  };

  const contextValues = {
    products,
    setFetchedProducts,
  };

  return (
    <ProductContext.Provider value={contextValues}>{children}</ProductContext.Provider>
  );
};
