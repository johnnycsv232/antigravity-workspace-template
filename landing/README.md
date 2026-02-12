# IronClad Landing Workspace

Frontend workspace for building and shipping the public landing page.

## Stack

- React 19
- TypeScript
- Vite
- ESLint

## Local commands

From repository root:

```bash
make landing-install
make landing-dev
make landing-verify
```

From `landing/` directly:

```bash
npm ci
npm run dev
npm run lint
npm run build
```

## File guide

- `src/App.tsx`: current page scaffold and implementation checklist
- `src/App.css`: layout and component-level styles
- `src/index.css`: design tokens, typography, and global styles
- `public/`: static assets for production page
- `SITE.md`, `DESIGN.md`, `next-prompt.md`: stitch-loop baton workflow files
- `queue/` -> `site/public/`: stitch-loop asset pipeline for generated HTML

## Stitch loop status

The stitch-loop baton files are initialized for this project.

- Current baton: `next-prompt.md` (`page: proof`)
- Static integration target: `site/public/`
- Stitch project metadata: `stitch.json`

When Stitch MCP tools are available, run the loop by:
1. reading `next-prompt.md`
2. generating with Stitch
3. saving output to `queue/`
4. moving final page into `site/public/`
5. updating `SITE.md` + next baton

## Next implementation step

Replace scaffold content with production sections and wire the CTA flow.
