/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $ from "jquery";
import {useTranslation} from "react-i18next";

$(document).ready(function () {
	$(".our-business__button--1").click(function () {
		$(this).toggleClass("active");
	});
	$(".our-business__button--2").click(function () {
		$(this).toggleClass("active");
	});
	$(".our-business__button--3").click(function () {
		$(this).toggleClass("active");
	});
});

function OurBusiness() {
	const {t} = useTranslation();
	const items = [
		{
			title: t("OB.boxTitle1"),
			imgLink: "https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/ac09a66e-3604-425e-a1ef-fe2def98bb74/288020857_10159108756540698_9000293709595520415_n.jpeg?format=2500w",
			description: "Bruichladdich were looking to create awareness in 2022 for their product range in the Japanese market. They wanted a launch event in line with their target demographic and PR reach that would assist them in telling their brand story on a national scale.",
			url: "",
		},
		{
			title: t("OB.boxTitle2"),
			imgLink: "https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/1596417754268-0HYZGZ8BXFKG20TNHSEK/107051076_2987167684885523_3111168653457907190_n.jpg",
			description: "To help the hospitals combat Covid-19 with Taxi Ovation – a fundraiser was created to provide free taxi-ride services for healthcare workers in partnership with Makita General Hospital and Kyoritsu Taxi Co., Ltd. The aim was to increase the welfare of hospital staff during this pandemic as well as providing business for companies who were affected by it.",
			url: "",
		},
		{
			title: t("OB.boxTitle3"),
			imgLink: "https://images.squarespace-cdn.com/content/v1/5eb624a9707ef42c472b42ec/1596418713811-XAM7LLHGZWOES91AAL3D/28161740_10155415421745698_2751362336498237194_o_10155415421745698.jpg",
			description: "To mark 69 years of selling sneakers, Onitsuka Tiger opened up a flagship store in the heart of Tokyo. The opening night enhanced the relevance of the brand as one of Japan's original sneaker brands.",
			url: "",
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
				<ul className="our-business__buttons">
					<li className="our-business__button our-business__button--1">
						<a>
							<div className="grad"></div>
							<div className="label">
								<span>{t("OS.box1")}</span>
							</div>
							<div className="hover">
								<span>{t("OS.box1-content")}</span>
							</div>
						</a>
					</li>
					<li className="our-business__button our-business__button--2">
						<a>
							<div className="grad"></div>
							<div className="label">
								<span>{t("OS.box2")}</span>
							</div>
							<div className="hover">
								<span>{t("OS.box2-content")}</span>
							</div>
						</a>
					</li>
					<li className="our-business__button our-business__button--3">
						<a>
							<div className="grad"></div>
							<div className="label">
								<span>{t("OS.box3")}</span>
							</div>
							<div className="hover">
								<span>{t("OS.box3-content")}</span>
							</div>
						</a>
					</li>
				</ul>
				<div className="rewards">
					<div className="rewards__left">
						<div className="rewards__left-inner">
							<p>{t("OS.box4")}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="our-services">
				<h3 className="our-services__title">Other business</h3>
				<ul className="our-services-list">
					{items.map((item) => (
						<li className="our-services-item">
							<div className="our-services-item__title">{item.title}</div>
							<div className="our-services-item__inner">
								<img src="https://goinc.co.jp/data/uploads/2023/04/tca-logo.png" alt="THE CREATIVE ACADEMY"></img>
							</div>
						</li>
					))}
				</ul>
				<a href="/" target="_blank" title="事業計画はこちら" className="business-plan-link" rel="noreferrer">
					View all<span></span>
				</a>
			</section>
		</section>
	);
}

export default OurBusiness;
