# Bernard Justin Dayao — Portfolio

A premium, SaaS-style portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (theme tokens in `src/styles/index.css`)
- Framer Motion for scroll reveals and micro-interactions
- React Hook Form + Zod for the contact form
- EmailJS for sending contact messages (add your service/template/public keys in `src/components/sections/Contact.tsx`)
- Lenis for smooth scrolling (auto-disabled when `prefers-reduced-motion` is set)
- React Helmet Async for per-page SEO/meta tags

## Structure

```
src/
  components/
    layout/     Navbar, Footer, SkipLink
    sections/   Hero, About, Skills, Projects, Experience, Education, Certifications, Contact
    ui/         Reusable primitives (Reveal, Badge, SectionHeading, ProjectCard)
  hooks/        useActiveSection, useSmoothScroll
  animations/   Shared Framer Motion variants
  constants/    Site copy and content data (single source of truth)
  types/        Shared TypeScript interfaces
  utils/        Zod validation schema
public/
  favicon.svg, robots.txt, sitemap.xml
```

## Before deploying

1. Add a real `resume.pdf` to `public/` (the "Download Resume" button links to `/resume.pdf`).
2. Fill in your EmailJS `serviceId`, `templateId`, and `publicKey` in `Contact.tsx`.
3. Swap the project card gradients for real screenshots if desired (`ProjectCard.tsx`).
4. Update `sitemap.xml` / `robots.txt` with your real production domain.

## Accessibility

- Skip-to-content link, semantic landmarks, visible focus rings
- `aria-label`s on icon-only buttons/links, `aria-invalid` + live error text on form fields
- Respects `prefers-reduced-motion` for both Lenis and CSS animations
