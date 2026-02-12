# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| main    | ✅ Active |

## Reporting a Vulnerability

If you discover a security vulnerability in IronClad, please report it responsibly:

1. **DO NOT** open a public GitHub issue
2. Email: **<finan@ironclad.ai>** with subject line: `[SECURITY] <brief description>`
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will acknowledge receipt within **48 hours** and provide a resolution timeline within **5 business days**.

## Security Practices

### Secrets Management

- All secrets stored in `.env` (gitignored)
- `.env.example` documents required variables without values
- Docker images exclude `.env` via `.dockerignore`
- CI/CD uses GitHub Secrets — never hardcoded

### Compliance

- **TCPA**: All outbound calling complies with Telephone Consumer Protection Act
- **Call Recording Disclosure**: All recorded calls include disclosure per state laws
- **Data Retention**: Customer data handled per IronClad privacy policy

### Dependencies

- Dependabot monitors Python and GitHub Actions dependencies weekly
- Security advisories trigger immediate patch review

## Scope

The following are in scope for security reports:

- Agent framework (`src/`)
- API endpoints and webhooks
- Authentication and authorization
- Data handling and storage
- Twilio/Stripe integration security
- Docker container security

Out of scope:

- Third-party service vulnerabilities (report to the respective vendor)
- Social engineering attacks
- Documentation content
