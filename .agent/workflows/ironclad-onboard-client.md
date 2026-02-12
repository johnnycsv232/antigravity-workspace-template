---
description: Onboard a new IronClad client from intake to go-live
---
# IronClad Client Onboarding

## Day 1 — Setup

1. **Collect client intake data** (blockers — must have all before proceeding):
   - [ ] Business hours + after-hours definition
   - [ ] Service zips + exclusions
   - [ ] Services offered + "we do NOT do" list
   - [ ] Dispatch contact(s) + escalation order
   - [ ] Booking preference: handoff vs calendar booking vs CRM ticket
   - [ ] Consent language preference (recording + texting)

2. **Configure IronClad system**:
   - [ ] Provision Twilio number
   - [ ] Set up call forwarding
   - [ ] Build AI greeting + text-back template
   - [ ] Configure n8n workflows (missed call → SMS → qualify → route)
   - [ ] Set urgency keywords (flooding, no heat, gas smell, etc.)

3. **Run end-to-end tests** (all must produce correct results):
   - [ ] Test call → lead record created
   - [ ] Test voicemail → correct routing
   - [ ] Test SMS → logged transcript/summary
   - [ ] Test form lead → confirmation sent
   - [ ] Verify < 10 second response time

## Day 2 — Go Live

1. **Activate live call forwarding**

2. **Client confirmation**:
   - [ ] Send walkthrough video
   - [ ] Confirm test lead received
   - [ ] Schedule Day 7 check-in
   - [ ] Send "You're Live!" message

## Day 7 — Check-In

1. **Review performance**:
   - [ ] Review leads captured
   - [ ] Share before vs. after report
   - [ ] Adjust AI script if needed
   - [ ] **First referral ask**

## Day 30 — Monthly Review

1. **Full review**:
   - [ ] Pull lead capture report
   - [ ] Calculate ROI
   - [ ] Send Monthly ROI Summary
   - [ ] Collect testimonial / review
   - [ ] Request referrals (offer $50 credit per signup)

## Reference

- SSOT Spec: `docs/ironclad/knowledge-base/IronClad v1 — Locked SSOT Spec*.md`
- Onboarding Checklist: `docs/ironclad/operations/IronClad — Onboarding Checklist*.md`
- FAQ: `docs/ironclad/operations/IronClad — Customer FAQ*.md`
