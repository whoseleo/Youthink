# Quick Index - Edit These Files

## Pages (what users see)
| Page | File |
|---|---|
| Homepage | `src/app/(site)/page.tsx` |
| Login | `src/app/(auth)/login/page.tsx` |
| Signup | `src/app/(auth)/signup/page.tsx` |
| Dashboard/Home | `src/app/(site)/home/page.tsx` |
| Opportunities | `src/app/(site)/opportunities/page.tsx` |
| Profile | `src/app/(site)/profile/page.tsx` |
| Messages | `src/app/(site)/messages/page.tsx` |

## Design/Styles
| What | File |
|---|---|
| Global styles & colors | `src/app/globals.css` |
| Tailwind config | `tailwind.config.ts` |
| Fonts & metadata | `src/app/layout.tsx` |
| Logo | `public/logo.png` or `src/components/brand/logo.tsx` |

## Components
| What | File |
|---|---|
| Header | `src/components/layout/site-header.tsx` |
| Footer | `src/components/layout/site-footer.tsx` |
| Auth forms | `src/components/auth/` |

## Backend
| What | File |
|---|---|
| Auth logic | `src/actions/auth.ts` |
| Database schema | `prisma/schema.prisma` |
| Auth helpers | `src/lib/auth.ts` |

**Note:** Ignore `node_modules/`, `.next/`, `html-site/` folders. Only edit files in `src/`, `prisma/`, `public/`, and config files at root.
