/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, {useRef, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

function HomeWorks() {
	const {t, i18n} = useTranslation();
	const [activeIndex, setActiveIndex] = useState(null);
	const itemRefs = useRef([]);
	const handleIntersection = (entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const index = itemRefs.current.indexOf(entry.target);
				setActiveIndex(index);
			}
		});
	};
	useEffect(() => {
		const options = {
			rootMargin: "0px",
			threshold: 1.0,
		};
		const observer = new IntersectionObserver(handleIntersection, options);
		itemRefs.current.forEach((ref) => observer.observe(ref));

		return () => {
			observer.disconnect();
		};
	}, []);
	const currentLanguage = i18n.language;
  const isJapanese = currentLanguage === 'jp';

	const items = [
		{
			id: 1,
			imgLink: "https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/ac09a66e-3604-425e-a1ef-fe2def98bb74/288020857_10159108756540698_9000293709595520415_n.jpeg?format=2500w",
			title: "BRUICHLADDICH",
			description: t("WOKR.1"),
			url: "https://www.eggworm.jp/en/our-work/bruichladdich",
		},
		{
			id: 2,
			imgLink: "https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/1596417754268-0HYZGZ8BXFKG20TNHSEK/107051076_2987167684885523_3111168653457907190_n.jpg",
			title: "TAXI OVATION",
			description: t("WOKR.2"),
			url: `https://www.eggworm.jp/${isJapanese ? 'jp' : 'en'}/our-work/taxi-ovation`,
		},
		{
			id: 3,
			imgLink: "https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/1596418713811-XAM7LLHGZWOES91AAL3D/28161740_10155415421745698_2751362336498237194_o_10155415421745698.jpg",
			title: "ONITSUKA TIGER",
			description: t("WOKR.3"),
			url: `https://www.eggworm.jp/${isJapanese ? 'jp' : 'en'}/our-work/onitsuka-tiger`,
		},
	];

	return (
		<section className="home-works" id="our-work">
			<header className="home-works-header">
				<h2 className="home-works-title">WORKS</h2>{" "}
				{/* <a href="/works/" className="home-works-all-link arrow-button active">
					<span className="text">View All</span> <span className="arrow"></span> <span className="line"></span>
				</a> */}
			</header>
			<div className="home-works-list">
				{items.map((item) => (
					<div className={`home-works-item ${item.id === activeIndex ? "active" : ""}`} key={item.id} ref={(el) => (itemRefs.current[item.id] = el)}>
						<div className="home-works-item__inner">
							<a href={item.url} className="home-works-item__image">
								<div className="image loaded" lazy="loaded" style={{backgroundImage: `url(${item.imgLink})`}}></div>
							</a>
							<div className="home-works-info">
								<h3 className="home-works-info__title">{item.title}</h3>
								<p className="home-works-info__text">{item.description}</p>{" "}
								<a href={item.url} className="home-works-link arrow-button active">
									<span className="text">{t("WOKR.detail")}</span> <span className="arrow"></span> <span className="line"></span>
								</a>
							</div>
							<div className="cover"></div>
						</div>
					</div>
				))}
			</div>
			<footer className="home-works-footer">
				<a href={i18n.language === "jp" ? "https://www.eggworm.jp/jp/our-work" :"https://www.eggworm.jp/en/our-work"} className="home-works-footer__link">
				{t("WOKR.all")}<span></span>
				</a>
			</footer>
		</section>
	);
}

export default HomeWorks;
