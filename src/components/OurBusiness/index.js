/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import $ from "jquery";
import {useTranslation} from "react-i18next";

function OurBusiness() {
	const {t} = useTranslation();
	const [activeOSIndex, setActiveOSIndex] = useState([]);
	const [hoveredIndex, setHoveredIndex] = useState(null);

	const handleItemClick = (index) => {
		if (activeOSIndex.includes(index)) {
			setActiveOSIndex(activeOSIndex.filter((i) => i !== index));
		} else {
			setActiveOSIndex([...activeOSIndex, index]);
		}
	};

	const otherBusinessList = [
		{
			title: t("OB.boxTitle1"),
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/ourBrands.png",
			description: "View all",
			url: "/brands",
		},
		{
			title: t("OB.boxTitle2"),
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/content.png",
			description: "View all",
			url: "/media",
		},
		{
			title: t("OB.boxTitle3"),
			imgLink: "https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/assets/media.png",
			description: "View all",
			url: "/content",
		},
	];

	const ourServiceList = [
		{
			title: t("OS.box1"),
			content: t("OS.box1-content"),
		},
		{
			title: t("OS.box2"),
			content: t("OS.box2-content"),
		},
		{
			title: t("OS.box3"),
			content: t("OS.box3-content"),
		},
	];

	return (
		<section className="our-business">
			<header className="our-business__header">
				<h2 className="our-business__title">{t("OB.title")}</h2>
				<div className="our-business__detail">
					<h3 className="our-business__title2">
						<span>{t("OB.subtitle1")}</span>
					</h3>
					<p className="our-business__text">{t("OB.subtitle2")}</p>
				</div>
			</header>
			<section className="our-creative">
				<h3 className="our-services__title">{t("OS.title")}</h3>
				<div className="rewards">
					<div className="rewards__left">
						<div className="rewards__left-inner">
							<p>{t("OS.box4")}</p>
						</div>
					</div>
				</div>
				<ul className="our-business__buttons">
					{ourServiceList.map((item, index) => (
						<li className={`our-business__button ${activeOSIndex.includes(index) ? "active" : ""}`} key={index} onClick={() => handleItemClick(index)}>
							<a>
								<div className="grad"></div>
								<div className="label">
									<span>{item.title}</span>
								</div>
								<div className="hover">
									<span>{item.content}</span>
								</div>
							</a>
						</li>
					))}
				</ul>
			</section>
			<section className="our-services">
				<h3 className="our-services__title">Other business</h3>
				<ul className="our-services-list">
					{otherBusinessList.map((item, index) => (
						<li className={`our-services-item ${hoveredIndex === index ? "active" : ""}`} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
							<div class="our-services-item__title">{item.title}</div>
							<div class="our-services-item__inner">
								<img src={item.imgLink} alt="logo"></img>
								<div class="hover">
									<div class="hover-inner">
										<span class="text">{item.description}</span>
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

export default OurBusiness;
