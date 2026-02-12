# 🛸 Antigravity Directives (v2.0)

## Canonical Rules

> **All behavioral rules are defined in `.agent/rules/` (modular, numbered files).**
> This file exists for backward compatibility with tools that read `.antigravity/rules.md`.

### Rule Index

| File | Domain |
|------|--------|
| `00-core-identity.md` | Persona, tone, IronClad context |
| `05-mandatory-skill-usage.md` | Skill lookup protocol |
| `10-rdd-loop.md` | Verify-first execution loop |
| `20-orchestration.md` | Planner/Builder/QA/Reviewer roles |
| `30-security-guardrails.md` | Secrets, denylist, TCPA compliance |
| `40-code-standards.md` | Code quality, typing, docstrings |
| `50-proof-and-tracking.md` | Artifacts, proof, traceability |

## Core Directives (Summary)

1. **Mission-First**: Read `mission.md` before any task.
2. **Artifact-First**: Create `artifacts/plan_[task_id].md` before touching `src/`.
3. **Verify-First**: Work is not done until verified by tool output or concrete artifact.
4. **Skill-First**: Check `.antigravity/skills/` before implementing any domain task.

## Coding Standards

- **Type Hints**: All Python code MUST use strict type hints.
- **Docstrings**: All functions and classes MUST have Google-style docstrings.
- **Pydantic**: Use `pydantic` models for all data structures.
- **Tools**: All external API calls MUST be wrapped in `src/tools/`.

## Context Awareness

- `.context/` files are auto-injected into the agent system prompt.
- `.agent/rules/` define behavioral constraints.
- `.agent/workflows/` define repeatable processes.
- `.antigravity/skills/` provide domain-specific implementation guidance.

## Capability Scopes

### 🌐 Browser Control

- **Allowed**: Verify docs links, fetch library versions.
- **Restricted**: No form submissions or logins without user approval.

### 💻 Terminal Execution

- **Preferred**: Use `pip install` inside virtual environment.
- **Restricted**: Never run destructive commands (see `30-security-guardrails.md`).
- **Guideline**: Always run `pytest` after modifying logic.
