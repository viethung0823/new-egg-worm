// improve on mobile
let isPlaying = false;
let isMouseOnPlayArea = false;
let hasPlayed = false;
document.addEventListener("DOMContentLoaded", function (event) {
	const videoIntroduce = document.createElement("div");
	videoIntroduce.classList.add("container-fluid");
	videoIntroduce.classList.add("my-container");
	videoIntroduce.innerHTML = `
  <div class="row">
		<div id="active-circle" class="active-circle el-hidden"></div>
		<div class="col-md-12">
			<div class="video-wrapper">
			<iframe allow="autoplay" id="vimeoID" src="https://player.vimeo.com/video/658828604" class="embed-responsive-item w-100" frameborder="0"
			allowfullscreen></iframe>
			<iframe id="vimeoAutoID" class="embed-responsive-item w-100" src="https://player.vimeo.com/video/658828604?autoplay=1&muted=1&controls=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture"></iframe>
				<div onclick="playVideo()" id="playVimeoBtn" class="showreel-playbutton" onmouseenter="hoverDisplayActiveCircle()" onmouseleave="hoverOutHideActiveCircle()">
					<span class="circle"></span>
					<span class="text">PLAY</span>
				</div>
			</div>
		</div>
  </div>
  `;
	$("body").prepend(videoIntroduce);

	let mousePosX = 100,
		mousePosY = 100,
		mouseCircle = document.getElementById("active-circle");

	let delay = 6,
		revisedMousePosX = 0,
		revisedMousePosY = 0;

	function delayMouseFollow() {
		requestAnimationFrame(delayMouseFollow);

		revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
		revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

		mouseCircle.style.top = revisedMousePosY + "px";
		mouseCircle.style.left = revisedMousePosX + "px";
	}

	delayMouseFollow();

	document.onmousemove = (e) => {
		mousePosX = e.pageX;
		mousePosY = e.pageY;
	};

	// listen vimeo change state
	const iframe = document.getElementById("vimeoID");
	const player = new Vimeo.Player(iframe);

	player.on("play", function () {
		if (!hasPlayed) {
			document.getElementById("vimeoAutoID").remove();
		}
		isPlaying = true;
		hasPlayed = true;
		document.getElementById("playVimeoBtn").classList.add("el-hidden");
		document.getElementById("active-circle").classList.add("el-hidden");
	});

	player.on("pause", function () {
		isPlaying = false;
		if (isMouseOnPlayArea & hasPlayed) {
			document.getElementById("active-circle").classList.remove("el-hidden");
		} else {
			document.getElementById("playVimeoBtn").classList.remove("el-hidden");
		}
	});
});

function hoverDisplayActiveCircle() {
	isMouseOnPlayArea = true;
	if (!isPlaying) {
		document.getElementById("active-circle").classList.remove("el-hidden");
		document.getElementById("playVimeoBtn").classList.add("el-hidden");
	}
}

function hoverOutHideActiveCircle() {
	isMouseOnPlayArea = false;
	if (!isPlaying) {
		document.getElementById("active-circle").classList.add("el-hidden");
		document.getElementById("playVimeoBtn").classList.remove("el-hidden");
	}
}

function playVideo() {
	const iframe = document.getElementById("vimeoID");
	const player = new Vimeo.Player(iframe);
	player.getPaused().then(function (paused) {
		if (paused) {
			player.play();
		} else {
			player.pause();
		}
	});
}
