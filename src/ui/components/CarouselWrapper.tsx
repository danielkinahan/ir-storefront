"use client";

import React from "react";
import Slider from "react-slick";

export function CarouselWrapper({ media }: { media: Array<{ url: string; alt?: string | null }> }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 400,
		accessibility: true,
		adaptiveHeight: true, // Not sure about this one
	};
	return (
		<Slider {...settings}>
			{media.map((image) => (
				<div key={image.url} className="relative">
					<img src={image.url} alt={image.alt ?? ""} className="d-block w-100" />
					<div>
						<h3>{image.alt ?? "Slide"}</h3>
					</div>
				</div>
			))}
		</Slider>
	);
}
