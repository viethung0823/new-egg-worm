/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from "react";
import $ from "jquery";
import {Swiper, SwiperSlide} from "swiper/react";
import {news} from "./data";
// Import Swiper styles
import "swiper/css";
import {useTranslation} from "react-i18next";

function News() {
	const [swiperRef, setSwiperRef] = useState(null);
	const [newsData, setNewsData] = useState(news);
	const {i18n} = useTranslation();

	useEffect(() => {
		const $element1 = $(".home-news-content");
		const $element2 = $(".fe-block-3284dc0550b8600a7274");

		$element1.append($element2);

		// css
		$(".summary-metadata-item--date").addClass("news-item__date").removeClass("summary-metadata-item--date").removeClass("summary-metadata-item");
		$(".summary-read-more-link").addClass("news-item__link").removeClass("summary-read-more-link");

		$('section[data-section-id="6472e7d959a4f10c5e5afedc"]').remove();
		setNewsData(newsData.sort((a, b) => b.date - a.date));
	}, [newsData]);

	const handleNavigate = (link) => {
		window.location.href = link;
	};

	function formatDate(date) {
		const year = date.getFullYear().toString().slice(-2);;
		let month = date.getMonth() + 1;
		month = month >= 10 ? month : '0' + String(month)
		return `${month}/${year}`;
	}

	return (
		<section className="home-news">
			<header className="home-news-header">
				<h2 className="home-news-title">HUB</h2>
				<a href={`https://www.eggworm.jp/hub/category/${i18n.language}`} className="home-news-link arrow-button active">
					<span className="text">View All</span> <span className="arrow"></span> <span className="line"></span>
				</a>
			</header>
			<div className="home-news-content">
				<Swiper
					onSwiper={setSwiperRef}
					centeredSlides={false}
					spaceBetween={22}
					pagination={false}
					breakpoints={{
						768: {
							slidesPerView: 3,
						},
						0: {
							slidesPerView: 2,
						},
					}}
					scrollbar={{
						draggable: true,
					}}
					navigation={false}
					className="mySwiper"
				>
					{newsData
						.filter(item => item.language.includes(i18n.language))
						.map((item) => (
							<SwiperSlide>
							<p className="news-item__date">{formatDate(item.date)}</p>
							<a href={item.link}>
								<p  className="news-item__link news-title">
									{item.title}
								</p>
								<img className="news-img" src={item.img} />
							</a>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
}

export default News;
