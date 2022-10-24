This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Roadmap

### Requirements

1. Create a webpage with a perfect score for parameters - Performance, accessibility, best practices, and SEO. You can refer to the content from any website you want.
2. Create only the frontend for a CRUD with the following details:

- [ ] Lighthouse Scores

  - [x] SEO - 100
  - [x] Performance - 100
  - [ ] A11y - 96
  - [ ] Best Practices - 92

- [ ] Job Post Module

  - [x] Company (Link with Company data)
  - [x] Job Title
  - [x] Job Category
  - [x] Job Type (Full-Time, Part-Time etc.)
  - [x] Industry Type (Retail, IT etc.)
  - [x] Short Description
  - [ ] Job Description (file upload)
  - [x] Start date
  - [x] Pay rate

- [x] Company module

  - [x] Company name
  - [x] Company address
  - [x] Company email
  - [x] Company phone number

- [x] CRUDs' frontend with index pages
  - [x] list all entries
  - [x] action buttons to delete individual
  - [x] delete bulk entries
  - [x] forms to insert and edit entries

### More to work on

- [ ] UI Design
- [ ] Responsiveness
- [ ] Database
- [ ] PWA

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
