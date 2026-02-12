# Git Branch Protection — Setup Guide

## Why Branch Protection?

Without branch protection, anyone (or any agent) can push directly to `main`, potentially breaking production or introducing security issues.

## Recommended Settings for `main`

Go to: **GitHub → Settings → Branches → Add branch protection rule**

| Setting | Value | Why |
| --- | --- | --- |
| **Branch name pattern** | `main` | Protects the default branch |
| **Require a pull request before merging** | ✅ On | Forces code review |
| **Required approvals** | 1 | At least one human reviews |
| **Dismiss stale PR reviews** | ✅ On | Re-review after new pushes |
| **Require status checks to pass** | ✅ On | CI must be green |
| **Required checks** | `lint`, `test` | Maps to our CI jobs |
| **Require branches to be up to date** | ✅ On | No stale merges |
| **Require signed commits** | Optional | Extra security for team repos |
| **Do not allow force pushes** | ✅ On | Prevents history rewriting |
| **Do not allow deletions** | ✅ On | Prevents accidental branch deletion |

## Branching Strategy

```plaintext
main ← production-ready code only
  └── feature/<name> ← all development work
  └── fix/<name> ← bug fixes
  └── infra/<name> ← infrastructure changes
```

### Workflow

1. Create branch: `git checkout -b feature/my-feature`
2. Commit changes: `git commit -m "feat: description"`
3. Push: `git push origin feature/my-feature`
4. Open PR → CI runs → Review → Merge

### Commit Convention

```plaintext
feat: new feature
fix: bug fix
infra: infrastructure/config change
docs: documentation update
test: test additions/changes
refactor: code restructure (no behavior change)
```

## Quick Setup via GitHub CLI

```bash
# Install gh CLI if needed: https://cli.github.com/
gh api repos/{owner}/{repo}/branches/main/protection \
  --method PUT \
  --field required_status_checks='{"strict":true,"contexts":["lint","test"]}' \
  --field enforce_admins=true \
  --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true}' \
  --field restrictions=null \
  --field allow_force_pushes=false \
  --field allow_deletions=false
```
