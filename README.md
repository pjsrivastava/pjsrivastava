# PJ Srivastava — Astro site

Converted from the Squarespace version of [pjsrivastava.com](https://www.pjsrivastava.com) to [Astro](https://astro.build) with Tailwind CSS and content collections.

## Quick start

```bash
npm install
npm run dev     # local dev server at http://localhost:4321
npm run build   # production build in ./dist
npm run preview # preview the production build locally
```

## Project structure

```
.
├── astro.config.mjs         # Astro config (Tailwind, MDX, Sitemap)
├── tailwind.config.mjs      # Theme (colors, fonts)
├── src/
│   ├── content/
│   │   ├── config.ts        # Blog collection schema
│   │   └── blog/            # Each article as a markdown file
│   ├── layouts/
│   │   └── BaseLayout.astro # Shared page shell (header + footer + banner)
│   ├── components/
│   │   ├── Header.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   ├── index.astro      # Home (topic index of articles)
│   │   ├── about-me.astro
│   │   ├── clients.astro
│   │   └── [...slug].astro  # Dynamic route for blog posts
│   └── styles/
│       └── global.css
├── public/
│   └── images/              # Banner + article images
└── _squarespace_source/     # Original Squarespace export (ignored by git)
```

## Editing content

- **Articles** live in `src/content/blog/*.md`. Each has frontmatter: `title`, `description`, `pubDate`, `topic`, `slug`.
- **Static pages** (`index`, `about-me`, `clients`) are `.astro` files in `src/pages/`.
- **Banner image / assets** are in `public/images/`.

## Styling

- The theme approximates the original Squarespace look: Proxima Nova for body copy, a Garamond-style serif for display headings, a muted blue link color, and a simple banner header. Update `tailwind.config.mjs` to tweak.
- Long-form article typography is handled by `@tailwindcss/typography`'s `prose` class.
