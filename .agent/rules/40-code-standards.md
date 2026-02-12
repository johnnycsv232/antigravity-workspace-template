# Code Quality & Standards (Glob Pattern)

Applies when editing source code files.

## General

- DRY. Prefer small modules over large files.
- Comments explain WHY, not WHAT.
- Add docs to exported/public functions (JSDoc/TSDoc/docstrings).

## TypeScript/JavaScript (/**/*.ts, **/*.tsx,**/*.js, **/*.jsx)

- Prefer explicit types at module boundaries.
- No "any" unless justified in a comment.

## Python (**/*.py)

- Follow PEP 8.
- Prefer type hints on public functions.
- Use Google-style docstrings with Args, Returns, Raises sections.
- Use pydantic for data modeling where complex structures exist.

## Testing

- If you fix a bug, add a regression test.
- Avoid flaky waits; assert stable signals.
- Run pytest after Python changes.

## IronClad-specific patterns

- Webhook endpoints follow the naming convention: `POST /webhooks/{provider}/{event-type}`
- Event types use dot notation: `call.missed`, `lead.qualified`, `workflow.failed`
- All lead data must include: name, phone, zip, service_type, urgency, permission_to_text
