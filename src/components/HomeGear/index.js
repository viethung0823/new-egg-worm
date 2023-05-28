/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";

function HomeGear() {
	return (
		<section class="home-gear">
			<a href="" title="EG Swag" target="_blank"></a>
			<div class="home-gear__image">
				<img alt="swag shop" class="pc-only loaded" data-src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" lazy="loaded"></img>
				<img alt="swag shop" class="sp-only" data-src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ewShop.png" lazy="loading"></img>
			</div>
			<div class="arrow">
				<span></span>
			</div>
		</section>
	);
}

export default HomeGear;
