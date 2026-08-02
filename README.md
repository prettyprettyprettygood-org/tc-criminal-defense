# Carol I. Zacheiss, Attorney at Law

Marketing site for Carol I. Zacheiss, a criminal defense attorney serving Hopewell, Prince George, and Petersburg, Virginia.

**Live:** https://tricitiescriminallaw.com (hosted on Vercel)

This site was built from an internal Astro starter template, then customized for this client. It's now a standalone project — changes here are specific to this client, not reusable template work.

## Standards

- WCAG 2.2 AA baseline.
- Full keyboard navigation and visible focus styles.
- Semantic HTML first, ARIA only when required.
- Theme tokens and reusable components (no hard-coded component colors).
- Validation before completion: typecheck, lint, tests, build.

Reference docs:

- docs/STANDARDS.md
- docs/WCAG_2.2_CHECKLIST.md
- docs/SITE_PLAN.md
- docs/agents/site-builder/README.md
- PROJECT_BRIEF.md (client scope, contacts, and open items)

## Local Quick Start

1. Clone this repository.
2. Install dependencies.
3. Start the development server.
4. Confirm git hooks are installed for commit-time checks.

Commands:

- npm install
- npm run dev
- npm run hooks:install

## Validation Commands

- npm run typecheck
- npm run lint
- npm run test
- npm run build
- npm run validate

CI:

- GitHub Actions workflow: .github/workflows/ci.yml

## Commit Guardrails (Solo Main Workflow)

This repo installs a local pre-commit hook from `.githooks/pre-commit`.

- Hook command: `npm run precommit:check`
- Checks run on commit: typecheck, lint, tests
- Manual install/reinstall: `npm run hooks:install`

This gives fast local quality checks before each commit, even when working directly on `main`.

## Deployment

- Hosted on Vercel, deployed from `main`.
- Production domain: tricitiescriminallaw.com.

## Project Structure

```text
.
├── .github/
│   ├── copilot-instructions.md
│   ├── instructions/
│   └── prompts/
├── docs/
│   ├── agents/
│   │   └── site-builder/
│   ├── PROJECT_BRIEF_TEMPLATE.md
│   ├── SITE_PLAN.md
│   ├── STANDARDS.md
│   └── WCAG_2.2_CHECKLIST.md
├── src/
│   ├── components/
│   │   ├── layout/
│   │   └── ui/
│   ├── config/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── .env.example
└── package.json
```

## Included Baseline UI

- Reusable layout with skip link, navbar, and footer.
- Reusable card and button components.
- Theme token system with primary/secondary/accent colors defined in src/styles/global.css.
- Reusable styled dropdown with progressive enhancement (native select fallback).
- Four live pages: `/` (Home), `/about`, `/practice-areas`, `/contact`.

Note: `/example` is a leftover component-catalog page from the starter template. It's excluded from the sitemap/robots and redirects to Home outside local dev — safe to delete once it's no longer needed as a reference.

## Optional Backend

Backend features are not included by default.

If backend behavior is explicitly requested (e.g. a working contact form), see:

- docs/agents/template-maintainer/BACKEND_ENABLEMENT.md

## Agent Workflow

For AI-assisted implementation on this project:

1. PROJECT_BRIEF.md is the source of truth for client scope, contacts, and open items.
2. Use docs/agents/site-builder/README.md as the default work mode — reuse existing components, tokens, and structure rather than adding new ones.
3. Run npm run validate and resolve failures before considering work complete.

## Notes

- Keep docs current as the site evolves.
