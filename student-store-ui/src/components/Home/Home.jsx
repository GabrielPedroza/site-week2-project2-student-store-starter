import React from "react"
import Hero from "../Hero/Hero"
import "./Home.css"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductGrid from "../ProductGrid/ProductGrid"

export default function Home({ products }) {
	return (
		<div className="home">
			<Hero />
			<p>search bar goes here</p>
			<ProductGrid products={products}/>
			<About />
			<Contact />
			<Footer />
		</div>
	)
}