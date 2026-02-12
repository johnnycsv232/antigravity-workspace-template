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

## Next implementation step

Replace scaffold content with production sections and wire the CTA flow.
