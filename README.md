## Working demo
https://duong-shop.vercel.app/ or https://tymex-interview-frontend-duongnlbn-thompsonpaynes-projects.vercel.app/

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For test:
```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

## What's in here
- Listing products with "load more" function.
- Changing criteria automatically triggers products filtering.
- Criteria filter retains after page reloads.
- Debounce pattern applied for category filter and price range filter.
- Skeleton loading during intial page load.
- Data invalidates after 60 seconds (will trigger fetching new data after 60s).
- Custom components ui with shadcn ui.
- Responsive for mobile, tablet, desktop.
- Unit tests: not looking good 😔

## Deploy on Vercel
This project is deployed using Vercel.

## Issues:
- Fetch data from local is quicker than production even though it's reading from static db.json file. Maybe issue due to caching behavior inconsitency between local and prod env? 🤔
- Utilize server code to filter data so I haven't figured out how to properly show loading indicator on client yet. Using tanstack query or SWR could resolve this, and also handle the data caching, but that would be extra libs to install.
- Setting up unit test is absolute insanity.
- Deploying with Vercel seems a bit unstable, domain isn't accessible at times.
