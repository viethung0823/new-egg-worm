/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import $ from "jquery";

function Brands() {
	const [activeOSIndex, setActiveOSIndex] = useState([]);
	const handleItemClick = (index) => {
		if (activeOSIndex.includes(index)) {
			setActiveOSIndex(activeOSIndex.filter((i) => i !== index));
		} else {
			setActiveOSIndex([...activeOSIndex, index]);
		}
	};

	const otherBusinessList = [
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/media/mixmag.png",
			url: "https://mixmagjapan.com/",
			description: 'Experience the ultimate in lifestyle, music, and business with Mixmag, the premier magazine that takes you on a journey whilst providing insights that keep you ahead of the curve.'
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/media/enter.png",
			url: "https://www.enter-japan.jp/",
			description: 'We are your partner in Japan; experienced dance and urban music industry experts located in Tokyo who have been operating since 2006.  We are able to develop strategies that can both penetrate and revitalize the market.'
		},
		{
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/media/lifeInJapan.png",
			url: "https://lifeinjapan.io/",
			description: 'Here’s a sneak peek into the island nation that combines modern and tradition like none other.'
		},
	];

	return (
		<section className="our-business media">
			<section className="our-services">
				<ul className="our-services-list brands">
					{otherBusinessList.map((item, index) => (
						<li className={`our-services-item brands ${activeOSIndex.includes(index) ? "active" : ""}`} onClick={() => handleItemClick(index)}>
							<div class="our-services-item__inner">
								<img src={item.imgLink} alt="logo"></img>
								<div class="hover">
									<div class="hover-inner">
										<span className="text">{item.description}</span>
										<a href={item.url} target="_blank" title="media">Website<span></span></a>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</section>
		</section>
	);
}

export default Brands;
