import React from "react"
import { Link } from "react-router-dom"
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"
import Logo from "../Logo/Logo"
import "./Navbar.css"

export default function Navbar() {
	return (
		<nav className="nav-container">
			<Logo />
			<div className="nav-socials">
				<a href="https://twitter.com" className="nav-social-link">
					<FaTwitter />
				</a>
				<a href="https://instagram.com" className="nav-social-link">
					<FaInstagram />
				</a>
				<a href="https://facebook.com" className="nav-social-link">
					<FaFacebook />
				</a>
			</div>
			<div className="nav-links">
				<Link to="/" className="nav-link">
					Home
				</Link>
				<a href="#about" className="nav-link">
					About
				</a>
				<a href="#contact" className="nav-link">
					Contact
				</a>
				<a href="#buy" className="nav-link">
					Buy now
				</a>
			</div>
		</nav>
	)
}
