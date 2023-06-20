import "./Hero.css"

export default function Hero() {
	return (
		<div className="hero">
			<div className="hero-container">
				<div className="hero-intro">
					Welcome!
					<br />
					Find Your Merch!
				</div>
				<p className="hero-desc">
					We have all kinds of goodies. Click on any of the items to
					start filling up your shopping cart. Checkout whenever
					you're ready.
				</p>
			</div>
			<img className="hero-image" src="/hero-img.png" alt="logo" />
		</div>
	)
}
