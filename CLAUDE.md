# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static personal portfolio website for Paolo Diomede (pdiomede.com). **No build system, no package manager, no dependencies** — pure HTML5, CSS3, and vanilla JavaScript.

## Running Locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

No install, build, lint, or test steps exist.

## Architecture: Multi-Theme Variants

The site has **5 standalone HTML files** — each is a complete, self-contained page sharing identical content but a unique visual theme:

| File | Theme | Notes |
|---|---|---|
| `index.html` | Elegant Frame (default) | Light + dark mode |
| `index-material.html` | Google Material 3 | Light + dark mode |
| `index-cyberpunk.html` | Cyberpunk Neon | Dark-only |
| `index-popart.html` | Pop Art | Light + dark mode |
| `index-terminal.html` | Terminal / Hacker | Dark-only |

**There is no shared CSS file or templating system.** Each HTML file embeds all its CSS in a `<style>` block (~800–1,200 lines of CSS per file). JavaScript is shared via `js/main.js` (see below). When updating content, **all 5 files must be updated in sync**.

## CSS Theming System

Each file uses CSS custom properties for theming:

- Light mode: defined on `:root`
- Dark mode: defined on `[data-theme="dark"]`
- Key variables: `--bg-color`, `--text-color`, `--border-color`, `--link-color`, `--accent-color`, `--card-bg`

Dark/light toggle persists via `localStorage` key `"theme"`. Theme variant navigation (the palette icon) works by redirecting between the 5 HTML files.

## JavaScript Conventions

All JavaScript lives in a single shared file: `js/main.js` (~150 lines, vanilla). Each HTML file links it via `<script src="js/main.js" defer>`. There is **no inline JS** in any of the 5 themes — this is intentional and required to keep `script-src 'self'` (no `'unsafe-inline'`) in the CSP. Do not reintroduce inline `<script>` blocks or `onload=` / `onclick=` handlers; if you need new behavior, add it to `js/main.js`.

Key functions:
- `toggleTheme()` — dark/light mode toggle (persisted in `localStorage` key `"theme"`)
- `initDesignSelector()` — palette overlay that redirects between the 5 HTML files

Only external script: Font Awesome via CDN, with SRI integrity hash.

## Content Sections

Every HTML file contains these sections in order:
1. Header (profile image, name, tagline)
2. Current Roles (Certora, Livepeer cards)
3. Innovation Lab (URL Reporter, GraphTools Pro, IndexerScore, Messari Report — 2×2 grid)
4. Community Impact (The Graph stats, Graph AdvocatesDAO)
5. Design Selector overlay

## Animated badges

The Innovation Lab uses two animated badges driven by the shared `livePulse` keyframes: `.badge-live-data` and `.badge-new`. Their `animation-duration` should match within each theme so they pulse in sync (2.5s in Elegant/Material/Cyberpunk/Terminal, 2s in Pop Art).

## Security & Performance Constraints

- **CSP**: `script-src 'self'` (no `'unsafe-inline'`). Achieved by keeping all JS in `js/main.js`. Hash-based CSP previously broke the dark-mode toggle (v2.5.1) and was abandoned in favor of file extraction (v2.5.3) — do not revisit hashes.
- **HTTP security headers** (HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP) are served via Cloudflare Transform Rule, not `<meta>` tags. Browsers ignore most of these in `<meta>` form, so do not add them back to the HTML.
- **SRI** integrity attribute on the Font Awesome CDN `<link>` — update the hash if the CDN version changes.
- **`/.well-known/security.txt`** (RFC 9116) is the vulnerability-reporting contact; update its `Expires` field before 2027-05-07.
- Images: `fetchpriority="high"` on the profile photo, `loading="lazy"` everywhere else.

## Versioning

Versions follow `vMAJOR.MINOR.PATCH`. Document changes in `CHANGELOG.md` and update the version string that appears in each HTML file's `<meta name="version">` tag and the visible footer/comment block.
