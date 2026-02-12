# Landing Page Foundation

This repo now includes a dedicated frontend workspace at `landing/` so landing-page work can start immediately.

## Included setup

- React + TypeScript + Vite scaffold in `landing/`
- ESLint configured by Vite template
- Root `Makefile` targets for landing-page workflows
- GitHub Actions workflow for landing lint/build: `.github/workflows/landing-ci.yml`
- A starter "build-control" page in `landing/src/App.tsx` with:
  - readiness checklist
  - implementation backlog
  - section map for page construction

## Commands

Run from repository root:

```bash
make landing-install
make landing-dev
make landing-verify
```

Direct npm alternatives:

```bash
npm --prefix landing ci
npm --prefix landing run dev
npm --prefix landing run lint
npm --prefix landing run build
```

## Suggested implementation sequence

1. Finalize message architecture (hero, pain, solution, proof, pricing, CTA).
2. Replace placeholder copy in `landing/src/App.tsx`.
3. Add final visual assets to `landing/public/`.
4. Implement analytics + form submission handling.
5. Run `make landing-verify`.
6. Run full project verification via `make verify`.

## Definition of ready

You are ready to build the real landing page when:

- Copy and visual direction are approved
- Asset inventory is complete
- CTA flow destination (calendar/form/checkout) is fixed
- Tracking requirements are defined
- `make landing-verify` and `make verify` are green
