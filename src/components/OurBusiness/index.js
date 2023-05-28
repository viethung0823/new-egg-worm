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
					<li className="our-services-item">
						<div className="our-services-item__title">EVENT</div>
						<div className="our-services-item__inner">
							<img src="https://goinc.co.jp/data/uploads/2023/04/tca-logo.png" alt="THE CREATIVE ACADEMY"></img>
						</div>
					</li>
					<li className="our-services-item">
						<div className="our-services-item__title">EVENT</div>
						<div className="our-services-item__inner">
							<img src="https://goinc.co.jp/data/uploads/2023/04/tca-logo.png" alt="THE CREATIVE ACADEMY"></img>
						</div>
					</li>
					<li className="our-services-item">
						<div className="our-services-item__title">EVENT</div>
						<div className="our-services-item__inner">
							<img src="https://goinc.co.jp/data/uploads/2023/04/tca-logo.png" alt="THE CREATIVE ACADEMY"></img>
						</div>
					</li>
				</ul>
				<a href="/" target="_blank" title="事業計画はこちら" className="business-plan-link" rel="noreferrer">
					View all<span></span>
				</a>
			</section>
		</section>
	);
}

export default OurBusiness;
