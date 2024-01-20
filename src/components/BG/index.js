import "./24.1.19.css";
import React, {useEffect} from "react";
import $ from "jquery";
import {useTranslation} from "react-i18next";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {dataTimeline} from "./dataTimeline";

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

		// rando size timeline
		if (window.matchMedia("(max-width: 768px)").matches) {
			console.log("run");
			document.querySelectorAll(".vertical-timeline-element-content li").forEach(function (element) {
				var max = element.offsetWidth - element.childNodes[1].offsetWidth - 32;

				if (element.childNodes[1].offsetWidth > element.offsetWidth * 0.72) {
					max = 0;
				}
				element.childNodes[0].style.width = max + "px";
			});
		} else {
			document.querySelectorAll(".vertical-timeline-element-content li").forEach(function (element) {
				var max = element.offsetWidth - element.childNodes[1].offsetWidth - 60;
				var randomNum = Math.floor(Math.random() * max);
				element.childNodes[0].style.width = randomNum + "px";
			});
		}

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const {t} = useTranslation();

	return (
		<div id="our-journal">
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
					<h2 className="title1">OUR JOURNEY</h2>``
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>{t("UH.text1")}</span>
					</p>
					{t("UH.text2") && (
						<p className="gl-state-intxt">
							<span className="gl-state-line"></span>
							<span>{t("UH.text2")}</span>
						</p>
					)}
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>{t("UH.text3")}</span>
					</p>
					{t("UH.text4") && (
						<p className="gl-state-intxt">
							<span className="gl-state-line"></span>
							<span>{t("UH.text4")}</span>
						</p>
					)}
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>{t("UH.text5")}</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>{t("UH.text6")}</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>{t("UH.text7")}</span>
					</p>
					<p className="gl-state-intxt">
						<span className="gl-state-line"></span>
						<span>{t("UH.text8")}</span>
					</p>
				</div>
			</section>

			<VerticalTimeline className="eggwrom-timeline" lineColor={"#fff"}>
				{Object.entries(dataTimeline).map(([year, events]) => (
					<VerticalTimelineElement>
						<h3 className="title">{year}</h3>
						<ul>
							{events.map((event) => (
								<li>
									<div className="item-line"></div>
									<p>{event}</p>
								</li>
							))}
						</ul>
					</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
}

export default BG;
