This is a [Next.js](https://nextjs.org/) starter project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Authentication

[Clerk](https://clerk.com/) is used for authentication.

### Setup

Clerk needs a few environment variables to work. Create a `.env.local` file in the root of the project and add the following:

```bash
# Clerk config
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

## Database

[Prisma](https://www.prisma.io/) is used for managing the database migrations and as an ORM

### Setup

In the .env file, add the following:

```bash
DATABASE_URL="..."
```

The database URL should be a connection string to your database. Prisma supports different databases, but is set up
to use SQLite by default. To use a different database, update the `datasource` field in `prisma/schema.prisma`.

## User Tokens

User tokens are used to authenticate users with different services. Users can create and manage their own tokens,
managed in the /settings/tokens page.

Thesetokens are stored in the database and are encrypted. The encryption key is stored in the .env file:
```bash
TOKEN_ENCRYPTION_KEY="YOUR_ENCRYPTION_KEY"
```

To create a new encryption key, you can use node's `crypto` module:

```javascript
const crypto = require('crypto');
const key = crypto.randomBytes(32).toString('hex');
console.log(key);
```

## Included Components

- Most of the components from [ui.shadcn.com](https://ui.shadcn.com/) are included in the `src/components/ui` directory
- The [lucide-react](https://lucide.dev/guide/packages/lucide-react) package is included for icons. Icons should be included individually, to support tree-shaking
- A theme toggle component for toggling between light, dark, and system themes
- A simple sticky nav bar component

## Running the App

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
