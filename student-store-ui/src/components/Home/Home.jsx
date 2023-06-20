import React from "react"
import { AiOutlineLoading } from "react-icons/ai"
import Hero from "../Hero/Hero"
import "./Home.css"
import About from "../About/About"
import Contact from "../Contact/Contact"

export default function Home({ products }) {
	return (
		<div className="home">
			<Hero />
			<p>home</p>
			<div className="product-grid">
				{products.products ? (
					products.products.map(product => (
						<div key={product.id} className="product-item">
							<img src={product.image} alt={product.name} />
							<p>{product.name}</p>
							<p>{product.price}</p>
						</div>
					))
				) : (
					<div className="loading-spinner">
						<AiOutlineLoading className="spinner" />
					</div>
				)}
			</div>
			<About />
			<Contact />
		</div>
	)
}
