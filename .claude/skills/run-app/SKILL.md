---
name: run-app
description: Launch and drive this Next.js app (YouDoSudoku) for visual verification without touching the user's own dev server on port 3000.
---

# Running YouDoSudoku for verification

The user often has their own `npm run dev` open on **port 3000**. Never
kill whatever is listening there and never run a broad `pkill` — that
server is the user's, not scratch state for this session.

## Dev server: use a dedicated port

Always launch a separate instance on **port 3100** for agent-driven
verification, and only ever stop what you started on that port.

```bash
# start (background), reusing 3100 if something from a prior run is
# still there — do NOT touch 3000
lsof -ti:3100 -sTCP:LISTEN | xargs -r kill 2>/dev/null
(npm run dev -- -p 3100 > /tmp/nextdev-3100.log 2>&1 &)
i=0; until curl -sf http://localhost:3100 >/dev/null || [ $i -ge 30 ]; do sleep 1; i=$((i+1)); done
curl -sf http://localhost:3100 >/dev/null && echo READY || echo NOTREADY

# ...drive it (see below)...

# stop only the 3100 instance when done
lsof -ti:3100 -sTCP:LISTEN | xargs -r kill 2>/dev/null
```

`macOS` doesn't ship `timeout`, so poll with the `until`/`sleep` loop
above rather than `timeout ... curl`.

## Driving the page

`chromium-cli` isn't installed on this machine and there's no global
Playwright, but Playwright's Chromium build is already cached under
`~/Library/Caches/ms-playwright`. Rather than `npm install playwright`
in the repo itself (don't add a devDependency just for a one-off
screenshot), install it into the scratchpad directory and point at the
cached browser binary:

```bash
cd "$SCRATCHPAD_DIR"   # the session scratchpad, not the repo
npm init -y >/dev/null 2>&1
npm install playwright@1.62.0 >/dev/null 2>&1
```

Find the cached Chromium binary dynamically (version numbers drift as
Playwright updates):

```bash
find ~/Library/Caches/ms-playwright -maxdepth 2 -iname "*.app" -path "*chromium-*" | sort -V | tail -1
```

Then write a small script in the scratchpad that does
`chromium.launch({ executablePath: "<that path>/Contents/MacOS/Google Chrome for Testing" })`,
navigates to `http://localhost:3100`, interacts, and screenshots to a
file in the scratchpad. Read the screenshot back with the Read tool.

If the installed `playwright` npm version doesn't match the cached
browser build (`browserType.launch: Executable doesn't exist...`),
that's expected — the `executablePath` override bypasses Playwright's
own version check, so it still works against the cached binary.

## Cleanup

After verification, remove the scratchpad's `node_modules`/`package*.json`
for the throwaway Playwright install, and stop only the port-3100 dev
server — leave port 3000 (and anything else you didn't start) alone.
