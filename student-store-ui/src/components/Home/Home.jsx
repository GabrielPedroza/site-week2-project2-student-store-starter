import React from "react"
import Hero from "../Hero/Hero"
import "./Home.css"
import About from "../About/About"
import Contact from "../Contact/Contact"
import Footer from "../Footer/Footer"
import ProductGrid from "../ProductGrid/ProductGrid"
import Search from "../Search/Search"

export default function Home({ products, isFetching }) {

	return (
		<div className="home">
			<Hero />
			<Search />
			<ProductGrid products={products} isFetching={isFetching} />
			<About />
			<Contact />
			<Footer />
		</div>
	)
}