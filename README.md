# ir-storefront

A website for ceramics. This repo is the frontend for a saleor backend. It uses Next.js 14 and GraphQL.

## Quickstart

Copy environment variables from `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and set `NEXT_PUBLIC_SALEOR_API_URL` to your Saleor GraphQL endpoint URL, e.g., `https://example.saleor.cloud/graphql/`.

Then, [install `pnpm`](https://pnpm.io/installation) and run the following command to install all dependencies in the repo:

```bash
pnpm i
```

## Payments

Currently, Saleor Storefront supports payments via the [Saleor Adyen App](https://docs.saleor.io/docs/3.x/developer/app-store/apps/adyen). To install and configure the payment app go to the "Apps" section in the Saleor Dashboard (App Store is only available in Saleor Cloud).

> WARNING:
> To configure the Adyen App, you must have an account with [Adyen](https://www.adyen.com/).

## Development

To start the development server, run the following:

```bash
pnpm dev
```

The app is now running at `http://localhost:3000`.

> NOTE:
> Saleor Storefront is a Next.js app. In case you are not familiar with Next.js, we recommend you to read the [Next.js documentation](https://nextjs.org/docs) (make sure you've selected "Using App Router" in the sidebar).

#### GraphQL queries and mutations:

After altering or creating new GraphQL queries in `gql` folder, you need to run the following command to generate types and javascript queries:

```bash
pnpm run generate
```

### Preview content changes instantly (Draft Mode)

Visit `http://{your-host}/api/draft` to enable cookies that disable caching to preview catalog and content changes instantly. [Learn more about the Draft Mode in Next.js docs.](https://nextjs.org/docs/app/building-your-application/configuring/draft-mode)

### TODO

-[ ] Navbar items are text, commas between each -[ ] Footer is flat, with text links seperated by commas alligned left -[ ] Footer right side is land acknowledgement -[ ] Landing page is a large slide show with nav arrows
