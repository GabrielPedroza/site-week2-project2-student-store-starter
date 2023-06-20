import React, { useState } from "react"
import { MdOutlineAddShoppingCart, MdAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BsCashCoin, BsCreditCard } from "react-icons/bs"
import "./Sidebar.css"

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
			</div>
			<div className="sidebar-content">
				<h2>Menu</h2>
				<ul className="menu-list">
					<li>Home</li>
					<li>Products</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</div>
		</aside>
	)
}
