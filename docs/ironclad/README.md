# 🛡️ IronClad — Business Architecture

> **AI-powered missed-call capture for home-service contractors**
> AI answers, qualifies & texts leads back in **under 10 seconds.**
> *Every missed call is lost revenue. We make sure that never happens.*

---

## 🏢 Business Overview

| | |
|---|---|
| **Company** | IronClad by GETTUPP ENT |
| **Mission** | Help home-service businesses capture every inbound lead — 24/7 — with AI-powered missed-call texting |
| **Target Market** | HVAC, Plumbing, Electrical, Roofing contractors in Hennepin County, MN |
| **ICP** | $1M–$20M revenue, 5–50 techs, inbound calls happening (SEO/PPC/LSA/referrals) |
| **Key Metric** | AI texts missed callers back in **< 10 seconds** |
| **Revenue Model** | Setup fee + monthly recurring (no contracts) |
| **Brand Colors** | Navy `#1B2A4A`, Gold `#D4A843` |

---

## 💰 Pricing

| | **Starter** | **Pro ⭐** | **Premium** |
|---|---|---|---|
| **Setup** | $149 | $249 | $399 |
| **Monthly** | $97/mo | $197/mo | $347/mo |
| **Stripe ID** | `prod_TxX9d1i169LxbK` | `prod_TxXAXIiP0gEHw2` | `prod_TxXAQZ0z50J1vP` |

---

## 📊 Key Stats (Deal Closers)

- **~40%** of inbound calls are missed
- **85%** of missed callers never call back
- **80%** who hit voicemail call the next contractor
- **< 5 min** response = **80% higher** conversion
- **Avg ticket:** $500–$1,500+
- **IronClad response:** under 10 seconds

---

## 📁 Document Architecture

### 📣 [sales-marketing/](sales-marketing/) — 26 docs

Sales collateral, outreach campaigns, demos, and growth materials.

| Category | Documents |
|---|---|
| **Pitches & Scripts** | Sales Script, Elevator Pitch, 15-Min Demo Script, After-Hours Demo Script |
| **Outreach** | Cold Email Sequences, Pilot Acquisition Campaign |
| **Marketing** | Landing Page Copy, Pitch Deck, Social Media Launch Kit, Social Posts |
| **Sales Tools** | Objection Handling Guide, ROI Calculator, Pricing & Packages |
| **Growth** | Case Study Template, Referral Program Playbook, Prospect List Template |
| **Prospecting** | Top 30 HVAC Businesses (Hennepin Co), Prospect Raw Data |
| **Compliance** | TCPA-Compliant SMS Scripts & n8n Logic |

### ⚙️ [operations/](operations/) — 11 docs

Onboarding, customer service, product setup, and internal workflows.

| Category | Documents |
|---|---|
| **Onboarding** | 48-Hour Onboarding Checklist, Product Setup & Onboarding Flow |
| **Customer Service** | Customer FAQ, Response-Time Analysis Framework |
| **Technical** | Components, Output Patterns, Workflows, Compatibility Report |
| **Billing** | Stripe Products Configuration |

### 🔍 [competitive-intelligence/](competitive-intelligence/) — 5 docs

Market research, competitor analysis, and validation gates.

| Gate | Document |
|---|---|
| **Gate 1** | Competitive Landscape (12+ competitors analyzed) |
| **Gate 2** | TAM SAM SOM Market Sizing ($3B MN HVAC market) |
| **Gate 4** | After-Hours Call Test Research |
| **Gates 5-7** | Unit Economics, Anti-Sherlocking, Smoke Test |
| **Analysis** | Competitor Analysis (detailed) |

### 📚 [knowledge-base/](knowledge-base/) — 12 docs

Core specifications, business intelligence, and foundational docs.

| Type | Documents |
|---|---|
| **SSOT** | IronClad v1 — Locked SSOT Spec (THE source of truth) |
| **Dashboard** | IronClad Command Center (main hub page) |
| **Launch** | Full Business Launch Package (all gates ✅) |
| **Technical** | AI Agent Skill Analysis, Tech Stack Planning, SKILL.md |
| **Research** | ChatGPT Brain Dump, Pasted Content (1-4) |

### 🤖 [skills/](skills/) — 5 files

Agent skill definitions for automation.

| Skill | Purpose |
|---|---|
| `ironclad-compatibility-validator` | Validates system compatibility |
| `ironclad-conversion-engine` | Lead conversion automation |
| `ironclad-ssot-enforcer` | Enforces SSOT spec compliance |
| `ironclad-stitch-loop` | Stitch integration loop |
| `ironclad-twilio-engine` | Twilio telephony engine |

### 📊 [data/](data/) — 9 files

Structured data exports from Notion.

| Dataset | Files |
|---|---|
| **Tasks** | IronClad Tasks (.csv, _all.csv) |
| **Projects** | IronClad Projects (.csv, _all.csv) |
| **Knowledge Base** | IronClad Knowledge Base (.csv, _all.csv) |
| **Conversations** | ChatGPT Conversations (.csv, _all.csv) |
| **Prospects** | prospects_firecrawl.json (21 verified HVAC prospects) |

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| **Telephony** | Twilio / Telnyx (call/SMS events) |
| **Orchestration** | n8n (deterministic event routing) |
| **AI** | OpenAI (lead qualification, summaries) |
| **Payments** | Stripe (live products configured) |
| **Analytics** | PostHog |
| **CRM/Ops** | Notion |

---

## 🚀 Launch Status: ✅ READY

All 7 validation gates complete. Stripe live. 21 prospects identified. Email sequences ready. Legal docs drafted.

**Immediate next steps:**

1. Cold call top 10 prospects
2. Send Email Sequence 1 to all 21 prospects
3. Book 3 demos minimum
4. Close 1 pilot client at Pro tier ($197/mo)
