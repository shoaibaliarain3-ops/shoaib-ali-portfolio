# Shoaib Ali | Portfolio

A modern, animated personal portfolio website for **Shoaib Ali** — AI & Web Developer.

Built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## Features

- 🎯 Modern dark developer aesthetic
- 💎 Glassmorphism + glowing elements
- ✨ Smooth scroll animations with Framer Motion
- 📱 Fully responsive (mobile, tablet, laptop, desktop)
- 🧠 Sections: Hero, About, Skills, Featured Projects, Web Applications, Contact, Footer
- 🎨 Easily editable data structure in `src/lib/data.ts`

## Tech Stack

- [Next.js](https://nextjs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)
- [Lucide React](https://lucide.dev)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Build

```bash
npm run build
npm run lint
```

## Project Structure

```
src/
  app/
    globals.css      # Global styles, theme, animations
    layout.tsx       # Root layout + SEO metadata
    page.tsx         # Main page composing all sections
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Skills.tsx
    Projects.tsx
    WebApplications.tsx
    Contact.tsx
    Footer.tsx
    GithubIcon.tsx
  lib/
    data.ts          # Projects, web apps, skills, socials (easy to edit)
    animations.ts    # Shared Framer Motion variants
```

## Customization

Edit `src/lib/data.ts` to update projects, web apps, skills, and social links.

Replace `public/profile.png` with your own profile photo.

## Deployment

Deploy to [Vercel](https://vercel.com/new):

```bash
vercel
```
