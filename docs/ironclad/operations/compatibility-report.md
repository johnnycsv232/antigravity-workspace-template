# COMPATIBILITY REPORT — [PROJECT NAME] — [DATE]

## 1. Stack Choices (3 options evaluated per critical dependency)

| Dependency | Option A | Option B | Option C | Winner |
|---|---|---|---|---|
| Framework | [name + version] | [name + version] | [name + version] | [pick] |
| Database | [name + version] | [name + version] | [name + version] | [pick] |
| Voice/SMS | [name + version] | [name + version] | [name + version] | [pick] |
| Payments | [name + version] | [name + version] | [name + version] | [pick] |
| Automation | [name + version] | [name + version] | [name + version] | [pick] |

Scoring: upkeep (30%), reliability (25%), cost (20%), scalability (15%), solo-fit (10%)

## 2. Chosen Versions (with proof links)

| Package | Version | Official Docs Link | GitHub Release Link |
|---|---|---|---|
| next | x.y.z | nextjs.org/docs | github.com/vercel/next.js |
| @supabase/ssr | x.y.z | supabase.com/docs | github.com/supabase/... |
| prisma | x.y.z | prisma.io/docs | github.com/prisma/prisma |
| twilio | x.y.z | twilio.com/docs | github.com/twilio/... |
| stripe | x.y.z | stripe.com/docs | github.com/stripe/... |
| [every other dep] | x.y.z | [link] | [link] |

**Total dependency count: __ (MUST be <20)**

## 3. Integration Pair Checks

| Pair | Verified? | Source | Breaking Changes? |
|---|---|---|---|
| Next.js + Vercel | ✅/❌ | [link to guide] | [yes/no + detail] |
| Supabase + Next.js SSR | ✅/❌ | [link] | [yes/no] |
| Prisma + Supabase Postgres | ✅/❌ | [link] | [yes/no] |
| Twilio + Next.js API routes | ✅/❌ | [link] | [yes/no] |
| Stripe + Next.js | ✅/❌ | [link] | [yes/no] |
| n8n + Supabase + Twilio | ✅/❌ | [link] | [yes/no] |
| Tailwind + shadcn/ui + Next.js | ✅/❌ | [link] | [yes/no] |
| PostHog + Next.js | ✅/❌ | [link] | [yes/no] |
| Sentry + Next.js | ✅/❌ | [link] | [yes/no] |
| Cloudflare DNS + Vercel | ✅/❌ | [link] | [yes/no] |
| Framer Motion + React | ✅/❌ | [link] | [yes/no] |
| Lucide React + Tailwind | ✅/❌ | [link] | [yes/no] |

## 4. Edge-Case List

| Category | Risk | Mitigation |
|---|---|---|
| Timeouts | Twilio webhook 15s limit | [plan] |
| Webhook retries | Stripe sends duplicate events | [idempotency plan] |
| Duplicate SMS | Status callback fires twice | [dedup plan] |
| Rate limits | OpenAI 429 during traffic spike | [fallback + queue plan] |
| Cold starts | Vercel serverless cold start >10s | [plan] |
| [add all found] | [risk] | [plan] |

## 5. Decision

- [ ] **PROCEED** — all pairs verified, all edges mitigated, <20 deps
- [ ] **BLOCK** — [list blocking reasons]

**Founder approval:** _________________ **Date:** _________
