import React from "react";
import {useTranslation} from "react-i18next";

function HomeInfo() {
	const {t, i18n} = useTranslation();

	return (
		<section className="home-info">
			<h2 className="home-info__title">{t("CI.title")}</h2>
			<div className="home-info-content">
				<dl>
					<dt>{t("CI.companyName")}</dt>
					<dd>{t("CI.companyNameValue")}</dd>
					<dt>{t("CI.CEO")}</dt>
					<dd>{t("CI.CEOValue")}</dd>
					<dt>{t("CI.date")}</dt>
					<dd>{t("CI.dateValue")}</dd>
				</dl>
			</div>
			<div className="home-info-content">
				<dl>
					{i18n.language === "jp" && (
						<>
							<dt>{t("CI.startingCapital")}</dt>
							<dd>{t("CI.startingCapitalValue")}</dd>
						</>
					)}
					<dt>{t("CI.address")}</dt>
					<dd>
						<span className="home-info__address">{t("CI.addressValue")}</span>{" "}
						<a href="https://goo.gl/maps/FamY43u1SFePyUzb8?coh=178571&entry=tt" target="_blank" className="home-info__googlemap-link">
							<div className="text">
								Google Map<span className="line"></span>
							</div>
						</a>
					</dd>
					<dt>{t("CI.phoneNumber")}</dt>
					<dd>{t("CI.phoneNumberValue")}</dd>
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
