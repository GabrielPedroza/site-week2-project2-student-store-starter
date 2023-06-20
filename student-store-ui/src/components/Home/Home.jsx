import React from "react"
import { AiOutlineLoading } from "react-icons/ai"
import Hero from "../Hero/Hero"
import "./Home.css"

export default function Home({ products }) {
	console.log(products)

	return (
		<div className="home">
			<Hero />
			<p>home</p>
			{products.products ? (
				products.products.map(product => {
					return (
						<div key={product.id}>
							<p>{product.name}</p>
							<p>{product.description}</p>
							<p>{product.price}</p>
							<p>{product.image}</p>
						</div>
					)
				})
			) : (
				<div className="loading-spinner">
					<AiOutlineLoading className="spinner" />
				</div>
			)}
		</div>
	)
}
