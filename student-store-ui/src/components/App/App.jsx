import React, { useState, useEffect, useContext } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductDetail from "../ProductDetail/ProductDetail";
import { ProductContext } from "../../state/ProductContext"
import "./App.css"
import NotFound from "../NotFound/NotFound"
import Purchases from "../Puchases/Purchases"
import PurchaseID from "../PuchaseID/PurchaseID"

export default function App() {
	const { setFetchedProducts, filteredProducts, setFilteredProducts } = useContext(ProductContext)
	const [isFetching, setIsFetching] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get("http://localhost:3001/store");
				setFetchedProducts(response.data)
				setFilteredProducts(response.data)
				setIsFetching(false)
			} catch (error) {
				console.log(error);
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
							element={<Home products={filteredProducts} isFetching={isFetching} />}
						/>
						<Route
							path="/products/:productId"
							element={
								<ProductDetail
									products={filteredProducts}
								/>
							}
						/>
						<Route path="/purchases" element={<Purchases />} />
						<Route
							path="/purchase/:purchaseId"
							element={
								<PurchaseID />
							}
						/>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</Router>
		</div>
	)
}
