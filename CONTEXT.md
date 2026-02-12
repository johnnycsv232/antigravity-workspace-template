# 🧠 AI-Optimized Project Context: IronClad × Antigravity

## 1. Executive Summary & Core Mission

**Project Name:** IronClad — Antigravity Workspace
**Core Technology:** Google Gemini (optimized for 2.0 Flash+) & Google Antigravity Platform
**Mission:** AI-powered missed-call capture for home-service contractors (HVAC, Plumbing, Electrical, Roofing). When a customer calls and no one answers, IronClad texts back in under 10 seconds — qualifying the lead, booking the appointment, and notifying the business owner.

**Target Market:** Minneapolis / Hennepin County, MN (expanding)
**ICP:** $1M–$20M revenue, 5–50 techs, already getting inbound calls

**Core Philosophy: "Cognitive-First" & "Artifact-First"**
The agent must think like a senior engineer, following a mandatory "Think-Act-Reflect" loop:

1. **Think (Plan):** Create `artifacts/plan_[task_id].md` before touching `src/`.
2. **Act (Execute):** Write clean, modular code following strict standards.
3. **Reflect (Verify):** Verify work via `pytest`; store evidence in `artifacts/logs/`.

---

## 2. Cognitive Architecture & Agent Persona

Rules are modular and stored in `.agent/rules/`:

| File | Domain |
|------|--------|
| `00-core-identity.md` | Persona, tone, IronClad context |
| `05-mandatory-skill-usage.md` | 55 skills, domain-mapped lookup |
| `10-rdd-loop.md` | Verify-first execution loop |
| `20-orchestration.md` | Planner/Builder/QA/Reviewer roles |
| `30-security-guardrails.md` | Secrets, denylist, TCPA compliance |
| `40-code-standards.md` | Code quality, typing, docstrings |
| `50-proof-and-tracking.md` | Artifacts, proof, traceability |

**Persona:** Engineering agent — technical, concise, objective. No filler.

---

## 3. Technical Architecture & Codebase (`src/`)

### 3.1. Single Agent Mode (`src/agent.py`)

- **Dynamic Tool Discovery:** Auto-loads Python files from `src/tools/`.
- **Dynamic Context Loading:** Auto-injects `.context/*.md` into system prompt.
- **Infinite Memory Engine (`src/memory.py`):** JSON-based with recursive summarization.
- **MCP Integration (`src/mcp_client.py`):** Model Context Protocol client for external tool servers.

### 3.2. Multi-Agent Swarm Mode (`src/swarm.py`)

**Router-Worker pattern** with `MessageBus` for inter-agent communication:

- **RouterAgent:** Decomposes tasks, delegates to specialists, synthesizes results.
- **CoderAgent:** Writes production code.
- **ReviewerAgent:** Security audit, code quality, compliance checks.
- **ResearcherAgent:** Gathers external information.

### 3.3. IronClad Tech Stack

| Layer | Technology |
|-------|-----------|
| Telephony | Twilio / Telnyx |
| Orchestration | n8n (event routing) |
| AI | OpenAI (qualification), Gemini (agent) |
| Payments | Stripe |
| Analytics | PostHog |

---

## 4. Environment, DevOps, and Project Structure

- **Dockerized:** `Dockerfile` + `docker-compose.yml`
- **CI/CD:** GitHub Actions (`.github/workflows/test.yml`) — auto-runs `pytest`
- **OpenSpec:** Change management framework in `openspec/`

**Key Directories:**

| Directory | Purpose |
|-----------|---------|
| `.agent/rules/` | Behavioral rules (modular) |
| `.agent/workflows/` | Repeatable processes (7 workflows) |
| `.antigravity/skills/` | 55 domain-specific skill guides |
| `.context/` | Auto-injected knowledge base |
| `src/agents/` | Swarm specialist agents |
| `src/tools/` | Auto-discovered tools |
| `artifacts/` | Plans, logs, screenshots |
| `docs/ironclad/` | Business docs, SSOT spec, sales materials |
| `openspec/` | Change proposals and specs |
| `tests/` | pytest suite |

---

## 5. How to Interact with this Project (For AI Agents)

1. **Read `mission.md`** first — understand the IronClad mission.
2. **Check `.agent/rules/`** — these define your behavioral constraints.
3. **Check `.antigravity/skills/`** — load domain-relevant skills before coding.
4. **Plan before coding** — create `artifacts/plan_[task_id].md`.
5. **Use workflows** — `/ship-feature-end-to-end`, `/rdd-fix-until-green`, etc.
6. **Verify with tests** — run `pytest` after modifying logic.
7. **Produce proof** — test output, screenshots, or build results in `artifacts/`.
8. **IronClad-specific:** Reference the SSOT Spec for all business decisions.
