# Marketing Promotions page: UI & LocalStorage

This is a mobile-responsive front-end build of a hypothetical Marketing/Promotions page of a company's admin platform. Users will see a listing of the company's current promotions (from mock data), and clicking on a current promotion will let you read its details. When the user clicks on the "Create Promotions" button, they will enter in details to create a new: Google ad, Facebook post, Twitter tweet, and e-mail. This will be saved in localStorage, so next time the user views the webpage, the new promotions will still be visible.

This is a [Next.js](https://nextjs.org)/React project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

CSS framework used is [Tailwind](https://tailwindcss.com).\
Some elements used are from [HeadlessUI](https://headlessui.com).\
Icons are from [HeroIcons](https://heroicons.com).

# System Dependencies

Node 18.18.2\
NPM 9.8.1

## Installation

```bash
npm install
```

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

In your browser, please open [http://localhost:3000/marketing](http://localhost:3000/marketing) to view the page.

The pages auto-update as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Running Linters

Check ES syntax, React code, and report/fix bugs.

### `npm run lint`

Will report and auto-fix issues

## Prettier Format Checker

Check code format such as single-quotes, comma-dangle, indentation, etc.

### `npm run format`

Will check format and auto-fix issues

### `npm run format:check`

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
