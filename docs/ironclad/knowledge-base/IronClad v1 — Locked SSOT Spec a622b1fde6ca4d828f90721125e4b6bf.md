# IronClad v1 — Locked SSOT Spec

Author: GETTUPP ENT 
Description: The document titled "IronClad v1 — Locked SSOT Spec" outlines a comprehensive specification for a service focused on improving lead capture and qualification in the HVAC and plumbing industries. The goal is to deliver a reliable and simple solution that minimizes hands-on management for solo operators. Key components include client-specific configurations, a tiered service packaging model, an operational flow for handling leads, and a detailed onboarding checklist. The document emphasizes the importance of timely responses to leads, efficient routing, and effective escalation procedures, while also addressing compliance and monitoring practices. It concludes with a clear outline of the capabilities and immediate sales opportunities associated with the service.
Industry: HVAC, Plumbing
Project: 🛡️ Product Setup & Onboarding Flow (%F0%9F%9B%A1%EF%B8%8F%20Product%20Setup%20&%20Onboarding%20Flow%2046896b3c75934b918bcf0477ca416c2b.md)
Status: Done
Tags: IronClad, Lead Management
Type: Spec

<aside>
🛡️

**IronClad v1 — Locked SSOT Spec** ⚡

**Goal:** Sell + deliver DFY reliably with **minimal babysitting** (solo-operator friendly), while staying "simple but production-safe."

</aside>

---

## 0) v1 Defaults

*You can override per client.*

- **Vertical focus (sales):** HVAC first (highest urgency / after-hours pain) → expand to Plumbing
- **Default service area:** client's existing coverage + **zip exclusivity** (§4)
- **Default behavior:** Missed/after-hours → SMS intake immediately → qualify → route/soft-book → confirm → log + report

### Per-account config (must exist for every client)

| **Setting** | **Details** |
| --- | --- |
| Hours | Business hours + after-hours definition |
| Service area | Service zips + excluded zips |
| Services | Services offered + disqualifiers |
| Escalation | Contacts (order + rules) |
| Booking method | `dispatcher_handoff` · `calendar_soft_book` · `calendar_hard_book` · `crm_ticket` |
| Recording / consent | Toggle + disclosure script |
| Urgency keywords | flooding / no heat / gas smell / etc. |

---

## 1) ICP + Promise

### ICP 🎯

- **Revenue:** $1M–$20M
- **Size:** 5–50 techs
- **Condition:** inbound calls already happening (SEO / PPC / LSA / referrals)
- **Pain signals:** missed calls after-hours · slow callbacks · inconsistent intake · no visibility

### Promise (client-facing)

<aside>
✅

**Every lead gets a response fast** (seconds/minutes), gets qualified, and gets routed/booked with confirmations + weekly reporting.

</aside>

### Boundaries (non-negotiable)

- ❌ No estimates or pricing quotes
- ❌ No dispute resolution
- ❌ Not "replace the office" — it's **capture + qualification + handoff/booking**

---

## 2) Packaging by Tier

### Starter — $750/mo + usage

<aside>
🟢

**Outcome:** Stop lead leakage + clean intake notes.

</aside>

- Channels: missed call + voicemail + web form → **SMS intake**
- Qualification + summary sent to owner/dispatcher
- Lead logging + basic weekly report (email/PDF)
- Standard hours/after-hours rules (1 schedule)
- Support: async (best-effort)

### Pro — $1,500/mo + usage

<aside>
🔵

**Outcome:** Capture + qualification **+ booking/follow-up**.

</aside>

- Everything in Starter, plus:
- Two-way SMS workflows (confirmations + follow-ups)
- **Calendar soft-book** (recommended default)
- 1 standard integration target (calendar or supported CRM)
- SLA target: rapid response + same-day fixes

### Scale — $2,500–$5,000/mo + usage

<aside>
🟣

**Outcome:** Multi-number/multi-location routing + tighter ops.

</aside>

- Everything in Pro, plus:
- Multi-number, multi-location
- Advanced routing (zip / service / priority)
- Priority support + incident handling
- Deeper reporting + optimization (playbooks per lead type)

---

## 3) Usage Model

**Usage = pass-through variable costs** (telephony minutes + SMS/MMS + any messaging/AI compute).

**Billing rule:**

- Invoice monthly with line items (internal detail; client-facing can be summarized as "communications usage")
- Optional: client chooses a **cap** (e.g., "notify me if usage exceeds $X")

> Twilio/Telnyx webhooks are the event backbone. Twilio supports call progress callbacks and messaging webhooks.
> 

---

## 4) Zip Exclusivity Rule

**Purpose:** Monopoly positioning without operational chaos.

- Reserve **1 primary zip** included (Starter/Pro)
- Scale: up to negotiated bundle (e.g., 3–10 zips)
- **Reservation term:** 30 days from onboarding completion
- If non-payment/cancel → release after **14 days**
- If you can't technically service the zip (routing mismatch) → transfer to adjacent zip **once**

---

## 5) Operational Flow (the DFY Pipeline)

<aside>
⚙️

**Trigger → Qualify → Route/Book → Confirm → Report**

</aside>

### Triggers supported

- Missed call (no-answer / busy / failed)
- Voicemail received
- Inbound SMS
- Web form lead

### Non-negotiable escalation

- 🚨 High urgency keywords → escalate to on-call immediately (call + SMS)
- ⚠️ Workflow failure → fallback SMS + notify you

---

## 6) Onboarding Intake Checklist

### Blockers (must-have)

- [ ]  Business hours + after-hours definition
- [ ]  Service zips + exclusions
- [ ]  Services offered + "we do NOT do" list
- [ ]  Dispatch contact(s) + escalation order
- [ ]  Booking preference: handoff vs calendar booking vs CRM ticket
- [ ]  Consent language preference (recording + texting)

### Non-blockers (can improve later)

- [ ]  FAQs, common objections
- [ ]  Lead priority rules (maintenance vs install vs emergency)
- [ ]  Preferred phrasing / brand tone

### Onboarding definition of done ✅

Test call + test voicemail + test SMS + test form lead **all** produce:

1. Lead record created
2. Correct routing outcome
3. Logged transcript/summary
4. Confirmation sent

---

## 7) Qualification Script

### Minimum fields collected

| **Field** | **Notes** |
| --- | --- |
| Name | or "unknown" |
| Phone | captured automatically |
| Address or ZIP | service location |
| Service type | HVAC / Plumbing / etc. |
| Problem summary | free-text |
| Urgency | today / this week / emergency |
| Permission to text |   • opt-out instructions |
| Best callback time | if not booking |

### SMS Intake Templates (v1)

**Message 1** — *immediate, after missed call:*

> "Missed you — I can help get this scheduled. What's the service address ZIP + what's going on? Reply STOP to opt out."
> 

**Message 2** — *if no response in 3 min:*

> "Are you looking for HVAC, plumbing, electrical, or roofing? ZIP + short description is perfect."
> 

**Booking close** — *soft-book:*

> "I can hold a time. What works: (1) Today 3–5, (2) Tomorrow 9–11, (3) Tomorrow 1–3?"
> 

---

## 8) Routing + Escalation Decision Tree 🧠

1. **Is urgency high?**
    - ✅ Yes → `lead.escalated` → notify on-call (call + SMS) + send lead summary
    - ❌ No → continue
2. **Is booking enabled?**
    - ✅ Yes → soft-book default (proven safer than hard-book conflicts)
    - ❌ No → dispatcher handoff
3. **If downstream fails** (CRM / calendar / SMS):
    - Attempt retries → if still failing → `workflow.failed` + notify you + send fallback message to lead

---

## 9) Scheduling Strategy

### Default: Calendar soft-book

- Propose 2–3 slots based on client availability rules
- Once customer confirms → create calendar event + send confirmation

### Alternate: Dispatcher handoff

- Send structured summary to dispatcher/owner instantly

---

## 10) Single-Page Implementation Spec 📄⚙️

### 10.1 Normalized event types

```
call.missed
call.answered          # analytics
voicemail.received
sms.received
form.lead_received
lead.qualified
lead.escalated
lead.booked
lead.handed_off
workflow.failed
workflow.recovered
```

### 10.2 Webhook endpoints (minimum)

**Telephony provider → your orchestration**

| **#** | **Endpoint** | **Purpose** |
| --- | --- | --- |
| 1 | `POST /webhooks/telephony/call-status` | Detect `no-answer` / `busy` / `failed` via provider call progress events |
| 2 | `POST /webhooks/telephony/voicemail` | Recording URL + metadata (provider-specific) |
| 3 | `POST /webhooks/telephony/sms-inbound` | Inbound SMS payload (`From` / `To` / `Body` etc.) |
| 4 | `POST /webhooks/forms/lead` | Website / LSA form lead payload |

> **Telnyx note:** call control webhooks include events like `call.initiated`, `call.answered`, `call.hangup`.
> 

### 10.3 Core data model (minimum)

```
-- accounts
account_id (pk), name, vertical
service_area_zips[]
hours_json
escalation_contacts_json
routing_rules_json

-- numbers
number_id (pk), account_id (fk)
phone_number, provider, status

-- leads
lead_id (pk), account_id (fk)
source (call/voicemail/sms/form)
caller_phone, customer_name?
service_zip?, service_type?, urgency?
status (new/qualifying/qualified/escalated/booked/closed)
created_at, updated_at

-- events (append-only)
event_id (pk), account_id, lead_id?
event_type
provider_event_id (dedupe key)
payload_json
occurred_at

-- conversations
conversation_id (pk), lead_id
channel (sms/voice)
transcript_json
summary_text?
outcome (qualified/escalated/booked/handoff/failed)
created_at
```

### 10.4 Reliability rules (idempotency + retries)

**Dedupe**

- Unique constraint on `provider_event_id` in `events`
- Ignore duplicates (always safe to reprocess from log)

**Retry policy (downstream actions)**

- 3 attempts: **30 s → 2 min → 10 min**
- After max retries: emit `workflow.failed` + escalate to human + fallback message

**Fallback ladder**

1. Voice flow fails → SMS intake
2. SMS fails → email + on-call notify
3. CRM/calendar fails → store locally + notify + send dispatcher summary

### 10.5 Webhook security

- Validate provider signatures where available (Twilio sends `X-Twilio-Signature`)

---

## 11) Monitoring + Runbook (Solo-Friendly)

### Health signals

- Workflow failures (by account)
- Provider webhook latency
- Booking create failures
- Message delivery failures

### Alerts

<aside>
🚨

Immediate SMS to you on `workflow.failed` or `lead.escalated`.

</aside>

### Daily (10–20 min)

- [ ]  Check failures queue
- [ ]  Spot-check 3 random leads
- [ ]  Update scripts if confusion pattern emerges

### Weekly (30–60 min)

- [ ]  KPI report + ship 1 improvement (script / routing / booking logic)

---

## 12) Compliance Defaults (v1 Safe Posture) ⚖️

### SMS opt-out handling

- **Always** include: "Reply STOP to opt out."
- Maintain suppression list + honor "reasonable" revocations (rules/effective dates can change; some deadlines were extended)

### Call recording disclosure

- **Default:** play disclosure at call start — *"This call may be recorded for quality."* — unless client disables
- Minnesota is commonly summarized as **one-party consent** under Minn. Stat. § 626A.02(2)(d)
- Cross-state calls can complicate → safest is **always disclose**

### Data retention (v1)

| **Data type** | **Retention** |
| --- | --- |
| Transcripts / recordings | 90 days (default) |
| Aggregated KPI metrics | 12 months |
| Client purge requests | Honored anytime |

---

## 13) Weekly Report Template 📊

**Header:** week range + *"MN Network: Operational"* status

### KPIs

- Total inbound calls
- Missed calls captured
- Response time (median)
- Qualified leads
- Booked jobs / handoffs
- Escalations
- Failures (and resolution)

### Insights

- Top 3 lead types
- Top 3 missed-call windows (time / day)
- Recommended change shipped this week

### Action plan (next week)

- 1 script improvement
- 1 routing / scheduling improvement
- 1 offer / FAQ improvement

---

## 14) Multi-Tenant Scalability 🧱

- One **"template" account config** → clone per new client
- Per-client secrets in a vault (Notion stores **maps**, not secrets)
- **Versioned scripts/prompts** — change log required for every modification
- **Replayer:** ability to replay an event from `events.payload_json` safely (idempotent)

---

## 15) Manus Capability Matrix ✅

### What Manus is good for (reliable fit)

- Task-based agent workflows via API (projects / tasks / files / webhooks)
- Connectors for Gmail / Google Calendar / Notion + Slack + Zapier
- OpenAI-compatible SDK patterns (integration convenience)

### What Manus is NOT (by itself)

<aside>
⚠️

Not a telephony provider — you still need **Twilio/Telnyx** for call/SMS events (event backbone).

</aside>

### Best v1 role for Manus (simple + high leverage)

- Use **Twilio/Telnyx + n8n** as the deterministic event router
- Use Manus only where "reasoning" adds value:
    - Generate the structured lead summary from transcripts
    - Decide: escalate vs qualify vs book (within strict rules)
    - Write weekly report narrative + recommendations

---

## 16) What You Can Sell Immediately 🎁

<aside>
💰

**Client-facing deliverable pack:**

- **"Missed Call Lockdown"** installed (number + workflows)
- Same-day test evidence (screenshots / logs)
- Weekly report
- Zip exclusivity
</aside>