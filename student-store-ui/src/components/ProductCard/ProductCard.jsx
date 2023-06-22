import { useContext } from 'react'
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import { ProductContext } from "../../state/ProductContext";
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart } = useContext(ProductContext)
  return (
    <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} />
        <div className="product-name-count">
            <p>{product.name}</p>
            <div>
                <HiOutlinePlus className="sign plus" onClick={() => addToCart(product)}/>
              <div>
                <HiOutlineMinus className="sign minus" onClick={() => removeFromCart(product.id)} />
              </div>
            </div>
        </div>
            <p className="product-price">{formatPrice(product.price)}</p>
            <div className="stars">
                <img src="/stars.png" alt="stars" />
            </div>
    </div>
  )
}

export function formatPrice(price) {
	const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2)
	return `$${formattedPrice}`;
}

export default ProductCard