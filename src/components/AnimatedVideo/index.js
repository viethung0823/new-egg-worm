import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import "./index.css";
import {useTranslation} from "react-i18next";

function AnimatedVideo() {
	const playerRef = useRef(null); // create a reference to the player
	const [playing, setPlaying] = useState(true);
	const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
	const {i18n} = useTranslation();

	function handleEnded(event) {
		if (event.playedSeconds >= 4.5) {
			setPlaying(false); // set playing state to false
			document.body.classList.add("is-fv-finish");
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
			<ReactPlayer ref={playerRef} playing={playing} onProgress={handleEnded} className="VideoPlayer backBg" muted url="https://player.vimeo.com/video/830524731"></ReactPlayer>
			<div className="top-scroll"></div>
			<div className="switch-wrapper">
				<div className="switch">
					<input id="language-toggle" className="check-toggle check-toggle-round-flat" type="checkbox" defaultChecked={language === "jp"} onClick={handleLanguageChange}></input>
					<label htmlFor="language-toggle"></label>
					<span className="on">EN</span>
					<span className="off">JP</span>
				</div>
			</div>
		</div>
	);
}

export default AnimatedVideo;
