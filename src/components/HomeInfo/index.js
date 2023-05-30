import React from "react";
import {useTranslation} from "react-i18next";

function HomeInfo() {
	const {t} = useTranslation();

	return (
		<section className="home-info">
			<h2 className="home-info__title">{t("CI.title")}</h2>
			<div className="home-info-content">
				<dl>
					<dt>{t("CI.companyName")}</dt>
					<dd>EGGWORM K.K</dd>
					<dt>{t("CI.CEO")}</dt>
					<dd>Masaki Kawamura</dd>
					<dt>{t("CI.date")}</dt>
					<dd>2017年1月5日</dd>
				</dl>
			</div>
			<div className="home-info-content">
				<dl>
					<dt>{t("CI.address")}</dt>
					<dd>
						<span className="home-info__address">Higashi 1-4-6 1F, Shibuya-Ku, Tokyo</span>{" "}
						<a href="https://goo.gl/maps/FamY43u1SFePyUzb8?coh=178571&entry=tt" target="_blank" className="home-info__googlemap-link">
							<div className="text">
								Google Map<span className="line"></span>
							</div>
						</a>
					</dd>
					<dt>{t("CI.phoneNumber")}</dt>
					<dd>+81-3-6277-0087</dd>
				</dl>
			</div>
			<div className="home-contact">
				<a href="/contact/" className="" title="CONTACT">
					CONTACT
					<div className="arrow">
						<span></span>
					</div>
				</a>
			</div>
		</section>
	);
}

export default HomeInfo;
