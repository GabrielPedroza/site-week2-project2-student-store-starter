import React from 'react'
import { AiOutlineLoading } from "react-icons/ai"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import "./ProductGrid.css"

const ProductGrid = ({ products }) => {
  return (
    <>
        <h3>Best Selling Products</h3>
        <div className="product-grid">
            {products.products ? (
                products.products.map(product => (
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
                ))
            ) : (
                <div className="loading-spinner">
                    <AiOutlineLoading className="spinner" />
                </div>
            )}
        </div>
    </>
  )
}

function formatPrice(price) {
	const formattedPrice = price % 1 === 0 ? price.toFixed(0) : price.toFixed(2);
	return `$${formattedPrice}`;
  }

export default ProductGrid