/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import $ from "jquery";

function Other() {
	useEffect(() => {
		// const $element1 = $(".home-news-content");
		// const $element2 = $(".fe-block-3284dc0550b8600a7274");
		// $element1.append($element2);
		// // css
		// $(".summary-metadata-item--date").addClass("news-item__date").removeClass("summary-metadata-item--date").removeClass("summary-metadata-item");
		// $(".summary-read-more-link").addClass("news-item__link").removeClass("summary-read-more-link");
		// $('section[data-section-id="6472e7d959a4f10c5e5afedc"]').remove();
	}, []);
	return (
		<section className="home-other">
			<div className="home-other-item">
				<a href="/members/" className="">
					<div className="home-other-item__image">
						<img data-src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/founders.png" src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/founders.png" lazy="loaded" className="loaded"></img>
					</div>
					<div className="home-other-item__cover"></div>
					<div className="home-other-item__title">
						FOUNDERS<span></span>
					</div>
				</a>
			</div>
			<div className="home-other-item">
				<a href="/contact/?joinus=1" className="">
					<div className="home-other-item__image">
						<img data-src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/joinUs.png" src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/joinUs.png" lazy="loaded" className="loaded"></img>
					</div>
					<div className="home-other-item__cover"></div>
					<div className="home-other-item__title">
						JOIN US<span></span>
					</div>
				</a>
			</div>
		</section>
	);
}

export default Other;
