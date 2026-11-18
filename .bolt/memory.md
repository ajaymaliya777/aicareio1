# Project memory

## Product intent & audience

- Public-facing marketing/company website with multiple pages: services, company, case-studies, contact
- Contact form submissions routed to backend API

## Brand personality & voice

- Not yet inferred

## Visual design & UX direction

- SPA built with React + TypeScript (Vite)
- React routes replace former static HTML pages: `/services`, `/company`, `/case-studies`, `/contact`
- Hosting config includes SPA redirect/fallback rule so direct deep-link visits serve the React app
- Sitemap updated to point to React routes rather than static `.html` files

## Decisions, constraints & rationale

- Legacy static HTML/CSS/JS files were removed; project is now exclusively React + TypeScript app + Node backend
- Plain JS/CSS and duplicate static pages are no longer maintained
- API proxy setting moved into TypeScript config so form submissions continue working after legacy file removal
- Old automated tests/checks tied to static pages were removed; new tests not yet written
- User strongly prefers TypeScript/Node-only — avoid reintroducing raw HTML/CSS/JS files

## Open questions & assumptions

- New automated checks for the current React/TypeScript setup are desired but not yet specified
- Exact styling/design system details not yet provided