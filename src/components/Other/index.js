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
		<section class="home-other">
			<div class="home-other-item">
				<a href="/members/" class="">
					<div class="home-other-item__image">
						<img data-src="/data/uploads/2022/10/home-members2.jpg?20230510022158" src="/data/uploads/2022/10/home-members2.jpg?20230510022158" lazy="loaded" class="loaded"></img>
					</div>
					<div class="home-other-item__cover"></div>
					<div class="home-other-item__title">
						MEMBERS<span></span>
					</div>
				</a>
			</div>
			<div class="home-other-item">
				<a href="/contact/?joinus=1" class="">
					<div class="home-other-item__image">
						<img data-src="/data/uploads/2021/04/home-joinus.jpg?20230510022158" src="/data/uploads/2021/04/home-joinus.jpg?20230510022158" lazy="loaded" class="loaded"></img>
					</div>
					<div class="home-other-item__cover"></div>
					<div class="home-other-item__title">
						JOIN US<span></span>
					</div>
				</a>
			</div>
		</section>
	);
}

export default Other;
