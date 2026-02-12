import './App.css'

const readinessChecklist = [
  'Brand direction and color system are defined in CSS tokens',
  'Section scaffolding is in place for Hero, Proof, Process, and CTA',
  'Copy source docs are linked for quick writer-designer handoff',
  'Local dev, lint, and production build commands are wired',
  'CI workflow can validate the landing app independently',
]

const implementationBacklog = [
  'Replace placeholder copy with final messaging',
  'Add production illustrations, logos, and case-study visuals',
  'Wire lead capture form endpoint and analytics events',
  'Implement final responsive polish and accessibility QA',
  'Publish via your preferred host (Vercel, Netlify, or Cloudflare Pages)',
]

function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="eyebrow">Landing Page Workspace</p>
        <h1>Ready-to-build foundation for the IronClad landing page</h1>
        <p className="subtitle">
          This app is now configured as your execution base. Next work should focus on messaging,
          visual design, and conversion UX instead of setup.
        </p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="../docs/ironclad/sales-marketing/IronClad_Landing_Page_Copy.md"
            target="_blank"
            rel="noreferrer"
          >
            Open Copy Source
          </a>
          <a
            className="button button-secondary"
            href="../docs/en/LANDING_PAGE_FOUNDATION.md"
            target="_blank"
            rel="noreferrer"
          >
            Open Build Guide
          </a>
        </div>
      </header>

      <main className="grid">
        <section className="panel">
          <h2>Readiness Checklist</h2>
          <ul>
            {readinessChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="panel">
          <h2>Implementation Backlog</h2>
          <ul>
            {implementationBacklog.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="panel panel-wide">
          <h2>Page Section Map</h2>
          <div className="section-map">
            <article>
              <h3>01. Hero + Offer</h3>
              <p>One clear promise, supporting proof, and a single primary CTA.</p>
            </article>
            <article>
              <h3>02. Problem + Stakes</h3>
              <p>Quantify missed-call cost and urgency for HVAC businesses.</p>
            </article>
            <article>
              <h3>03. How It Works</h3>
              <p>Three-step operational flow with realistic screenshots or diagrams.</p>
            </article>
            <article>
              <h3>04. Proof + Cases</h3>
              <p>Testimonials, before/after metrics, and trust badges.</p>
            </article>
            <article>
              <h3>05. Pricing + CTA</h3>
              <p>Package table with risk-reversal and direct booking conversion.</p>
            </article>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
