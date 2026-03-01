# Kacper Dula Portfolio

Personal portfolio built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000`.

## Contact form (real email delivery)

This project uses Formspree so the form works on static hosting (GitHub Pages).

1. Create a form at [https://formspree.io](https://formspree.io)
2. Copy your endpoint (example: `https://formspree.io/f/xxxxabcd`)
3. Set it in local env:

```bash
cp .env.example .env.local
# then set NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

## Deploy to GitHub Pages

This repo includes `.github/workflows/deploy-pages.yml`.

1. Push this project to GitHub on branch `main`
2. In GitHub repo settings, set Pages source to **GitHub Actions**
3. Add repository secret:
   - Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: your Formspree endpoint
4. Push to `main` (or run workflow manually)

The workflow builds a static export and deploys `out/` to GitHub Pages.
