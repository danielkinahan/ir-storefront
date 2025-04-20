"use client";

import React, { useRef, useEffect } from "react";

export function MainCarouselWrapper({ media }: { media: Array<{ url: string; alt?: string | null }> }) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = scrollContainerRef.current;

		const handleScroll = () => {
			if (container) {
				// Check if the user has scrolled to the end of the horizontal container
				const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth;

				if (isAtEnd) {
					// Scroll the page to the bottom
					window.scrollTo({
						top: document.body.scrollHeight, // Scroll to the bottom of the page
						behavior: "smooth",
					});
				} else if (container.scrollLeft === 0) {
					// Scroll the page to the top
					window.scrollTo({
						top: 0, // Scroll to the top of the page
						behavior: "smooth",
					});
				}
			}
		};

		const handleWheel = (event: WheelEvent) => {
			if (container) {
				// Prevent vertical scrolling and enable horizontal scrolling
				event.preventDefault();
				container.scrollBy({ left: event.deltaY * 3, behavior: "smooth" });
			}
		};

		if (container) {
			container.addEventListener("scroll", handleScroll);
			container.addEventListener("wheel", handleWheel); // Add wheel event listener
		}

		return () => {
			if (container) {
				container.removeEventListener("scroll", handleScroll);
				container.removeEventListener("wheel", handleWheel); // Clean up wheel event listener
			}
		};
	}, []);

	return (
		<div
			className="no-scrollbar relative overflow-x-auto scroll-smooth whitespace-nowrap"
			ref={scrollContainerRef}
		>
			<div className="flex">
				{media.map((image) => (
					<div key={image.url} className="inline-block w-[calc(100%/1.5)] max-w-[66.67vw] flex-shrink-0">
						<img src={image.url} alt={image.alt ?? ""} className="d-block w-100" />
						<div>
							<h3>{image.alt ?? "Slide"}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
