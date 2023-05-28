import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import "./index.css";

function AnimatedVideo() {
	const playerRef = useRef(null); // create a reference to the player
	const [playing, setPlaying] = useState(true);

	function handleEnded(event) {
		if (event.playedSeconds >= 4.5) {
			setPlaying(false); // set playing state to false
			document.body.classList.add("is-fv-finish");
		}
	}

	return (
		<div className="relative-pos">
			<ReactPlayer ref={playerRef} playing={playing} onProgress={handleEnded} className="VideoPlayer backBg" muted url="https://player.vimeo.com/video/830524731"></ReactPlayer>
			<div className="top-scroll"></div>
		</div>
	);
}

export default AnimatedVideo;
