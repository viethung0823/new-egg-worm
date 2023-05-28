/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect} from "react";
import $ from "jquery";

function OurClients() {
	useEffect(() => {
		const $element1 = $(".our-client__content");
		const $element2 = $(".content .gallery.gallery-section-wrapper");
		$element1.append($element2);
		$('section[data-section-id="6472e1519b91f935e91728eb"]').remove();
	}, []);
	return (
		<section className="our-client">
			<div className="our-client__content">
				<h2 className="our-client__title">OUR CLIENTS</h2>
			</div>
		</section>
	);
}

export default OurClients;
