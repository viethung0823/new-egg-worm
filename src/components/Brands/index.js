/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import $ from "jquery";

function Brands() {

	const handleClick = (link) => {
		window.location.href = link;
	};

	const otherBusinessList = [
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/brands/sumerSound.png",
			url: "https://www.eggworm.jp/brands/summer-sounds",
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/brands/tokyoClub.png",
			url: "https://www.eggworm.jp/brands/tokyo-comedy-club",
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/brands/audio.png",
			url: "https://www.eggworm.jp/brands/audio",
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/brands/whistle.png",
			url: "https://www.eggworm.jp/brands/whistlebump",
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/brands/add.png",
			url: "https://www.eggworm.jp/brands/aliens-dont-dance",
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/brands/socialCLub.png",
			url: "https://www.eggworm.jp/brands/the-social",
		},
	];

	return (
		<section className="our-business">
			<section className="our-services">
				<ul className="our-services-list brands">
					{otherBusinessList.map((item, index) => (
						<li className={`our-services-item brands `} onClick={() => handleClick(item.url)}>
							<div class="our-services-item__inner">
								<img src={item.imgLink} alt="logo"></img>
								{/* <div class="hover">
									<div class="hover-inner">
										<span className="text">{item.description}</span>
										<a href="https://thecreativeacademy.com/" target="_blank" title="THE CREATIVE ACADEMY">Website<span></span></a>
									</div>
								</div> */}
							</div>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}

export default Brands;
