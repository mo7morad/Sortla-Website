# Sortla Website

Marketing site for **Sortla** — an on-device AI waste-sorting station built for the Apple Developer Academy Bali.

Built with Vite + React 19 + TypeScript + Tailwind CSS. The layout follows the `sortla — ch5` Figma design (landing-page 01).

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

```
src/
  App.tsx                  page composition
  index.css                design tokens + shared type scale
  components/
    Navbar.tsx
    HeroSection.tsx
    HowItWorksSection.tsx     three-step onboarding
    ThreeBinsSection.tsx      organic / residual / recyclable demo
    StatsDashboardSection.tsx annotated stats + dashboard mock
    TechSection.tsx
    FAQSection.tsx
    CTASection.tsx
    ContactModal.tsx
    Footer.tsx
```

Type sizes, colors, and spacing are centralized in `tailwind.config.js` and the `@layer components` block in `src/index.css` — change them there rather than per-component.
