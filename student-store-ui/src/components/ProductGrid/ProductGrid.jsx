import React from 'react'
import { AiOutlineLoading } from "react-icons/ai"
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"
import "./ProductGrid.css"
import ProductCard from '../ProductCard/ProductCard'

const ProductGrid = ({ products, isFetching }) => {
  return (
    <>
        <h3 className='product-header'>Best Selling Products</h3>
        <div className="product-grid">
            {!isFetching ? (
                products.products.map((product, i) => (
                    <ProductCard product={product} key={i} />
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

export default ProductGrid