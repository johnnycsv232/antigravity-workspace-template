# RDD: Verify-First Execution Loop (Always On)

## Definition

Work is not "done" until verified by a tool result (tests/build/lint/e2e) or a concrete artifact (screenshot/recording).

## Loop Contract

Repeat:

1) Identify failing signal (test/build/lint/runtime error)
2) Make the smallest change that could fix it
3) Re-run the exact verification
4) Stop when green + no new regressions

## Hard Stop Conditions

- Max iterations: 6
- If still failing after 3 iterations:
  - Produce a Minimal Repro (smallest failing file/test)
  - Produce a Diagnosis block:
    - root cause hypothesis
    - evidence (logs/error)
    - next 2 options

## Scope control

- One loop = one issue.
- No refactors unless required to fix root cause.
