import React, { useState } from "react"
import { MdOutlineAddShoppingCart } from "react-icons/md"
import { AiOutlineArrowRight } from "react-icons/ai"
import "./Sidebar.css"

export default function Sidebar() {
	const [isOpen, setIsOpen] = useState(false)

	const handleToggle = () => {
		setIsOpen(!isOpen)
	}

	return (
		<aside
			className={`sidebar ${isOpen ? "open" : ""}`}
			style={{ width: 500, backgroundColor: "#2c3f47" }} // setting width in css file did not work
		>
			<div className="toggle-btn" onClick={handleToggle}>
				{isOpen ? <p>Close</p> : <AiOutlineArrowRight />}
			</div>
			<div>
				<div>
					<MdOutlineAddShoppingCart />
				</div>
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
