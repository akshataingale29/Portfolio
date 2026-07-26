# Akshata Ingale — Portfolio

Premium, dark, futuristic developer portfolio built with React 19, TypeScript, Vite, Tailwind CSS v4, Framer Motion, GSAP and Three.js (react-three-fiber).

## Stack
- **React 19 + TypeScript + Vite** — app shell, routing-free single page with smooth-scroll navigation
- **Tailwind CSS v4** — design tokens defined in `src/index.css` via `@theme`
- **Framer Motion** — entrance animations, scroll reveals, layout transitions
- **Three.js / @react-three/fiber** — interactive animated "network field" background (lazy-loaded)
- **lucide-react** — iconography

## Getting started
```bash
npm install
npm run dev      # start local dev server
npm run build    # type-check + production build
npm run preview  # preview the production build locally
```

## Structure
```
src/
  components/   All page sections (Hero, About, Skills, Projects, Experience, Education, Certifications, Resume, Contact, Footer, Navbar)
  three/        NetworkField.tsx – interactive 3D background
  data/         profile.ts – all resume content in one typed module
  hooks/        useActiveSection.ts – scroll-spy for the navbar
public/
  resume/       Akshata_Ingale_Resume.pdf
  images/       avatar.svg (illustrated), og-cover.svg/png
```

## Content
All resume content lives in `src/data/profile.ts` — update this single file to change any text across the site (skills, projects, experience, education, certifications, contact details).

## Notes
- The 3D background and Framer Motion are code-split into separate chunks and lazy-loaded so first paint stays fast.
- Respects `prefers-reduced-motion`.
- Resume PDF is served from `/public/resume` and used for both the embedded viewer and the download button.
