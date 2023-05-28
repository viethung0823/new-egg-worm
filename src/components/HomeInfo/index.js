import React from "react";

function HomeInfo() {
	return (
		<section className="home-info">
			<h2 className="home-info__title">COMPANY INFO</h2>
			<div className="home-info-content">
				<dl>
					<dt>会社名</dt>
					<dd>EGGWORM</dd>
					<dt>設　立</dt>
					<dd>2017年1月5日</dd>
					<dt>役　員</dt>
					<dd>三浦崇宏 / 福本龍馬</dd>
				</dl>
			</div>
			<div className="home-info-content">
				<dl>
					<dt>所在地</dt>
					<dd>
						<span className="home-info__address">
							〒106-0032<br></br>
							東京都港区六本木3-17-10<br></br>
							ROPPONGI DUPLEX TOWER 2F
						</span>{" "}
						<a href="https://www.google.co.jp/maps/place/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEGO/@35.6618393,139.7347131,17z/data=!3m1!4b1!4m5!3m4!1s0x60188bde13a2e35b:0x75721a8cac63193a!8m2!3d35.661835!4d139.7369018?hl=ja&amp;shorturl=1" target="_blank" className="home-info__googlemap-link">
							<div className="text">
								Google Map<span className="line"></span>
							</div>
						</a>
					</dd>
				</dl>
				<p className="home-info__text">
					外苑東通り沿いの階段か、ローソン横の<br></br>
					エレベータで2Fにお上がりください
				</p>
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
