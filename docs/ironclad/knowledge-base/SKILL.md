---
name: ironclad-stitch-loop
description: "Mandatory UI generation and validation loop for all IronClad frontend components. Use when: creating any page, component, or screen for the IronClad web app. Enforces the ENHANCE → GENERATE → VALIDATE 12-point → LOOP workflow. No UI ships without passing this loop."
---

# IronClad Stitch Loop

Every IronClad UI component MUST pass this loop before shipping. No exceptions.

## Workflow

### Step 1: Enhance Prompt

Transform rough UI descriptions into generation-optimized prompts.

Every enhanced prompt MUST include:
- Brand tokens: Navy `#1B2A4A`, Gold `#D4A843`, White `#FFFFFF`, Gray `#F5F5F5`
- Font: Inter 700 headings, system-ui 400/500 body
- Component lib: shadcn/ui (Button, Card, Dialog, etc.)
- Framework: Next.js App Router + Tailwind CSS
- Tone: professional, trustworthy, bold, contractor-friendly
- Shield motif in hero and CTA sections
- Mobile-first responsive behavior
- Framer Motion animations (subtle, professional)

**Example:**
```
Generate a SaaS pricing section for IronClad. Navy (#1B2A4A) background.
3 cards: Starter $97/mo, Pro $197/mo (highlighted), Premium $347/mo.
Gold (#D4A843) CTA buttons. Inter font. shadcn/ui Card and Button.
Tailwind CSS. Responsive: stack on mobile. Framer Motion fade-in.
```

### Step 2: Generate UI

Feed enhanced prompt to the generation engine. Output production-ready TSX.

Requirements:
- React Server Components where possible
- `'use client'` directive for interactive components
- TypeScript `.tsx` files only
- All styles via Tailwind CSS utility classes

### Step 3: Validate (12-Point Matrix)

Run EVERY generated component through this matrix. ALL 12 must PASS.

```
COMPONENT: [name]
  1.  Framework:   Next.js App Router compatible?           ✅/❌
  2.  Styling:     Tailwind CSS only (no raw CSS/modules)?  ✅/❌
  3.  Components:  Uses shadcn/ui (no MUI/Chakra/Bootstrap)?✅/❌
  4.  TypeScript:  .tsx with proper types/Zod?              ✅/❌
  5.  Deployment:  Deploys to Vercel without modification?   ✅/❌
  6.  Database:    Works with Supabase + Prisma?             ✅/❌
  7.  Auth:        Uses Supabase Auth (@supabase/ssr)?       ✅/❌
  8.  Payments:    Works with Stripe?                        ✅/❌
  9.  Voice/SMS:   Works with Twilio SDK?                    ✅/❌
  10. Monitoring:  Sentry + PostHog compatible?              ✅/❌
  11. Lighthouse:  95+ Perf, 100 A11y, 95+ BP, 100 SEO?     ✅/❌
  12. Bundle:      No deps >100KB gzipped without reason?    ✅/❌
RESULT: [X/12]
```

Skip checks 6-9 for purely presentational components (mark N/A).

### Step 4: Loop Until 12/12

If ANY check fails:
1. Identify failure reasons
2. Re-enhance prompt with failure constraints
3. Regenerate component
4. Re-validate

**Loop until 12/12 PASS. Do NOT ship a failing component.**

## IronClad Component Checklist

See `references/components.md` for the full component list with specs.

## Rules

- A shipped component without completing this loop is a **build defect** — roll back.
- All copy must match `constants.ts` (see ironclad-ssot-enforcer skill).
- All copy must pass the 12-principle conversion engine (see ironclad-conversion-engine skill).
