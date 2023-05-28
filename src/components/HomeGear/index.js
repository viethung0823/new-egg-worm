/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function HomeGear() {
	return (
		<section className="home-gear">
			<a href="" title="EG Swag" target="_blank">
				<div className="home-gear__image">
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
