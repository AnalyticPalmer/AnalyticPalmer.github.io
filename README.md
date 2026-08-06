# Palmer Ogiriki — Portfolio

A responsive personal portfolio for **Palmer Ogiriki (AnalyticPalmer)**, positioned as a Data Analyst, AI and Machine Learning Engineer. The site is designed for recruiters, employers and technology clients, with accessible project filtering, dark/light modes and subtle motion.

## Technology

- Next.js (App Router) and TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Getting started

You need Node.js 20.19 or newer and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Quality checks

```bash
npm run lint
npm run build
```

## Content updates

Portfolio content is separated from the interface:

- `data/projects.ts` — featured and additional projects, categories and links
- `data/skills.ts` — skill groups
- `data/experience.ts` — work experience and education
- `data/certifications.ts` — professional credentials

Replace these placeholders before publishing a final résumé release:

- `public/resume-palmer-ogiriki.pdf` — downloadable résumé
- `public/favicon.ico` — optional custom favicon replacement

## Deployment

### GitHub Pages

This repository is named `AnalyticPalmer.github.io` and is configured for static export. Run `npm run build`, then publish the generated `out` directory with a GitHub Actions workflow.

### Vercel

Import the GitHub repository in Vercel. Keep the detected Next.js framework settings and deploy; no environment variables are required.

### Other Node hosting

Run `npm run build`, then launch the production server with `npm start`. Configure the hosting platform to use its assigned `PORT` value.

## Accessibility and behaviour

The site uses semantic sections, visible focus states, accessible labels, keyboard-operable controls, reduced entrance motion and native smooth scrolling. Theme preference is saved locally and respects the visitor’s system preference on first load.

## Legacy content

The previous static HTML5 UP portfolio remains in the repository for reference. Its strongest portfolio entries were preserved in the new “Additional projects” section.
