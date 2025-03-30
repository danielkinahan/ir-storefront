import { Suspense } from "react";
import { UserMenuContainer } from "./components/UserMenu/UserMenuContainer";
import { CartNavItem } from "./components/CartNavItem";
import { NavLinks } from "./components/NavLinks";
import { MobileMenu } from "./components/MobileMenu";

export const Nav = ({ channel }: { channel: string }) => {
	return (
		<nav className="flex gap-4 italic lg:gap-6" aria-label="Main navigation">
			<ul className="ml-auto hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
				<NavLinks channel={channel} />
			</ul>
			<div className="flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
				<Suspense fallback={<div className="w-8" />}>
					<UserMenuContainer />
				</Suspense>
			</div>
			<div className="flex items-center">
				<Suspense fallback={<div className="w-6" />}>
					<CartNavItem channel={channel} />
				</Suspense>
			</div>
			<Suspense>
				<MobileMenu>
					<NavLinks channel={channel} />
				</MobileMenu>
			</Suspense>
		</nav>
	);
};
