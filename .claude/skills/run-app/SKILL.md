---
name: run-app
description: Launch and drive this Astro app (Ridgeline) for visual verification without touching the user's own dev server on port 4321.
---

# Running Ridgeline for verification

Ridgeline is an Astro v6 static marketing site with two routes, `/` and
`/studio`. Most of what is worth verifying is motion and layout — the
nav that hides on scroll, the logo page transition between the two
routes, the hover wipes on the project and recognition rows, the sticky
footer — so a screenshot of a single default-width page usually isn't
enough. Drive the interaction and capture at more than one width.

The user often has their own `astro dev` open on **port 4321** (Astro's
default). Never kill whatever is listening there and never run a broad
`pkill -f astro` — that server is the user's, not scratch state for
this session.

## Dev server: use a dedicated port

Launch a separate instance on **port 4322** for agent-driven
verification, and only ever stop what you started on that port.

```bash
# start (background), reclaiming 4322 from a prior run — do NOT touch 4321
lsof -ti:4322 -sTCP:LISTEN | xargs -r kill 2>/dev/null
cd /Users/ksm/Desktop/dev/ridgeline
(./node_modules/.bin/astro dev --port 4322 > /tmp/astro-4322.log 2>&1 &)
i=0; until curl -sf http://localhost:4322/ >/dev/null || [ $i -ge 30 ]; do sleep 1; i=$((i+1)); done
curl -sf http://localhost:4322/ >/dev/null && echo READY || { echo NOTREADY; cat /tmp/astro-4322.log; }

# ...drive it (see below)...

# stop only the 4322 instance when done
lsof -ti:4322 -sTCP:LISTEN | xargs -r kill 2>/dev/null
```

macOS doesn't ship `timeout`, so poll with the `until`/`sleep` loop
above rather than `timeout ... curl`.

The repo uses **bun** (`bun.lockb`, `@types/bun`), so `bun run dev` also
works, but calling `./node_modules/.bin/astro` directly is what lets you
pass `--port` without argument-forwarding quirks.

### CLAUDE.md's background flags do not exist

`CLAUDE.md` says to use `astro dev --background` and manage it with
`astro dev stop` / `status` / `logs`. **Astro 6.2.2 has none of these.**
`--background` is silently ignored and the server runs in the
foreground; `astro dev status` treats `status` as a stray positional and
just starts a server, which then hangs the tool call. Background it with
the shell (`&`) as above and stop it by port, as shown. If CLAUDE.md is
ever corrected or Astro gains the flag, prefer whatever it says then.

## Checking for errors without a browser

Fastest signal, and enough for most changes:

```bash
cd /Users/ksm/Desktop/dev/ridgeline
./node_modules/.bin/astro check     # types + template diagnostics
./node_modules/.bin/astro build     # full build; `bun run build` = check && build
```

`astro build` writes `dist/`, which is useful for verifying Tailwind
actually emitted a class (a typo'd variant like `xl::text-base` or an
undefined breakpoint compiles to nothing, silently):

```bash
grep -o 'xl\\:text-base' dist/_astro/*.css      # did the class survive?
grep -o '<title>[^<]*</title>' dist/index.html dist/studio/index.html
```

## Driving the page

`chromium-cli` isn't installed on this machine and there's no global
Playwright, but Playwright's Chromium build is already cached under
`~/Library/Caches/ms-playwright`. Rather than adding a devDependency to
the repo just for a one-off screenshot, install it into a throwaway
directory and point at the cached browser binary:

```bash
WORK=$(mktemp -d)
cd "$WORK"
npm init -y >/dev/null 2>&1
npm install playwright@1.62.0 >/dev/null 2>&1
```

Find the cached Chromium binary dynamically (version numbers drift as
Playwright updates — the `.app` sits three levels down, e.g.
`chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app`):

```bash
find ~/Library/Caches/ms-playwright -maxdepth 3 -iname "*.app" -path "*chromium-*" | sort -V | tail -1
```

Then write a script in `$WORK` that does
`chromium.launch({ executablePath: "<that path>/Contents/MacOS/Google Chrome for Testing" })`,
navigates to `http://localhost:4322/`, interacts, and screenshots to a
file in `$WORK`. Read the screenshots back with the Read tool.

If the installed `playwright` npm version doesn't match the cached
browser build (`browserType.launch: Executable doesn't exist...`),
that's expected — the `executablePath` override bypasses Playwright's
own version check, so it still works against the cached binary.

### What to actually exercise

The interesting behavior is scroll-, hover- and navigation-driven, and
none of it shows up in a plain `page.goto` + screenshot:

- **Nav**: scroll down past the nav to confirm it slides away, scroll up
  to confirm it returns. At the top the left panel is open and the right
  panel shows; once scrolled, the right panel slides out and the
  hamburger slides in. Below the `md` breakpoint only the hamburger ever
  shows.
- **Page transition**: click through `/` → `/studio`. A pine curtain
  drops, the logo wipes in, then the whole thing shrinks into the nav
  logo square. Slow it down with CDP throttling or screenshot mid-flight
  rather than trusting the end state.
- **Hover wipes**: `.project-link` rows on `/` and `.recognition-link`
  rows on `/studio` fill with pine from the edge the pointer entered.
  Use `page.hover()` and give the 300ms animation time to settle.
- **Hamburger menu**: opens a panel bottom-right over a scrim and locks
  page scroll.
- **Sticky footer**: the footer is `position: sticky` only while it fits
  the viewport; a script drops the sticky classes when it is taller.
  Check a short viewport (e.g. 800x600) as well as a tall one.

Hover and `prefers-reduced-motion` both gate behavior, so launch with a
normal (non-reduced-motion) context and a real mouse move — several
handlers are registered only when `matchMedia("(hover: hover)")` matches.

### Widths worth capturing

Custom breakpoints live in `src/styles/global.css`: `2xs` is **425px**
and `xs` is **525px**, on top of Tailwind's stock `md` 768 / `lg` 1024 /
`xl` 1280. Layout flips at each. A useful sweep is 390, 460, 600, 900,
1280, 1600.

## Cleanup

After verification, `rm -rf "$WORK"` for the throwaway Playwright
install, and stop only the port-4322 dev server — leave port 4321 (and
anything else you didn't start) alone.
