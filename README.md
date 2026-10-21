# Personal Portfolio

A fast, responsive personal portfolio for **Muhammed Salman CC**, an M.Sc. Electronics student working on embedded systems, FPGA design, and IoT.

Built with React, TypeScript, Vite, and Tailwind CSS. The site uses a dark green palette, a warm light mode, large display type, and a subtle grid texture. Motion is kept short and respects `prefers-reduced-motion`.

Repository: https://github.com/ccsalman545/muhammed-salman-portfolio

Live site: https://muhammed-salman-cc.is-a.dev

## Features

- **Two themes.** Deep green dark mode and a warm paper light mode. The choice is saved in `localStorage` and applied before the first paint, so the page never flashes the wrong theme.
- **Sticky navigation.** A reading progress bar, an active link that follows the section in view, and a mobile menu that closes on Escape.
- **Hero.** An availability note, a large headline, schematic line art, and a portrait frame that falls back to a monogram if the image does not load.
- **Highlights strip.** Education, award, and community facts in one row, followed by a short marquee of tools.
- **Content sections.** About with a side note on current work, a card grid for the technical stack, and a featured project card plus two smaller cards.
- **Experience and education.** A timeline for the internship, seminar, and community work, and one card per degree.
- **Contact panel.** Email, LinkedIn, and GitHub buttons beside a plain-text contact card, with a one-click copy email action.
- **Image fallbacks.** Portrait, logo, and project images that fail to load are replaced with built-in placeholders instead of broken image icons.
- **Accessibility.** Skip link, semantic landmarks, labelled sections, visible focus rings, 4.5:1 or better text contrast in both themes, forced-colors and print styles, and axe-core checks in tests and in the browser.
- **Self-hosted fonts.** Inter, Space Grotesk, and JetBrains Mono are bundled through `@fontsource-variable`. There are no tracking scripts and no external font requests.
- **SEO.** Open Graph and Twitter metadata, a 1200x630 social image, canonical URL, JSON-LD `Person` data, sitemap, robots file, and web manifest.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4 (import layer only, the design system is hand-written CSS variables)
- Lucide React icons
- `@fontsource-variable` fonts
- Vitest, Testing Library, and axe-core

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Personalize

Most content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): name, email, location, biography, focus areas, skills, projects, experience, education, and social links. The `satisfies` annotations there also give you autocomplete when you add entries.

Also review:

1. Metadata, canonical URL, and JSON-LD in `index.html` if the production domain changes.
2. The `MS` monogram in `src/components/Monogram.tsx` and `.brand-mark` if the initials change.
3. Social preview artwork in `public/og-image.svg`. Export `public/og-image.png` at 1200x630 to match.
4. Theme tokens in `src/index.css` under `:root` (dark) and `[data-theme='light']` (light).

## Project structure

```text
portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-image.svg / og-image.png
│   ├── robots.txt, sitemap.xml, site.webmanifest
├── src/
│   ├── components/
│   │   ├── About.tsx, Skills.tsx, Projects.tsx
│   │   ├── Experience.tsx, Education.tsx
│   │   ├── Hero.tsx, Highlights.tsx, Marquee.tsx
│   │   ├── Header.tsx, Footer.tsx, BackToTop.tsx
│   │   ├── SectionHeading.tsx, ThemeToggle.tsx
│   │   ├── Contact.tsx, CopyEmailButton.tsx
│   │   ├── SmartImage.tsx, Monogram.tsx
│   │   └── SocialIcons.tsx
│   ├── data/
│   │   └── portfolio.ts
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   ├── useScrollSpy.ts
│   │   └── useScrollMetrics.ts
│   ├── App.tsx
│   ├── App.test.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── netlify.toml
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Commands

```bash
npm run dev       # Start the development server
npm run build     # Type-check and create a production build
npm run lint      # Run Oxlint
npm run test:a11y # Run axe accessibility and interaction tests
npm run preview   # Preview the production build locally
```

## Deploy to Netlify

Push this repository to a Git provider and import it in Netlify. The included `netlify.toml` sets the build command, publish directory, SPA redirect, caching, and security headers.

Alternatively, use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --build
netlify deploy --build --prod
```

## Accessibility

The site includes a skip link, labelled landmarks and sections, visible focus styles, a mobile menu that keeps focus inside while open and closes on Escape, `aria-current` navigation state, a polite live region for the copy email action, reduced-motion handling, forced-colors support, and print styles. `npm run test:a11y` runs axe-core against the rendered app and checks the theme toggle and mobile menu. jsdom cannot calculate rendered color contrast, so check major visual changes in a browser with Lighthouse or axe DevTools and a keyboard pass in both themes.
