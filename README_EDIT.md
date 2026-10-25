# Quick Edit Guide for Youthink

## To edit like a static site
I've added `public/index.html` which redirects to home. But since this is Next.js, you'll edit `.tsx` files in `src/`.

## Most Common Edits

| What to change | File |
|---|---|
| Homepage text/sections | `src/app/(site)/page.tsx` |
| Colors/logo/fonts | `src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx` |
| Header/navigation | `src/components/layout/site-header.tsx` |
| Login/Signup pages | `src/app/(auth)/login/page.tsx`, `src/app/(auth)/signup/page.tsx` |
| Footer | `src/components/layout/site-footer.tsx` |
| Button styles | `src/app/globals.css` or `tailwind.config.ts` |

## Testing Changes
After editing, the dev server auto-reloads. If something breaks:
```bash
rm -rf .next
npm run dev
```
