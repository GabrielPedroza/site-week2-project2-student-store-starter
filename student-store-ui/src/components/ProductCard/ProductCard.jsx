import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-item">
        <img src={product.image} alt={product.name} />
        <div className="product-name-count">
            <p>{product.name}</p>
            <div>
                <HiOutlinePlus className="sign plus"/>
                <HiOutlineMinus className="sign minus" />
            </div>
        </div>
            <p className="product-price">{formatPrice(product.price)}</p>
            <div className="stars">
                <img src="/stars.png" alt="stars" />
            </div>
    </div>
  )
}

function formatPrice(price) {
	const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
	return `$${formattedPrice}`;
}

export default ProductCard