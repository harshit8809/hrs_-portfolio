# Harshit Kumar — Portfolio

A modern, animated portfolio built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## Design
- Dark theme with deep navy/charcoal background
- Electric violet accent palette (`#7c6aff`)
- Animated particle canvas background
- Scroll-triggered animations via Framer Motion
- Syne (display) + Space Mono (code) typography
- Responsive for desktop and mobile

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animations)

## Sections
1. **Hero** — Name, role, description, CTA buttons, stats
2. **Skills** — Animated chip grid of all technical skills
3. **Experience** — Timeline cards for all 3 roles
4. **Projects** — Feature cards with tags and highlights
5. **Contact** — Email + social links with glow effect

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

Deploy easily to **Vercel** — just push to GitHub and connect the repo at [vercel.com](https://vercel.com).

```bash
# Or via Vercel CLI
npx vercel --prod
```

## Customization
- Update contact info in `components/Hero.tsx` and `components/Contact.tsx`
- Add/remove skills in `components/Skills.tsx`
- Edit experience bullets in `components/Experience.tsx`
- Add new projects in `components/Projects.tsx`
