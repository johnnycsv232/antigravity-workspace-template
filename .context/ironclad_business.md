# 🛡️ IronClad — Business SSOT Context

> This file is auto-injected into the agent's system prompt. It contains the authoritative business knowledge for IronClad.

## What is IronClad?

AI-powered missed-call capture service for home-service contractors. When a customer calls an HVAC/plumbing/electrical/roofing business and no one answers, IronClad detects it instantly and texts the caller back in **under 10 seconds** — qualifying the lead, booking the appointment, and notifying the business owner.

## Target Market

- **Verticals:** HVAC (primary), Plumbing, Electrical, Roofing
- **Geography:** Minneapolis / Hennepin County, MN (expanding)
- **ICP:** $1M–$20M revenue, 5–50 techs, already getting inbound calls
- **Pain signals:** missed calls after-hours, slow callbacks, inconsistent intake, no visibility

## Promise

> Every lead gets a response fast (seconds/minutes), gets qualified, and gets routed/booked with confirmations + weekly reporting.

## Boundaries (non-negotiable)

- ❌ No estimates or pricing quotes
- ❌ No dispute resolution
- ❌ Not "replace the office" — capture + qualification + handoff/booking only

## Pricing (Stripe Live)

| | Starter | Pro ⭐ | Premium |
|---|---|---|---|
| Setup | $149 | $249 | $399 |
| Monthly | $97/mo | $197/mo | $347/mo |
| Stripe ID | `prod_TxX9d1i169LxbK` | `prod_TxXAXIiP0gEHw2` | `prod_TxXAQZ0z50J1vP` |

## Unit Economics

- Pro tier gross margin: **87%** (~$25/mo cost per client)
- Break-even: **3 clients**
- 10 clients: $1,970 MRR, $1,720 profit
- 50 clients: $9,850 MRR, $8,600 profit

## Key Stats (memorize — they close deals)

- ~40% of inbound contractor calls are missed
- 85% of missed callers never call back
- 80% who hit voicemail call the next contractor
- < 5 min response = 80% higher conversion
- Avg home-service ticket: $500–$1,500+
- IronClad response: **under 10 seconds**

## Tech Stack

| Layer | Technology |
|---|---|
| Telephony | Twilio / Telnyx |
| Orchestration | n8n (deterministic event routing) |
| AI | OpenAI (qualification, summaries, decisions) |
| Payments | Stripe |
| Analytics | PostHog |

## Operational Flow

**Trigger → Qualify → Route/Book → Confirm → Report**

Triggers: missed call, voicemail, inbound SMS, web form lead.

## Event Types

```
call.missed, call.answered, voicemail.received, sms.received, form.lead_received,
lead.qualified, lead.escalated, lead.booked, lead.handed_off,
workflow.failed, workflow.recovered
```

## Data Model (core tables)

- `accounts` — client configs (hours, zips, escalation, routing rules)
- `numbers` — phone numbers per account
- `leads` — captured leads with status lifecycle
- `events` — append-only event log (dedupe on provider_event_id)
- `conversations` — SMS/voice transcripts + outcomes

## Compliance (v1)

- SMS: always include "Reply STOP to opt out"
- Voice: play disclosure at call start
- Data retention: transcripts 90 days, metrics 12 months
- Client purge requests honored anytime

## Brand

- **Name:** IronClad (capital I, capital C)
- **Tagline:** Missed-Call Capture
- **Colors:** Navy `#1B2A4A`, Gold `#D4A843`
- **Voice:** Direct, confident, data-driven, contractor-friendly, results-first

## Document References

| Category | Location |
|---|---|
| SSOT Spec | `docs/ironclad/knowledge-base/IronClad v1 — Locked SSOT Spec*.md` |
| Sales Materials | `docs/ironclad/sales-marketing/` |
| Operations | `docs/ironclad/operations/` |
| Market Research | `docs/ironclad/competitive-intelligence/` |
| Data | `docs/ironclad/data/` |
| Skills | `docs/ironclad/skills/` |
