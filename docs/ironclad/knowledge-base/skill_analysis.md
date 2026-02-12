# IronClad Skill Analysis — Found vs. Gaps

## EXISTING SKILLS FOUND (from 7 verified repos)

### TIER 1 — CORE PRODUCT
| IronClad Need | Existing Skill | Fit | Notes |
|---|---|---|---|
| Stripe billing | stripe-automation (ComposioHQ) | PARTIAL | Uses Rube MCP, not direct Stripe API. Covers customers, subs, invoices. |
| n8n automation | NONE | GAP | No n8n skill exists anywhere |
| Twilio voice/SMS | NONE | GAP | No Twilio skill exists |
| Supabase DB | NONE | GAP | No Supabase skill exists |
| OpenAI integration | NONE | GAP | No OpenAI qualification script skill |

### TIER 2 — SALES & PROSPECTING
| IronClad Need | Existing Skill | Fit | Notes |
|---|---|---|---|
| HubSpot CRM | hubspot-automation (ComposioHQ) | PARTIAL | Uses Rube MCP. Contacts, deals, tickets. |
| Mailchimp email | mailchimp-automation (ComposioHQ) | PARTIAL | Uses Rube MCP. Campaigns, audiences. |
| Apollo prospecting | NONE | GAP | No Apollo skill |
| Firecrawl scraping | NONE | GAP | No Firecrawl skill |
| Cold outreach sequences | NONE | GAP | No cold email/sales skill |

### TIER 3 — WEB PRESENCE
| IronClad Need | Existing Skill | Fit | Notes |
|---|---|---|---|
| Vercel deployment | vercel-automation (ComposioHQ) | GOOD | Deployments, logs, domains. |
| Next.js + Tailwind + shadcn | web-artifacts-builder | LOW | Only for claude.ai artifacts, not full apps |
| PostHog analytics | NONE | GAP | No PostHog skill |
| SEO / Ahrefs | NONE | GAP | No SEO skill |

### TIER 4 — OPERATIONS
| IronClad Need | Existing Skill | Fit | Notes |
|---|---|---|---|
| Slack notifications | slack-automation (ComposioHQ) | PARTIAL | Uses Rube MCP |
| Invoice/billing | invoice-organizer (ComposioHQ) | GOOD | Organizes invoices for tax prep |
| Google Analytics | google-analytics-automation (ComposioHQ) | PARTIAL | Uses Rube MCP |
| Postgres queries | postgres (sanjay3290) | GOOD | Read-only SQL with security |

### CROSS-CUTTING
| IronClad Need | Existing Skill | Fit | Notes |
|---|---|---|---|
| Testing | webapp-testing (Anthropics) | GOOD | Playwright-based web app testing |
| Debugging | systematic-debugging (obra) | EXCELLENT | Root-cause methodology |
| Security | owasp-security | GOOD | OWASP Top 10, code review checklists |
| Security | defense-in-depth (obra) | GOOD | Multi-layered testing & security |
| Env var security | varlock-claude-skill | GOOD | Secure secret management |

## CRITICAL GAPS FOR IRONCLAD (no existing skill)

1. **IronClad Stitch Loop** — The 12-point UI validation engine + Stitch MCP pipeline
2. **IronClad Compatibility Validator** — The 12-point tech stack validation matrix
3. **IronClad Conversion Psychology Engine** — 12-principle copy scoring system
4. **Twilio Voice/SMS Integration** — Missed-call detection + text-back flow
5. **n8n Workflow Builder** — Automation flow design and deployment
6. **Supabase Full-Stack** — DB schema, auth, edge functions, storage
7. **IronClad Prospect Builder** — Apollo + Firecrawl contractor prospecting
8. **IronClad Brand & SSOT Enforcer** — constants.ts enforcement across all assets
