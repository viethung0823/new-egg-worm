/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import $ from "jquery";

function Footer() {
	function scrollToTop() {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}

	return (
		<div className="footer-wrapper">
			<footer className="footer">
				<div className="footer-inner">
					<div className="footer__inner2">
						<div className="footer-menu2"></div>
						<div className="footer__policy">
							<a href="https://www.linkedin.com/company/eggworm-k.k." target="_blank" title="TWITTER" className="footer-twitter-link">
								Linkedin
							</a>{" "}
							<a href="https://www.instagram.com/eggworm_japan/" target="_blank" title="TWITTER" className="footer-twitter-link">
								Instagram
							</a>{" "}
							<a href="https://www.facebook.com/eggworm" target="_blank" title="TWITTER" className="footer-twitter-link">
								Facebook
							</a>{" "}
							<a href="https://twitter.com/eggworm" target="_blank" title="TWITTER" className="footer-twitter-link">
								Twitter
							</a>{" "}
						</div>
					</div>
					<div className="footer__inner3">
						<div className="footer__copyright">
							© <span className="footer__year">2023</span> EGGWORM inc. All Rights Reserved.
						</div>{" "}
						<a className="footer__circle" onClick={scrollToTop}></a>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
