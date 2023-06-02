/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, {useState} from "react";

function HomeGear() {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<section className="home-gear">
			<a href="" title="EG Swag" target="_blank">
				<div className="home-gear__image" className={isHovered ? "home-gear__image active" : "home-gear__image"} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
					<img alt="swag shop" className="pc-only loaded" data-src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" lazy="loaded"></img>
					<img alt="swag shop" className="sp-only" data-src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" lazy="loading"></img>
				</div>
				<div className="arrow">
					<span></span>
				</div>
			</a>
		</section>
	);
}

export default HomeGear;
