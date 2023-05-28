import React, {useRef, useState} from "react";
import ReactPlayer from "react-player";
import "./index.css";

function AnimatedVideo() {
	const playerRef = useRef(null); // create a reference to the player
	const [playing, setPlaying] = useState(true);

	const handleEnded = () => {
		setPlaying(false); // set playing state to false
		const currentTime = playerRef.current.getCurrentTime(); // get the current time of the video
		playerRef.current.seekTo(currentTime - 1); // seek the player to the last frame
	};

	return <ReactPlayer ref={playerRef} playing={playing} onEnded={handleEnded} className="VideoPlayer backBg" muted url="https://player.vimeo.com/video/830524731" />;
}

export default AnimatedVideo;
