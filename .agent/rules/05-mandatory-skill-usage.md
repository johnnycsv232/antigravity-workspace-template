# Mandatory Skill Usage (Always On)

## Directive

Before implementing any task that falls within an installed skill's domain, you MUST:

1. **Check `.antigravity/skills/`** for a relevant skill.
2. **Read the skill's `SKILL.md`** to load its instructions, patterns, and best practices.
3. **Follow the skill's guidance** during implementation — do not improvise when a skill exists.

## Skill Lookup Protocol

- Before writing code, building features, or configuring integrations, scan skill names for a match.
- If multiple skills are relevant, load ALL of them (e.g., `stripe-integration` + `nextjs-best-practices` for a payment page).
- If no skill exists for the domain, proceed normally and note the gap.

## Domain → Skill Quick Reference

| When working on... | Load these skills |
|---|---|
| Twilio / SMS / calls | `twilio-communications` |
| Stripe / billing | `stripe-integration`, `stripe-automation` |
| n8n / workflow automation | `n8n-mcp-tools-expert`, `n8n-node-configuration`, `n8n-code-python` |
| Email campaigns | `email-sequence`, `email-systems`, `mailchimp-automation` |
| Sales / outreach | `sales-automator`, `linkedin-automation`, `marketing-psychology` |
| Analytics / tracking | `posthog-automation`, `google-analytics-automation`, `analytics-tracking` |
| KPI / dashboards | `kpi-dashboard-design` |
| Next.js / React frontend | `nextjs-best-practices`, `nextjs-app-router-patterns`, `react-best-practices` |
| UI components | `shadcn-ui`, `tailwind-design-system`, `react-components` |
| SEO | `seo-fundamentals`, `seo-meta-optimizer`, `programmatic-seo` |
| Database / Postgres | `postgres-best-practices`, `database-design` |
| Node.js backend | `nodejs-backend-patterns`, `api-design-principles` |
| Firebase | `firebase` |
| Docker / containers | `docker-expert` |
| Deployment | `vercel-deployment`, `gcp-cloud-run` |
| CI/CD | `cicd-automation-workflow-automate`, `github-actions-templates` |
| Testing | `playwright-skill`, `e2e-testing-patterns`, `javascript-testing-patterns` |
| Security review | `security-auditor`, `api-security-best-practices` |
| Calendar / scheduling | `google-calendar-automation` |
| Notion | `notion-automation` |
| Slack | `slack-automation` |
| Web scraping | `firecrawl-scraper`, `browser-automation` |
| Zapier / Make | `zapier-make-patterns` |
| Stitch / UI design | `design-md`, `enhance-prompt`, `stitch-loop` |
| Video / animation | `remotion` |
| Full-stack features | `full-stack-orchestration-full-stack-feature`, `senior-fullstack` |
| TypeScript | `typescript-expert` |
| Marketing content | `marketing-ideas`, `marketing-psychology` |

## Enforcement

- Skipping a relevant skill is a rule violation.
- If a skill's guidance conflicts with another rule, the other rule wins (security > skill).
- After using a skill, cite it in your proof artifact: `Skill used: [skill-name]`.
