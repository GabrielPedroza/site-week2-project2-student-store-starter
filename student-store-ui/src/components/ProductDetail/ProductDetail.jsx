import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../state/ProductContext";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";
import "./ProductDetail.css";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, addToCart, removeFromCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null); // Add a state to hold the fetched product

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        setProduct(response.data.product); // Set the fetched product in the state
      } catch (error) {
        console.log(error);
        setProduct("could not fetch product"); // Set an error message if the product couldn't be fetched
      }
    };

    fetchData();
  }, [productId]);

  if (!product) {
    return (
      <div className="loading-spinner">
        <AiOutlineLoading className="spinner" />
      </div>
    );
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <div className="pd-signs">
        <HiOutlinePlus className="pd-sign pd-plus" onClick={() => addToCart(product)} />
        <HiOutlineMinus className="pd-sign pd-minus" onClick={() => removeFromCart(product.id)} />
      </div>
      <div className="pd-stars">
        <img src="/stars.png" alt="stars" />
      </div>
      <p className="pd-price">Price: {formatPrice(product.price)}</p>
    </div>
  );
};

export function formatPrice(price) {
  const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  return `$${formattedPrice}`;
}

export default ProductDetail;
