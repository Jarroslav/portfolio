import { useReveal } from '../hooks/useReveal'
import './Stack.css'

const CARDS = [
  {
    label: 'Quality Engineering',
    variant: 'green',
    items: ['Test architecture', 'Playwright · Cypress', 'CI/CD & governance', 'Traceability'],
  },
  {
    label: 'Languages & Cloud',
    variant: 'blue',
    items: ['TypeScript', 'Azure DevOps', 'Azure AI Foundry', 'Node · SQL'],
  },
  {
    label: 'Agentic & AI',
    variant: 'violet',
    items: ['Agentic SDLC', 'Human-in-the-Loop', 'MCP integrations', 'AI orchestration'],
  },
  {
    label: 'Full-stack',
    variant: 'orange',
    items: ['Next.js 15', 'Supabase · Postgres', 'RBAC · realtime', 'Release ops'],
  },
]

export function Stack() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="stack" ref={ref} data-reveal className="stack container">
      <div className="stack__header">
        <h2 className="stack__title">Stack &amp; focus</h2>
        <span className="stack__tag">03 — Toolkit</span>
      </div>
      <div className="stack__grid">
        {CARDS.map((card) => (
          <div className="stack__card" key={card.label}>
            <div className={`stack__label stack__label--${card.variant}`}>{card.label}</div>
            <div className="stack__items">
              {card.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://www.linkedin.com/in/yaroslav-krivushenko/details/certifications/"
        target="_blank"
        rel="noopener"
        className="stack__cert"
      >
        <span className="stack__cert-label">Anthropic Certified · 2026</span>
        <span className="stack__cert-divider" />
        <span className="stack__cert-text">
          Claude Code · MCP · Agent Skills · Claude API · AI Fluency
        </span>
        <span className="stack__cert-verify">Verify ↗</span>
      </a>
    </section>
  )
}
