# Personal Portfolio

A fast, responsive personal portfolio for **Muhammed Salman CC** — an M.Sc. Electronics student working across embedded systems, FPGA design, IoT, and intelligent hardware.

Built with React, TypeScript, Vite, and Tailwind CSS. The visual direction is deliberately restrained: a dark, lawn-green engineering palette with a warm light mode, strong typography, fine grid textures, and motion that respects `prefers-reduced-motion`.

Repository: https://github.com/ccsalman545/muhammed-salman-portfolio

Live site: https://muhammed-salman-cc.is-a.dev

## Features

- **Two themes** — deep-green dark mode and a warm paper light mode. The choice is remembered in `localStorage` and applied before first paint, so there is no flash of the wrong theme.
- **Sticky, responsive navigation** — scroll progress bar, section-aware active link, animated mobile sheet with focus trap, Escape-to-close, and body scroll locking.
- **Hero with an engineering identity** — availability pill, oversized display headline, schematic linework, portrait frame with fallback monogram, and a "currently studying" card.
- **At-a-glance highlights** — education, award, and community facts in a bordered strip, followed by a marquee of tools and topics.
- **Editorial sections** — About with a sticky side rail and "currently exploring" note; a card-based technical stack; a featured project layout with fallback graphics when remote images are unavailable.
- **Project and experience detail** — category labels, award badges, impact lists, and tag pills with a timeline for internships, research, and community work.
- **Contact panel** — split layout with primary actions (email, LinkedIn, GitHub) plus a plain-text contact card, and one-click *Copy email* with a live-region confirmation.
- **Robust image handling** — any portrait, logo, or project image that fails to load is replaced with a designed placeholder instead of a broken-image icon.
- **Accessible by default** — skip link, semantic landmarks, labelled sections, visible focus rings, 4.5:1+ text contrast in both themes, forced-colors and print fallbacks, and axe-core checks in both unit tests and the browser.
- **Fast and self-hosted** — variable fonts bundled through `@fontsource-variable` (Inter, Space Grotesk, JetBrains Mono), no tracking scripts, no external font requests.
- **SEO ready** — Open Graph/Twitter metadata, refreshed 1200×630 social image, canonical URL, JSON-LD `Person` schema, sitemap, robots, and web manifest.

## Stack

- React 19
- TypeScript
- Vite 8
- Tailwind CSS 4 (used as the import layer; the design system is hand-authored CSS variables)
- Lucide React icons
- `@fontsource-variable` fonts
- Vitest + Testing Library + axe-core

## Getting started

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Personalize

Most content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts): name, email, location, biography, focus areas, skills, projects, experience, education, and social links. The `satisfies` annotations there also give you editor autocomplete when adding entries.

Also review:

1. Metadata, canonical URL, and JSON-LD in `index.html` if the production domain changes.
2. The `MS` monogram in `src/components/Monogram.tsx` and `.brand-mark` if the initials change.
3. Social preview artwork in `public/og-image.svg` (export `public/og-image.png` at 1200×630 to match).
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
npm run test:a11y # Run axe accessibility + interaction tests
npm run preview   # Preview the production build locally
```

## Deploy to Netlify

Push this repository to a Git provider and import it in Netlify. The included `netlify.toml` configures the build command, publish directory, SPA redirects, caching, and security headers automatically.

Alternatively, use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --build
netlify deploy --build --prod
```

## Accessibility

The project includes a skip link, labelled landmarks and sections, keyboard-visible focus styling, a focus-trapped mobile menu with Escape support, `aria-current` navigation state, a polite live region for the copy-email action, reduced-motion fallbacks, forced-colors support, and print styles. `npm run test:a11y` runs axe-core against the rendered app plus a few interaction checks. Because jsdom cannot calculate rendered color contrast, validate major visual changes in a browser with Lighthouse or axe DevTools and a keyboard pass in both themes.
