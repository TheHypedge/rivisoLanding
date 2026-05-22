# Riviso brand logo (site identity)

Put **your** Riviso logo files here. They are used for the header, favicon, footer, and Open Graph — not the customer logos in `public/logos/brands/`.

## Required files

| File | Purpose | Recommended size |
|------|---------|------------------|
| **`logo.png`** | Navbar, mega menu | Transparent PNG, ~140–200px wide × ~32–40px tall |
| **`icon.png`** | Browser tab favicon, PWA | Square PNG ideal (**512×512**); can duplicate `logo.png` until you add a square mark |

## Optional files

| File | Purpose |
|------|---------|
| **`logo-dark.png`** | Footer on dark background (light/white wordmark). Falls back to `logo.png` if missing. |
| **`apple-icon.png`** | iOS home screen, **180×180**. Falls back to `icon.png`. |
| **`og-image.png`** | Social share preview, **1200×630**. |

## Favicon (two options)

**Option A — recommended:** Only add `icon.png` here. `src/app/layout.tsx` already points metadata icons to `/logos/riviso/icon.png`.

**Option B — Next.js file convention:** Copy `icon.png` to:

- `src/app/icon.png` (favicon)
- `src/app/apple-icon.png` (optional, 180×180)

Next.js will pick these up automatically in addition to metadata.

## After updating `logo.png`

Regenerate tab icons (favicon + `icon.png`):

```bash
npm run generate:favicons
```

Then hard-refresh the browser (Cmd+Shift+R) — favicons are heavily cached.

Paths for components are in `src/lib/site-logo.ts`.
