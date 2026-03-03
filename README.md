# POS Admin

Admin app for Tally POS: inventory management and sales reports. Uses the same Supabase project as `pos_project_inventory`.

## Stack

- **Next.js** 16 (App Router)
- **Tailwind CSS** 4
- **Supabase** (auth + database)

## Setup

1. Copy `.env.local.example` to `.env.local` and set your Supabase URL and anon key (same values as the main POS app).
2. Install dependencies: `npm install`
3. Run dev server: `npm run dev` (runs on **port 3001** so it can run alongside the main app on 3000)

## Routes

- `/` → redirects to `/inventory`
- `/login` → admin login (profiles with `role = 'admin'`)
- `/inventory` → manage products, categories, stock
- `/sales` → sales by period, charts, Excel export

## Linking from main app

Set `NEXT_PUBLIC_ADMIN_URL=http://localhost:3001` in the main app’s `.env.local` so the “Admin” link and inventory/reports redirects point to this app.
# pos_admin
