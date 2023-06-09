import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import "./index.css";
import {useTranslation} from "react-i18next";
import $ from "jquery";

function AnimatedVideo() {
	const playerRef = useRef(null); // create a reference to the player
	const [playing, setPlaying] = useState(true);
	const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
	const {i18n} = useTranslation();
	const [isActiveMenu, setIsActiveMenu] = useState(false);

	const handleClick = () => {
		$('body').toggleClass('position-fixed');
		const menuOverlay = $(".menu-overlay");
		menuOverlay.toggleClass("active");
		menuOverlay.toggleClass("motion");
		const menu = $(".menu");
		menu.toggleClass("active");
		menu.toggleClass("motion");
		setIsActiveMenu(!isActiveMenu);
	};

	function handleEnded(event) {
		if (event.playedSeconds >= 4.5) {
			setPlaying(false); // set playing state to false
		}
	}

	const handleLanguageChange = () => {
		const newLanguage = language === "en" ? "jp" : "en";
		setLanguage(newLanguage);
		localStorage.setItem("language", newLanguage);
		i18n.changeLanguage(newLanguage);
	};

	return (
		<div className="relative-pos">
			<ReactPlayer ref={playerRef} playing={playing} onProgress={handleEnded} className="VideoPlayer backBg" muted url="https://player.vimeo.com/video/830524731" playsinline></ReactPlayer>
			<div className="switch-wrapper">
				<div className="switch">
					<input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" defaultChecked={language === "jp"} onClick={handleLanguageChange}></input>
					<label htmlFor="language-toggle"></label>
					<span className="on">EN</span>
					<span className="off">JP</span>
				</div>
			</div>
			<div id="hamburgerMenu" onClick={handleClick} className={`hamburger-button ${isActiveMenu ? "active" : ""}`}>
				<span></span>
				<span></span>
			</div>
			<div class="menu-wrapper">
				<div class="menu-overlay"></div>
				<div class="menu">
					<div class="menu-inner">
						<div class="menu-bg"></div>
						<div class="menu-logo"></div>
						<ul class="footer-menu">
							<li class="footer-menu__item">
								<a href="https://www.eggworm.jp/our-history" class="">
									WHO WE ARE
								</a>
							</li>
							<li class="footer-menu__item ">
								<a href="/" class="">
									OUR SERVICES
								</a>
							</li>
							<li class="footer-menu__item ">
								<a href="/" class="">
									WORKS
								</a>
							</li>
							<li class="footer-menu__item ">
								<a href="/" class="">
									CONTACT
								</a>
							</li>
						</ul>
						<div class="footer__copyright">
							© <span class="footer__year">2023</span> Eggworm inc. All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AnimatedVideo;
