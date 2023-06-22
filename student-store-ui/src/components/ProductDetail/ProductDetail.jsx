import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../state/ProductContext";
import "./ProductDetail.css";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const ProductDetail = () => {
  const { productId } = useParams();
  const { products, addToCart, removeFromCart } = useContext(ProductContext);

  const product = products.products.find((product) => product.id == productId);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
      <p className="pd-price">Price: {formatPrice(product.price)}</p>
      <div>
        <HiOutlinePlus className="pd-sign pd-plus" onClick={() => addToCart(product)}/>
        <HiOutlineMinus className="pd-sign pd-minus" onClick={() => removeFromCart(product.id)} />
    </div>
    <div className="pd-stars">
        <img src="/stars.png" alt="stars" />
    </div>
    </div>
  );
};

export function formatPrice(price) {
  const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
  return `$${formattedPrice}`;
}

export default ProductDetail;
