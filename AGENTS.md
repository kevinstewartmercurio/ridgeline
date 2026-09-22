## Development

Astro 6 has **no** `--background` flag and no `astro dev stop` / `status` /
`logs` subcommands. `--background` is silently ignored and the server runs in
the foreground; `astro dev status` treats `status` as a stray positional, starts
a server anyway, and hangs the tool call.

Background the dev server with the shell instead, and stop it by port:

```
(./node_modules/.bin/astro dev --port 4322 > "${TMPDIR:-/tmp}/astro-4322.log" 2>&1 &)
lsof -ti:4322 -sTCP:LISTEN | xargs -r kill
```

Use port 4322, not Astro's default 4321 — 4321 is usually the user's own server.

`.claude/skills/run-app/SKILL.md` has the full procedure: the readiness poll,
driving the page with Playwright, which interactions are worth exercising, and
the breakpoint sweep. Read it before any visual verification.

For a fast correctness check without a browser:

```
bun run build    # = astro check && astro build
```

`astro check` covers types and template diagnostics, so a type error fails the
build.

## This project

A static marketing site for a fictional architecture studio. Eight routes: `/`,
`/studio`, and five `/project/[name]` pages generated from `src/data/projects.ts`.

- **Styling** — Tailwind v4 via `@tailwindcss/vite`, no `tailwind.config`
  content globs. Custom breakpoints `2xs` (425px) and `xs` (525px) and the
  brand colours (`pine`, `alabaster`, `ink`) are declared in
  `src/styles/global.css`.
- **Content** — plain TypeScript modules under `src/data/`, not content
  collections.
- **Components** — `.astro` only. There is no React, Vue or Svelte integration.
- **Motion** — Lenis for smooth scroll (`src/components/lenis.astro`) and
  `motion` for the hover wipes. Both are gated on `prefers-reduced-motion`;
  keep new animation gated the same way, with a `motion-reduce:` variant on any
  CSS transition.
- **Navigation** — `<ClientRouter />` in `src/layouts/Layout.astro`. Scripts run
  on `astro:page-load` and tear down on `astro:before-swap`; follow that pattern
  rather than a bare top-level listener, or handlers leak across navigations.

## Documentation

Full documentation: https://docs.astro.build

The guides that actually apply here:

- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Images and the `<Image />` component](https://docs.astro.build/en/guides/images/)
- [Styling and Tailwind](https://docs.astro.build/en/guides/styling/)
- [View transitions and the client router](https://docs.astro.build/en/guides/view-transitions/)
- [Routing and dynamic routes](https://docs.astro.build/en/guides/routing/)
