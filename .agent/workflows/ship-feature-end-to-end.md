---
description: Ship a feature end-to-end with plan, build, test, and security review
---
# Ship Feature End-to-End

1. **Planner**: Write plan in `artifacts/plan_[feature].md`:
   - Acceptance criteria (3 bullets max)
   - Files to create/modify
   - Verification commands
   - Dependencies (schema → api → ui order)

2. **Builder**: Implement strictly to plan.
   - Follow coding standards from `.agent/rules/40-code-standards.md`
   - One commit-sized change at a time

3. **QA**: Add tests and run verification.
   // turbo

   ```bash
   pytest --tb=short -q
   ```

4. **Reviewer/Security**: Scan for:
   - Secrets or tokens in code
   - Injection risks (SQL, XSS, command injection)
   - Dangerous operations (file deletion, destructive DB ops)
   - Auth boundary violations

5. **Produce final Proof artifact** in `artifacts/`:
   - Test results
   - Files changed with "why"
   - Screenshot/recording if UI change
