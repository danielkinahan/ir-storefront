import * as Checkout from "@/lib/checkout";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export const CartNavItem = async ({ channel }: { channel: string }) => {
	const checkoutId = Checkout.getIdFromCookies(channel);
	const checkout = checkoutId ? await Checkout.find(checkoutId) : null;

	const lineCount = checkout ? checkout.lines.reduce((result, line) => result + line.quantity, 0) : 0;

	return (
		<LinkWithChannel
			href="/cart"
			className="inline-flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-neutral-500 hover:text-neutral-700"
			data-testid="CartNavItem"
		>
			<span>Cart{lineCount > 0 ? `(${lineCount})` : ""}</span>
			<span className="sr-only">
				{lineCount} item{lineCount !== 1 ? "s" : ""} in cart, view bag
			</span>
		</LinkWithChannel>
	);
};
