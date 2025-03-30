import { Cormorant_Garamond } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";
import { type ReactNode } from "react";
import { type Metadata } from "next";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";

const coromorantGaramond = Cormorant_Garamond({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="min-h-dvh bg-white">
			<body className={`${coromorantGaramond.className} min-h-dvh`}>
				{children}
				<DraftModeNotification />
			</body>
		</html>
	);
}
