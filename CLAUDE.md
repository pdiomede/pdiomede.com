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

**There is no shared CSS file or templating system.** Each HTML file embeds all its CSS in a `<style>` block (~800–1,200 lines of CSS per file) and includes the full JS inline. When updating content, **all 5 files must be updated in sync**.

## CSS Theming System

Each file uses CSS custom properties for theming:

- Light mode: defined on `:root`
- Dark mode: defined on `[data-theme="dark"]`
- Key variables: `--bg-color`, `--text-color`, `--border-color`, `--link-color`, `--accent-color`, `--card-bg`

Dark/light toggle persists via `localStorage` key `"theme"`. Theme variant navigation (the palette icon) works by redirecting between the 5 HTML files.

## JavaScript Conventions

All JS is inline, minimal (~150 lines per file), and vanilla:

- `toggleTheme()` — dark/light mode toggle
- `initDesignSelector()` — palette selector UI
- No frameworks, no modules, no external scripts except Font Awesome via CDN (with SRI hash)

## Content Sections

Every HTML file contains these sections in order:
1. Header (profile image, name, tagline)
2. Current Roles (Certora, Livepeer cards)
3. Innovation Lab (GraphTools Pro, IndexerScore, Messari Report)
4. Community Impact (The Graph stats, Graph AdvocatesDAO)
5. Design Selector overlay

## Security & Performance Constraints

- CSP meta tag uses `'unsafe-inline'` for scripts — required for inline JS to function (hash-based CSP broke dark mode toggle in v2.5.1, then was reverted)
- SRI integrity attributes on Font Awesome CDN link — update hash if CDN version changes
- Images use `fetchpriority="high"` (profile photo) and `loading="lazy"` (rest)

## Versioning

Versions follow `vMAJOR.MINOR.PATCH`. Document changes in `CHANGELOG.md` and update the version string that appears in each HTML file's `<meta name="version">` tag and the visible footer/comment block.
