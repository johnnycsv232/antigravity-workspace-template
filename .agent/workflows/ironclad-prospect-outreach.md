---
description: Run the IronClad cold outreach campaign to acquire pilot clients
---
# IronClad Prospect Outreach Campaign

## Prospect Identification

1. **Load prospect list** from `docs/ironclad/data/prospects_firecrawl.json`
   - 21 verified HVAC contractors in Hennepin County

2. **Score each prospect** using the signal system:

   | Signal | Points |
   |--------|--------|
   | No after-hours answering service | +3 |
   | Call went to voicemail, no text-back | +3 |
   | 50+ Google reviews (high call volume) | +2 |
   | Response time > 30 min | +2 |
   | Claims 24/7 but doesn't answer | +2 |
   | Active Google Ads / LSA | +1 |

   **🔥 Hot: 10+ · ⚡ Warm: 7–9 · ❄️ Cool: <7**

## After-Hours Demo Test

1. **Call top-scored prospects after hours** to test their response:
   - Record: did anyone answer? voicemail? text-back?
   - Note response time
   - This IS your proof-of-concept demo data

## Email Sequence (4 emails over 14 days)

1. **Day 0** — "You're losing $2,000+ every month to missed calls"
2. **Day 3** — "How IronClad captures missed calls in under 10 seconds"
3. **Day 7** — Social proof / case study email
4. **Day 14** — "Should I close your file?" (breakup email)

   **Best send times:** Tue–Thu, 8–10 AM
   **Always personalize:** business name + industry

## Close

1. **Book demo** — use 15-minute demo script
2. **Close at Pro tier** ($197/mo + $249 setup)
3. **Trigger onboarding workflow**: `/ironclad-onboard-client`

## Reference

- Email templates: `docs/ironclad/sales-marketing/IronClad — Cold Outreach Email Sequences*.md`
- Demo script: `docs/ironclad/sales-marketing/IronClad_Demo_Script.md`
- Objection handling: `docs/ironclad/sales-marketing/IronClad — Objection Handling Guide*.md`
- Prospect data: `docs/ironclad/data/prospects_firecrawl.json`
