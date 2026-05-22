# Brand logos

Add customer or partner logos here for the **“Brands Actively Using Riviso”** section on the home page.

## Steps

1. **Add your image** to this folder (e.g. `acme-corp.svg`, `contoso.png`).
2. **Register it** in `src/lib/brand-logos.ts` (file name must match exactly, including spaces and capitals):
   ```ts
   { id: "acme", name: "Acme Corp", file: "acme-corp.png" },
   ```
3. Save and refresh the site — the carousel picks it up automatically.

## Guidelines (Jasper-style bar)

- Prefer **SVG** or **PNG** on a transparent background
- Target width about **120–200px** (height ~24–40px)
- Logos are shown in **monochrome black** via CSS; color logos are fine
- Use lowercase **kebab-case** file names (`my-brand.svg`)

## Replace placeholders

Default `*.svg` files here are text placeholders. Replace each file with your real logo (keep the same file name), or change the `file` field in `brand-logos.ts`.
