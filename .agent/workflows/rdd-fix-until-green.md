---
description: Fix failing tests/build/lint using verify-first RDD loop
---
# RDD: Fix Until Green

// turbo-all

1. Identify the failing verification signal (tests/build/lint).

   ```bash
   pytest --tb=short -q
   ```

2. If no regression test exists for the failure, write/adjust the smallest test to reproduce it.

3. Implement the minimal fix. One issue per loop iteration.

4. Re-run the exact same verification command from step 1.

5. If still failing after 3 loops, stop and produce:
   - **Minimal Repro**: smallest failing file/test
   - **Diagnosis**: root cause hypothesis + evidence (logs/error)
   - **2 Options**: next two approaches to try

6. When green, provide:
   - **Proof**: command output showing pass
   - **Files changed**: list with brief "why"
   - **Commands run**: full verification trail
