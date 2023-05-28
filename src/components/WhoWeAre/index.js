import React from "react";
import {useTranslation} from "react-i18next";

function WhoWeAre() {
	const {t} = useTranslation();

	return (
		<section className="who-we-are">
			<h2>{t("HWA.title")}</h2>
			<p>
				{t("HWA.subtitle1")}
				<br></br>
				<br></br>
				{t("HWA.subtitle2")}
				<br></br>
				<br></br>
				{t("HWA.subtitle3")}
			</p>
		</section>
	);
}

export default WhoWeAre;
