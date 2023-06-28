import { useContext } from 'react'
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import { ProductContext } from "../../state/ProductContext";
import "./ProductCard.css"
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(ProductContext)

  return (
    <div key={product.id} className="product-item">
      <Link to={`/products/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
        <img src={product.image} alt={product.name} />
        <div className="product-name-count">
            <p>{product.name}</p>
            <div>
                <HiOutlinePlus className="sign plus" onClick={(event) => { event.preventDefault(); addToCart(product); }}/>
              <div>
                <HiOutlineMinus className="sign minus" onClick={(event) => { event.preventDefault(); removeFromCart(product.id); }} />
              </div>
            </div>
        </div>
            <p className="product-price">{formatPrice(product.price)}</p>
            <div className="stars">
                <img src="/stars.png" alt="stars" />
            </div>
        </Link>
    </div>
  )
}

export function formatPrice(price) {
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);

  return formattedPrice;
}


export default ProductCard