import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
// import ProductDetail from "../ProductDetail/ProductDetail";
import "./App.css"
import NotFound from "../NotFound/NotFound"

export default function App() {
	const [products, setProducts] = useState([])
	const [isFetching, setIsFetching] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://codepath-store-api.herokuapp.com/store"
				)
				setProducts(response.data)
				setIsFetching(false)
			} catch (error) {
				console.error('Error fetching products')
				setIsFetching(false)
			}
		}

		fetchData()
	}, [])

	return (
		<div className="app">
			<Router>
				<Navbar />
				<Sidebar />
				<div className="content">
					<Routes>
						<Route
							path="/"
							element={<Home products={products} isFetching={isFetching} />}
						/>
						{/* <Route
							path="/products/:productId"
							element={
								<ProductDetail
									products={products}
									onAddToCart={handleAddItemToCart}
								/>
							}
						/> */}
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}
