# PixelDew Landing + Stripe Checkout

Modern SaaS landing page for PixelDew built with Next.js 14 App Router, TypeScript, Tailwind CSS, Framer Motion, and Stripe Checkout.

## Pages
- `/` landing page with hero + pricing preview
- `/pricing` package purchase page
- `/checkout` starter page leading users to pricing
- `/success` Stripe payment confirmation page
- `/api/stripe/create-checkout` API route for Stripe Checkout session creation

## Environment Variables
Copy `.env.example` to `.env.local` and fill values:

```bash
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Local Development
```bash
npm install
npm run dev
```

## Deployment
Ready for Vercel serverless deployment.
