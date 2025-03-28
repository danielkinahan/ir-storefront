import edjsHTML from "editorjs-html";
import xss from "xss";
import { executeGraphQL } from "@/lib/graphql";
import { PageGetBySlugDocument , ProductListByCollectionDocument } from "@/gql/graphql";
import { ProductList } from "@/ui/components/ProductList";

const parser = edjsHTML();

export const metadata = {
	title: "Isabel Robertson",
	description:
		"Isabel Robertson is a multidisciplinary artist and designer based in Montreal, Quebec. Her work is inspired by the natural world and the beauty of the everyday.",
};

export default async function Home({ params }: { params: { channel: string } }) {
	const { page } = await executeGraphQL(PageGetBySlugDocument, {
		variables: { slug: "home" },
		revalidate: 60,
	});

	if (!page) {
		const data = await executeGraphQL(ProductListByCollectionDocument, {
			variables: {
				slug: "featured-products",
				channel: params.channel,
			},
			revalidate: 60,
		});

		if (!data.collection?.products) {
			return null;
		}

		const products = data.collection?.products.edges.map(({ node: product }) => product);

		return (
			<section className="mx-auto max-w-7xl p-8 pb-16">
				<h2 className="sr-only">Product list</h2>
				<ProductList products={products} />
			</section>
		);
	}

	const { title, content } = page;

	const contentHtml = content ? parser.parse(JSON.parse(content)) : null;

	return (
		<div className="mx-auto max-w-7xl p-8 pb-16">
			<h1 className="text-3xl font-semibold">{title}</h1>
			{contentHtml && (
				<div className="prose">
					{contentHtml.map((content) => (
						<div key={content} dangerouslySetInnerHTML={{ __html: xss(content) }} />
					))}
				</div>
			)}
		</div>
	);
}
