# IronClad AI Agent Skill Analysis & Custom Build Report

**Date:** February 11, 2026
**Author:** Manus AI

## 1. Introduction

Per your request to leverage `/internet-skill-finder` and `/skill-creator`, I have completed a comprehensive analysis of the Agent Skill ecosystem in the context of the IronClad project. This report details the process, findings, and the custom skills built to create a specialized AI Founder Agent tailored to IronClad's unique operational methodologies.

The process followed these steps:
1.  **Context Ingestion:** Analyzed the Master System Prompt and Build Orchestration documents to understand IronClad's specific needs, mandated tech stack, and proprietary workflows.
2.  **Broad Skill Search:** Queried 7 verified GitHub skill repositories using over 20 keywords relevant to IronClad's domains (e.g., `n8n`, `stripe`, `twilio`, `nextjs`, `supabase`, `hubspot`, `scraping`).
3.  **Gap Analysis:** Compared the functionality of existing public skills against the strict requirements of the IronClad project, identifying critical gaps where no off-the-shelf skill would suffice.
4.  **Custom Skill Creation:** Designed, built, and validated 5 new, custom Agent Skills that encode IronClad's core proprietary processes, transforming the general-purpose agent into a specialized AI co-founder.

## 2. Existing Skills Analysis

The search yielded several potentially useful skills, primarily from the `ComposioHQ/awesome-claude-skills` repository. However, a significant limitation is that most of these skills rely on an intermediary MCP server (`Rube`), which may not align with IronClad's goal of direct API control and minimal dependencies. 

Below is a summary of the most relevant public skills and their applicability to IronClad.

| IronClad Need | Existing Public Skill | Fit | Analysis & Recommendation |
| :--- | :--- | :--- | :--- |
| **Stripe Billing** | `stripe-automation` | **Partial** | Provides basic customer, subscription, and invoice management via an MCP server. **GAP:** Lacks direct Stripe API control and the specific logic for IronClad's setup fee + recurring plan structure. |
| **HubSpot CRM** | `hubspot-automation` | **Partial** | Manages contacts, deals, and tickets via an MCP server. **GAP:** Does not include the specific sales pipeline automation or prospect scoring logic required. |
| **Mailchimp** | `mailchimp-automation` | **Partial** | Manages campaigns and audiences via an MCP server. **GAP:** Lacks templates for IronClad's specific cold outreach and onboarding sequences. |
| **Vercel Deploy** | `vercel-automation` | **Good** | Provides tools for managing deployments, logs, and domains. Can be used for monitoring build status. |
| **Slack Notify** | `slack-automation` | **Partial** | Sends messages via an MCP server. **GAP:** Does not include the formatted lead notification blocks specified in the build plan. |
| **Web Testing** | `webapp-testing` | **Good** | A solid toolkit for Playwright-based testing of the Next.js application. Recommended for use. |
| **Debugging** | `systematic-debugging` | **Excellent** | A methodology-focused skill that perfectly aligns with IronClad's principle of robust, root-cause-first engineering. Highly recommended. |
| **Security** | `owasp-security`, `defense-in-depth` | **Good** | Provide valuable checklists and best practices for securing the application. Recommended for use. |

### Conclusion: Critical Gaps Identified

The analysis revealed that while some generic skills exist for popular platforms, **no public skills address IronClad's specific, opinionated, and proprietary workflows**. The core logic that makes IronClad unique—its validation gates, conversion psychology, tech stack enforcement, and core product flow—is entirely missing from the public skill ecosystem. Relying on existing skills alone would fail to capture the essence of the project.

## 3. Custom Skills Built for IronClad

To address these gaps, I have created 5 new, high-impact skills that directly codify the methodologies outlined in your project documents. These skills transform the agent from a generalist into a specialist that understands and executes the IronClad way.

### How to Use These Skills

Each skill is attached to this message as a `.md` file. To add them to your Manus workspace, simply drag and drop each file into the Manus chat window or use the `/skill` command and select "Import Skill". They will then be available for use via `/slash` commands.

--- 

### 1. `ironclad-stitch-loop`

**Description:** Mandatory UI generation and validation loop for all IronClad frontend components. Use when creating any page, component, or screen for the IronClad web app. Enforces the ENHANCE → GENERATE → VALIDATE 12-point → LOOP workflow. No UI ships without passing this loop.

**Why it was built:** This skill operationalizes the entire Google Stitch MCP design process. It ensures every single UI component is built to spec, adheres to brand guidelines, and passes the rigorous 12-point technical validation matrix before it can be shipped. It is the core engine for building the IronClad frontend.

### 2. `ironclad-compatibility-validator`

**Description:** Tech stack compatibility validation for IronClad builds. Use BEFORE writing any code. Produces the mandatory Compatibility Report: version research, integration pair checks, edge-case analysis, and founder approval gate. Blocks builds until all pairs verified and under 20 deps.

**Why it was built:** This skill enforces the critical "Research First, Then Build" and "No Hardcoded Versions" principles. It forces a systematic evaluation of the tech stack *before* a single line of code is written, preventing costly integration issues, dependency bloat, and out-of-date package usage. It is the primary risk-mitigation tool for the project.

### 3. `ironclad-conversion-engine`

**Description:** 12-principle conversion psychology scoring engine for all IronClad customer-facing copy. Use when writing or reviewing any landing page copy, email sequence, ad, pitch, SMS template, or sales script. Scores each principle 1-5. All must score 4+ before shipping.

**Why it was built:** This skill embeds deep marketing and sales expertise directly into the agent. It ensures every word written for customers is psychologically optimized for conversion, targeting the specific mindset of home-service contractors. It transforms the agent from a simple writer into a strategic copywriter.

### 4. `ironclad-twilio-engine`

**Description:** Twilio voice/SMS missed-call detection and AI text-back engine for IronClad. Use when building, configuring, or debugging the core missed-call capture flow (webhook setup, TwiML responses, SMS text-back, AI qualification, lead capture, contractor notifications). Includes cost estimates and n8n integration.

**Why it was built:** This skill contains the complete technical blueprint for IronClad's core product. It details the architecture, webhook logic, API routes, AI integration, and security considerations for the missed-call capture system. It is the central knowledge base for building and maintaining the product itself.

### 5. `ironclad-ssot-enforcer`

**Description:** Single Source of Truth enforcement for IronClad brand, pricing, copy, and stats. Use when creating or updating any customer-facing asset (landing page, email, ad, pitch deck, Stripe products, onboarding docs, social posts). Ensures zero drift from `constants.ts`.

**Why it was built:** This skill prevents brand and messaging fragmentation. It acts as a linter for all content, ensuring that pricing, brand colors, fonts, and key statistics are perfectly consistent across every single asset, from the landing page to the Stripe checkout to the sales deck. It is the guardian of IronClad's brand integrity.

## 4. Final Recommendation

I recommend importing all 5 custom skills into your Manus project immediately. These skills, combined with the foundational public skills for debugging and security, provide a powerful, specialized toolset for building and launching IronClad. The agent is now equipped not just with general knowledge, but with the specific, proprietary workflows that define your business.

The next logical step is to begin the build process, starting with the `ironclad-compatibility-validator` skill to produce the initial Compatibility Report for your review.
