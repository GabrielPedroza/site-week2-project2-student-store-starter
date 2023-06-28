import React, { useState, useContext } from "react";
import { GrMenu } from 'react-icons/gr'
import { ProductContext } from "../../state/ProductContext";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const { products, setFilteredProducts } = useContext(ProductContext);

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    const filteredProducts = products.products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Update the products in the context
    setFilteredProducts({ products: filteredProducts });
  };

  const handleFilter = (category) => {
    const filteredProducts = products.products.filter((product) =>
      category === "all" ? true : product.category === category
    );

    setFilteredProducts({ products: filteredProducts });

    if (selectedCategory === category) {
      setSelectedCategory(null); // Deselect the category if it's clicked again
    } else {
      setSelectedCategory(category);
    }
  };

  const toggleCategoriesVisibility = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  return (
    <div className="search-bar">
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className={`filter-categories ${categoriesVisible ? "visible" : "hidden"}`}>
        <div onClick={toggleCategoriesVisibility} className="toggle-button">
          <GrMenu className="search-menu" />
        </div>
        {categoriesVisible && (
          <div className="search-categories">
            <p
              onClick={() => handleFilter("all")}
              className={selectedCategory === "all" ? "selected" : ""}
            >
              All Categories
            </p>
            <p
              onClick={() => handleFilter("clothing")}
              className={selectedCategory === "clothing" ? "selected" : ""}
            >
              Clothing
            </p>
            <p
              onClick={() => handleFilter("food")}
              className={selectedCategory === "food" ? "selected" : ""}
            >
              Food
            </p>
            <p
              onClick={() => handleFilter("accessories")}
              className={selectedCategory === "accessories" ? "selected" : ""}
            >
              Accessories
            </p>
            <p
              onClick={() => handleFilter("tech")}
              className={selectedCategory === "tech" ? "selected" : ""}
            >
              Tech
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
