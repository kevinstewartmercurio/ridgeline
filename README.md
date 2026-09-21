# Ridgeline

A portfolio piece: the marketing site for **Ridgeline Architecture Studio**, a residential architecture and design-build practice in Bellingham, WA.

> **Ridgeline is fictional.** The studio, its people, projects, addresses, phone number and press are invented for this site. Any resemblance to a real practice is coincidental. The only real person involved is the developer.

## Stack

- [Astro 6](https://astro.build) with `<ClientRouter />` page transitions
- [Tailwind CSS v4](https://tailwindcss.com), CSS-first: design tokens live in the `@theme` block of `src/styles/global.css`, and there is no JS config
- [Lenis](https://lenis.darkroom.engineering) for smooth scrolling
- [Motion](https://motion.dev) for animation
- [Bun](https://bun.sh) as the package manager

## Running it

```sh
bun install
bun run dev      # dev server at localhost:4321
bun run build    # type-check (astro check) and build to ./dist
bun run preview  # serve the production build locally
```

## Layout

- `src/pages/`: routes, including the dynamic `project/[slug]` pages
- `src/components/`: components, grouped by page (`homepage/`, `studio/`, `project/`) plus shared ones like the nav and footer
- `src/data/`: project content and shared studio details (address, year)
- `src/styles/global.css`: Tailwind entry point and theme tokens
