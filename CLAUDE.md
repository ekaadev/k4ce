# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev        # Start development server at localhost:3000
bun build      # Production build
bun lint       # Run ESLint
```

The project uses **bun** as the package manager (see `bun.lock`).

## Architecture

This is a **Next.js 16 App Router** portfolio/resume site for Yohanes Eka Putra, styled to resemble a LaTeX academic CV.

### Key structural points

- **Single-page app**: All resume content lives in `app/page.tsx` as a client component. Resume data (personal info, education, experience, projects, skills) is defined as typed arrays at the top of the file and rendered below.
- **No separate data layer**: Resume content is hardcoded directly in `page.tsx` — not in a CMS, JSON file, or database.
- **Font strategy**: Three fonts are registered in `app/layout.tsx` — Computer Modern Serif (local `.woff` files in `public/fonts/`, mimicking LaTeX), Geist Sans, and Geist Mono. `font-serif` maps to Computer Modern via CSS variable `--font-computer-modern-serif-roman`.
- **Color theme**: Custom `olive-*` color scale used throughout (e.g., `bg-olive-100`, `text-olive-900`, `border-olive-300`). These are Tailwind CSS v4 theme tokens defined via shadcn/tailwind.

### UI components

Components in `components/ui/` are a mix of shadcn/ui and Magic UI:
- `blur-fade.tsx` — entrance animation wrapper (wraps sections with staggered fade-in)
- `dock.tsx` — macOS-style bottom dock navigation
- `flickering-grid.tsx` — animated grid background at the top of the page
- `progressive-blur.tsx`, `sonner.tsx`, `tooltip.tsx`, `button.tsx`, `separator.tsx` — standard shadcn/ui primitives

Add new shadcn components with: `bunx shadcn add <component>`
Add Magic UI components with: `bunx shadcn add @magicui/<component>` (registry configured in `components.json`)

### Styling approach

- Tailwind CSS v4 (configured via `@import "tailwindcss"` in `globals.css`, no `tailwind.config.js`)
- `tw-animate-css` for animation utilities
- shadcn uses the `radix-nova` style with CSS variable-based theming
- The `@theme inline` block in `globals.css` maps semantic CSS variables to Tailwind color/font tokens
