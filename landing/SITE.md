---
stitch-project-id: ""
---
# Project Vision & Constitution

> **AGENT INSTRUCTION:** Read this file before every iteration. It serves as the project's long-term memory for the stitch-loop workflow.

## 1. Core Identity
* **Project Name:** IronClad AI Landing
* **Stitch Project ID:** _pending_ (set in `stitch.json` after Stitch MCP is connected)
* **Mission:** Convert HVAC and home-service operators into booked demos for IronClad's missed-call capture platform.
* **Target Audience:** HVAC owners, operations managers, and dispatch coordinators.
* **Voice:** Direct, credible, outcome-oriented, and practical.

## 2. Visual Language (Stitch Prompt Strategy)
*Strictly adhere to these descriptive rules when prompting Stitch. Do not include code in prompts.*

* **The "Vibe" (Adjectives):**
    * *Primary:* **Operationally Confident** (clear structure, decisive calls-to-action)
    * *Secondary:* **Modern Technical** (clean data-forward visuals)
    * *Tertiary:* **Trustworthy** (evidence-heavy and grounded)

* **Color Philosophy (Semantic):**
    * **Backgrounds:** Deep navy gradient system to keep the brand technical and focused.
    * **Accents:** Mint-cyan highlights for CTA emphasis and conversion cues.
    * **Text:** Bright white for hierarchy and cool-muted blue-gray for supporting copy.

## 3. Architecture & File Structure
* **Root:** `landing/site/public/`
* **Asset Flow:** Stitch generates to `landing/queue/` -> validate -> move to `landing/site/public/`
* **Navigation Strategy:**
    * **Global Header:** Product, How It Works, Proof, Pricing, Book Demo
    * **Global Footer:** Compliance, FAQs, Contact, Terms

## 4. Live Sitemap (Current State)
*The agent MUST update this section when a new page is merged.*

* [x] `index.html` - Primary landing page experience (Vite app mirrors this structure).
* [ ] `proof.html` - Results, testimonials, and trust artifacts.
* [ ] `pricing.html` - Offer structure, guarantee, and conversion CTA.
* [ ] `faq.html` - Objection handling and readiness FAQs.

## 5. The Roadmap (Backlog)
*If `next-prompt.md` is empty or completed, pick the next task from here.*

### High Priority
- [ ] **Proof Page:** Case-study metrics, social proof, and reliability guarantees.
- [ ] **Pricing Page:** Package breakdown with clear CTA and risk reversal.
- [ ] **FAQ Page:** Sales-objection answers and implementation clarity.

### Medium Priority
- [ ] **Industries Page:** Expansion verticals beyond HVAC.
- [ ] **Integration Page:** CRM, calendar, and communications stack compatibility.

## 6. Creative Freedom Guidelines
*When roadmap items are done, follow these rules to extend the site.*

1. **Stay On-Brand:** Keep design and messaging operational, not whimsical.
2. **Enhance Conversion:** Every new page should support booked demos.
3. **Naming Convention:** Use lowercase, descriptive filenames.

### Ideas to Explore
*Pick one, build it, then remove it from this list.*

- [ ] `roi-calculator.html` - Estimate recovered revenue from missed calls.
- [ ] `compliance.html` - SMS/TCPA compliance approach.
- [ ] `playbooks.html` - Install and onboarding workflow examples.

## 7. Rules of Engagement
1. Do not recreate pages already marked complete in Section 4.
2. Always update `next-prompt.md` before completing an iteration.
3. Consume roadmap/creative items as they are used.
4. Keep the loop moving by handing off a concrete next page.
