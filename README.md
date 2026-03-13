# PixelDew Landing Page

Modern SaaS-style landing page for PixelDew digital studio built with Next.js 14, Tailwind CSS, TypeScript, Framer Motion, and Midtrans checkout API.

## Features
- Pixel/retro-futuristic hero with floating particles and Dewbit mascot
- Pricing/package cards with add-to-cart
- Cart + checkout flow
- Midtrans Snap transaction API route (`/api/create-transaction`)
- Success page for post-payment status
- Simple orders dashboard (`/dashboard/orders`)

## Environment Variables
Copy `.env.example` to `.env.local` and fill values:

```bash
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_IS_PRODUCTION=false
NEXT_PUBLIC_MIDTRANS_CLIENT_KEY=
```

## Run Locally
```bash
npm install
npm run dev
```

## Deploy
Ready to deploy on Vercel.
