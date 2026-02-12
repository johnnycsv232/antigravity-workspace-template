# Orchestration Rules (Always On)

## Roles (no overlap)

- Planner: decomposes into atomic tasks, defines acceptance tests.
- Builder: implements changes only from the plan.
- QA: writes/updates tests, runs verification, reports failures precisely.
- Reviewer/Security: checks for secrets, injection risk, dangerous commands, authz boundaries.

## Handoff protocol

Every handoff must include:

- Goal
- Files touched (or planned)
- Verification command(s)
- Acceptance criteria (3 bullets max)

## Parallel vs Sequential

- Parallel only if tasks are independent (different files/modules).
- Sequential if outputs are upstream dependencies (schema → api → ui).

## State management

- Maintain a single canonical task list artifact.
- Keep decisions in a short "Decisions" section (max 10 bullets).
