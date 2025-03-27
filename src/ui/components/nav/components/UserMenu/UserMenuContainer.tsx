import { UserMenu } from "./UserMenu";
import { CurrentUserDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export async function UserMenuContainer() {
	const { me: user } = await executeGraphQL(CurrentUserDocument, {
		cache: "no-cache",
	});

	if (user) {
		return <UserMenu user={user} />;
	} else {
		return (
			<LinkWithChannel
				href="/login"
				className="inline-flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-neutral-500 hover:text-neutral-700"
			>
				Account
			</LinkWithChannel>
		);
	}
}
