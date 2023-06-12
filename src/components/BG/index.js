import "./index.css";
import React, {useEffect} from "react";
import $ from "jquery";
import {useTranslation} from "react-i18next";

function BG() {
	useEffect(() => {
		const imgs = document.querySelectorAll(".gl-state-copy");
		const imgWidth = imgs[0].offsetWidth;
		const whiteBg = document.querySelector(".gl-state-white");
		const texts = document.querySelectorAll(".gl-state-intxt");
		let currentX = 0;
		var timer = null;

		// config variables
		let direction = -1; // 1 for moving right, -1 for moving left
		const defaultFrame = 10;
		const defaultSpeed = 1; // 0.5 -> 5
		let currentSpeedImg = 0.8;
		let delayX = 0; // 0 - 40
		let hasRun = false;

		// main functions
		function movementFrame() {
			currentX += direction * currentSpeedImg;

			if (currentX > window.innerWidth) {
				currentX = (-imgWidth * 98) / 100;
			}

			if (currentX < -imgWidth) {
				currentX = window.innerWidth;
			}

			imgs[0].style.transform = `matrix(1, 0, 0, 1, ${currentX + delayX}, 0)`;
			imgs[1].style.transform = `matrix(1, 0, 0, 1, ${currentX}, 0)`;
		}

		// utilize functions
		var getScrollAmount = (function (settings) {
			settings = settings || {};

			var lastPos,
				newPos,
				timer,
				delta,
				delay = settings.delay || 20; // in "ms" (higher means lower fidelity )

			function clear() {
				lastPos = null;
				delta = 0;
			}

			clear();

			return function () {
				newPos = window.scrollY;
				if (lastPos != null) {
					// && newPos < maxScroll
					delta = newPos - lastPos;
				}
				lastPos = newPos;
				clearTimeout(timer);
				timer = setTimeout(clear, delay);
				return delta;
			};
		})();

		setInterval(movementFrame, defaultFrame);

		function mapValue(oldValue, oldMin, oldMax, newMin, newMax) {
			const oldRange = oldMax - oldMin;
			const newRange = newMax - newMin;
			const newValue = ((oldValue - oldMin) * newRange) / oldRange + newMin;

			return newValue;
		}

		function resetDefaultSpeed() {
			currentSpeedImg = defaultSpeed;
		}

		function resetDelayXTo0() {
			const intervalResetDelayX = setInterval(() => {
				if (delayX * -direction > 0) {
					delayX -= 0.05 * -direction;
				} else {
					clearInterval(intervalResetDelayX);
					delayX = 0;
				}
			}, 1);
		}

		function isInView(element) {
			const rect = element.getBoundingClientRect();
			return rect.top * 1.2 <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom * 1.5 >= 0;
		}

		function fadeInMoving() {
			let y = 0;
			const fadeInInterval = setInterval(() => {
				if (y === 101) {
					clearInterval(fadeInInterval);
				} else {
					y += 1;
				}
				whiteBg.style.transform = `translate(0%, ${y}%) matrix(1, 0, 0, 1, 0, 0)`;
			}, 5);
		}

		function onScroll() {
			const scrollAmount = getScrollAmount();
			if (scrollAmount !== 0) {
				direction = -scrollAmount / Math.abs(scrollAmount);
			}
			if (!hasRun) {
				hasRun = true;
				fadeInMoving();
				texts?.forEach((text) => {
					text?.classNameList?.add("fadeInBottom");
				});
			}
			const newSpeed = mapValue(Math.abs(scrollAmount), 1, 100, 2, 5);
			delayX = mapValue(Math.abs(scrollAmount), 20, 100, 40, 60) * -direction;
			currentSpeedImg = newSpeed; // img goes faster

			if (timer !== null) {
				clearTimeout(timer);
			}
			timer = setTimeout(function () {
				resetDefaultSpeed();
				resetDelayXTo0();
			}, 150);
		}

		window?.addEventListener(
			"scroll",
			function () {
				onScroll();
			},
			false,
		);
		const $element1 = $(".container-fluid.my-container");
		const $element2 = $("#gl-statement");
		onScroll();
		$element2.after($element1);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const {t} = useTranslation();

	return (
		<>
			<section id="gl-statement">
				<div className="gl-state-copyset">
					<div className="gl-state-copy">
						<img src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/components/BG/ourHistory.svg" alt="logo"></img>
					</div>
				</div>
				<div className="gl-state-copyset">
					<div className="gl-state-copy">
						<img src="https://raw.githubusercontent.com/kunsansang/new-egg-worm/main/src/components/BG/ourHistoryFill.svg" alt="logo"></img>
					</div>
				</div>
				<div className="gl-state-white"></div>
				<div className="gl-statement-txt">
					<h2 className="title1">OUR HISTORY</h2>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>Founded in 2010, we embarked on a mission to redefine the events industry in Japan. Our goal was to create immersive experiences where every detail mattered, leaving a lasting impression on people's memories. </span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>Driven by our passion, we pushed boundaries and overcame scepticism with the unwavering support of our friends and partners. They believed in our vision, transforming them into devoted fans and fostering deep connections. The unique and captivating aspect of our work lies in the carefully designed and orchestrated chaos.</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>From concepting mind-bending ideas to executing flawless experiences, we found exhilaration in every step of the journey. From concepting mind-bending ideas to negotiating contracts with talent and venues and programming to building out awe-inspiring spaces we love it all.</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>Along our path, we formed partnerships with influential events companies and as the stakes grew higher, we embraced the adventure whilst fearlessly exploring diverse concepts and spaces across Japan. Recognizing the significance of taking risks and the trust placed in us, this shared understanding forms the cornerstone of our longevity in the industry. We thrive in the face of challenges, drawing strength from the trust placed in us by companies and brands.</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>Amid the digital revolution, we harnessed social media and digital marketing, realising that traditional methods like flyers and posters were no longer effective. Our expertise in the digital realm allowed us to connect with a wider audience, revolutionising our approach to sponsorship and forming impactful partnerships. </span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>Resilience and flexibility became our hallmarks as we created extraordinary experiences in event spaces that became our dynamic canvases. Talkability was key as we designed moments that sparked conversations and kept the excitement alive long after the events concluded.</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>With our captivating energy, visuals and work ethic, brands and companies sought us out, wanting to know more. We eagerly embraced the challenge, expanding our expertise to encompass a diverse range of problem-solving solutions for our partners. This journey shaped us into masters of our craft, excelling in strategy, creation, and amplification. </span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>Trust is the foundation of our relationships, as many partners have stood by our side for over a decade. At EGGWORM, our passion lies in crafting extraordinary experiences that captivate hearts, stimulate minds, and ignite imaginations.</span>
					</p>
				</div>
			</section>
		</>
	);
}

export default BG;
