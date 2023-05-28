/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import $ from "jquery";

function OurBusiness() {
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

	return (
		<section className="our-business">
			<header className="our-business__header">
				<h2 className="our-business__title">OUR BUSINESS</h2>
				<div className="our-business__detail">
					<h3 className="our-business__title2">
						<span>How we work</span>
					</h3>
					<p className="our-business__text">
						We thrive at the intersection of business and creative, collaborating with our partners to truly understand their needs, motivations, challenges, and vision. Through in-depth analysis and exploration, we uncover valuable insights and opportunities. Our end-to-end strategy comes with clearly defined action items whilst providing a roadmap for success. And when it
						comes to execution, we're here to provide the solutions you need to bring your vision to life.
					</p>
				</div>
			</header>
			<section className="our-creative">
				<h3 className="our-services__title">OUR SERVICES</h3>
				<ul className="our-business__buttons">
					<li className="our-business__button our-business__button--1">
						<a>
							<div className="grad"></div>
							<div className="label">
								<span>STRATEGY</span>
							</div>
							<div className="hover">
								<span>Our dynamic network of strategists, carefully curated for each client and brief, come together under our dedicated strategy team to create extraordinary experiences and deliver exceptional results.</span>
							</div>
						</a>
					</li>
					<li className="our-business__button our-business__button--2">
						<a>
							<div className="grad"></div>
							<div className="label">
								<span>CREATION</span>
							</div>
							<div className="hover">
								<span>We are passionate about designing authentic and unforgettable experiences that resonate with your brand and business on a deep level. Our goal is to create moments that leave a lasting impact, forging a genuine connection between your audience and your company or brand.</span>
							</div>
						</a>
					</li>
					<li className="our-business__button our-business__button--3">
						<a>
							<div className="grad"></div>
							<div className="label">
								<span>AMPLIFICATION</span>
							</div>
							<div className="hover">
								<span>With strategic amplification, we make your message stand out and deeply resonate with your audience amidst all the clutter and noise. By crafting impactful channels using our own tools and across our extensive network, we elevate your voice to create a lasting connection with your target audience.</span>
							</div>
						</a>
					</li>
				</ul>
				<div className="rewards">
					<div className="rewards__left">
						<div className="rewards__left-inner">
							<p>Our approach is tailored to meet your every need, providing dedicated support from strategy development to message amplification, ultimately ensuring your message resonates deeply with your audience.</p>
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
