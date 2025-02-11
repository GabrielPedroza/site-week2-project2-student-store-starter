import React, { useState } from "react"
import { MdAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsCashCoin, BsCreditCard } from "react-icons/bs"
import { BiPurchaseTag } from 'react-icons/bi'
import "./Sidebar.css"
import ShoppingCart from "../ShoppingCart/ShoppingCart"
import CheckoutForm from "../CheckoutForm/CheckoutForm"
import { Link } from "react-router-dom"

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<aside className={`sidebar ${isOpen ? "open" : ""}`}>
			<div className="toggle-btn" onClick={handleToggle}>
				{isOpen ? <AiOutlineArrowLeft className="arrow" /> : <AiOutlineArrowRight className="arrow" />}
			</div>
			<div className={`sidebar-icons ${isOpen ? "open" : ""}`}>
				<MdAddShoppingCart className="sidebar-icon" onClick={handleToggle}/>
				<BsCashCoin className="sidebar-icon" onClick={handleToggle}/>
				<BsCreditCard className="sidebar-icon" onClick={handleToggle}/>
				<Link to={'/purchases'} style={{ textDecoration: "none", color: "inherit" }}>
					<BiPurchaseTag className="sidebar-icon purchase" />
				</Link>
			</div>
			<div className="sidebar-content">
				<ShoppingCart />
				<CheckoutForm />
			</div>
		</aside>
	)
}
