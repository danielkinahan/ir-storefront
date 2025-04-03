"use client";

import { type MouseEventHandler } from "react";

const sharedArrowClasses =
	"absolute top-1/2 -translate-y-[60%] cursor-pointer text-black text-[25px] opacity-75 w-[15px] h-[15px]";

export function CarouselNextArrow(props: { onClick: MouseEventHandler<HTMLButtonElement> }) {
	const { onClick } = props;

	return (
		<button className={`${sharedArrowClasses} right-[-25px]`} onClick={onClick}>
			{">"}
		</button>
	);
}

export function CarouselPrevArrow(props: { onClick: MouseEventHandler<HTMLButtonElement> }) {
	const { onClick } = props;

	return (
		<button className={`${sharedArrowClasses} left-[-25px]`} onClick={onClick}>
			{"<"}
		</button>
	);
}
