import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../state/ProductContext";
import { AiOutlineLoading } from "react-icons/ai";
import axios from "axios";
import "./ProductDetail.css";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { formatPrice } from "../ProductCard/ProductCard";

const ProductDetail = () => {
  const { productId } = useParams();
  const { addToCart, removeFromCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/products/${productId}`);
        setProduct(response.data.product);
      } catch (error) {
        console.log(error);
        setProduct("could not fetch product");
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
        <div className="pd-sign pd-plus" onClick={() => addToCart(product)}>
          <HiOutlinePlus />
        </div>
        <div className="pd-sign pd-minus" onClick={() => removeFromCart(product.id)}>
          <HiOutlineMinus />
        </div>
      </div>
      <div className="pd-stars">
        <img src="/stars.png" alt="stars" />
      </div>
      <p className="pd-price">Price: {formatPrice(product.price)}</p>
    </div>
  );
};

export default ProductDetail;
