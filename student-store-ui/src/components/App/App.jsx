import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
// import ProductDetail from "../ProductDetail/ProductDetail";
// import NotFound from "../NotFound/NotFound";
import "./App.css"

export default function App() {
	const [products, setProducts] = useState([])
	const [isFetching, setIsFetching] = useState(true)
	const [error, setError] = useState(null)
	const [isOpen, setIsOpen] = useState(false)
	const [shoppingCart, setShoppingCart] = useState([])
	const [checkoutForm, setCheckoutForm] = useState({
		name: "",
		email: "",
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.get(
					"https://codepath-store-api.herokuapp.com/store"
				)
				setProducts(response.data)
				setIsFetching(false)
			} catch (error) {
				setError("Error fetching products")
				setIsFetching(false)
			}
		}

		fetchData()
	}, [])

	const handleOnToggle = () => {
		setIsOpen(!isOpen)
	}

	const handleAddItemToCart = productId => {
		const existingItem = shoppingCart.find(
			item => item.itemId === productId
		)

		if (existingItem) {
			const updatedCart = shoppingCart.map(item =>
				item.itemId === productId
					? { ...item, quantity: item.quantity + 1 }
					: item
			)
			setShoppingCart(updatedCart)
		} else {
			const product = products.find(item => item.id === productId)
			const newItem = {
				itemId: productId,
				quantity: 1,
				price: product.price,
			}
			setShoppingCart([...shoppingCart, newItem])
		}
	}

	const handleRemoveItemFromCart = productId => {
		const existingItem = shoppingCart.find(
			item => item.itemId === productId
		)

		if (existingItem) {
			let updatedCart = []
			if (existingItem.quantity > 1) {
				updatedCart = shoppingCart.map(item =>
					item.itemId === productId
						? { ...item, quantity: item.quantity - 1 }
						: item
				)
			} else {
				updatedCart = shoppingCart.filter(
					item => item.itemId !== productId
				)
			}
			setShoppingCart(updatedCart)
		}
	}

	const handleOnCheckoutFormChange = (name, value) => {
		setCheckoutForm(prevForm => ({
			...prevForm,
			[name]: value,
		}))
	}

	const handleOnSubmitCheckoutForm = async () => {
		const order = {
			user: {
				name: checkoutForm.name,
				email: checkoutForm.email,
			},
			shoppingCart: shoppingCart.map(({ itemId, quantity }) => ({
				itemId,
				quantity,
			})),
		}

		try {
			const response = await axios.post("/store", order)
			// Handle successful submission (e.g., show confirmation message)
		} catch (error) {
			// Handle error (e.g., display error message)
		}
	}

	return (
		<div className="app">
			<Router>
				<Navbar />
				<Sidebar isOpen={isOpen} />
				<div className="content">
					<Routes>
						<Route
							path="/"
							element={<Home products={products} />}
						/>
						<Route
							path="/products/:productId"
							element={
								// <ProductDetail
								// 	products={products}
								// 	onAddToCart={handleAddItemToCart}
								// />
								products
							}
						/>
						{/* <Route path="*" element={<NotFound />} /> */}
					</Routes>
				</div>
			</Router>
		</div>
	)
}
