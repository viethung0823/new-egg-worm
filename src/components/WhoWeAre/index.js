import React from "react";
import {useTranslation} from "react-i18next";

function WhoWeAre() {
	const {t} = useTranslation();

	return (
		<section className="who-we-are" id="who-we-are">
			<h2>{t("HWA.title")}</h2>
			<p>
				{t("HWA.subtitle1")}
				<br></br>
				<br></br>
				{t("HWA.subtitle2")}
				<br></br>
				<br></br>
				{t("HWA.subtitle3")}
				<br></br>
				<br></br>
				<a href="https://www.eggworm.jp/our-history" className="home-works-link arrow-button active"><span class="text">Our History</span> <span class="arrow"></span> <span class="line"></span></a>
			</p>
		</section>
	);
}

export default WhoWeAre;
