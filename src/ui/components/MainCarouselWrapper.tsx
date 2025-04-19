"use client";

import React, { useRef, useEffect } from "react";
import Slider from "react-slick";

export function MainCarouselWrapper({ media }: { media: Array<{ url: string; alt?: string | null }> }) {
	const sliderRef = useRef<Slider | null>(null);

	const settings = {
		dots: true,
		infinite: false,
		speed: 400,
		accessibility: true,
		slidesToShow: 1.5,
		arrows: false,
		draggable: true,
		swipe: true,
	};

	useEffect(() => {
		const carouselElement = document.querySelector(".carousel-wrapper");
		if (!carouselElement) return;

		const handleWheel = (event: Event) => {
			const wheelEvent = event as WheelEvent; // Cast the event to WheelEvent
			if (!sliderRef.current) return;

			// Prevent the default page scroll behavior
			wheelEvent.preventDefault();

			if (wheelEvent.deltaY > 0) {
				// Scroll down, go to the next slide
				sliderRef.current.slickNext();
			} else {
				// Scroll up, go to the previous slide
				sliderRef.current.slickPrev();
			}
		};

		carouselElement.addEventListener("wheel", handleWheel, { passive: false });

		return () => {
			carouselElement.removeEventListener("wheel", handleWheel);
		};
	}, []);

	return (
		<div className="carousel-wrapper">
			<Slider ref={sliderRef} {...settings}>
				{media.map((image) => (
					<div key={image.url} className="relative">
						<img src={image.url} alt={image.alt ?? ""} className="d-block w-100" />
						<div>
							<h3>{image.alt ?? "Slide"}</h3>
						</div>
					</div>
				))}
			</Slider>
		</div>
	);
}
