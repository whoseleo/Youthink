# Youthink - Editing Guide

## Quick Start
This is a Next.js 15 app with TypeScript, Prisma, and Tailwind CSS.

## Key Files to Edit

### Styling & Branding
- `src/app/globals.css` - Global styles, colors, CSS variables
- `tailwind.config.ts` - Tailwind theme (colors, fonts, etc.)
- `public/logo.png` - Main logo
- `src/app/icon.png` - Favicon
- `public/favicon.png` - Favicon backup

### Pages
- `src/app/(site)/page.tsx` - Homepage
- `src/app/(auth)/login/page.tsx` - Login page
- `src/app/(auth)/signup/page.tsx` - Signup page
- `src/app/(site)/home/page.tsx` - Dashboard after login
- `src/app/(site)/opportunities/` - Opportunities pages
- `src/app/(site)/profile/` - Profile pages
- `src/app/(site)/messages/` - Messages
- `src/app/(site)/network/` - Network/connections

### Layouts & Components
- `src/app/layout.tsx` - Root layout (fonts, metadata)
- `src/components/layout/site-header.tsx` - Header
- `src/components/layout/site-footer.tsx` - Footer
- `src/components/auth/` - Login/signup forms
- `src/components/ui/` - Reusable UI components

### Backend/Logic
- `src/actions/auth.ts` - Authentication logic
- `src/lib/auth.ts` - Auth utilities
- `src/lib/prisma.ts` - Database client
- `prisma/schema.prisma` - Database schema
- `.env` - Environment variables

## How to Edit

### For simple content changes
Most text is in the page files directly. Look for the text you want to change and edit it.

### For translations
- `src/lib/i18n.ts` - English, French, Spanish translations

### To restart after changes
```bash
rm -rf .next
npm run dev
```

## File Locator
See `FILE_LOCATOR.md` for a complete file map.
