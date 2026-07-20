import { useReveal } from '../hooks/useReveal'
import './About.css'

const BULLETS = [
  'Led the Cypress → Playwright migration of 124 test cases after an auth outage broke the suite — stability to 95%+, and developers started editing tests themselves.',
  'Designed governed agentic QA workflows with policy enforcement, MCP integrations and Azure DevOps traceability.',
  'Built a multi-agent knowledge platform on Azure AI Foundry — onboarding time down 40–50% for 40+ engineers.',
  'Scaled QA automation from 1 to 5 engineers at Pecode (Garantme) through architecture standards and code-review governance.',
]

export function About() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="about" ref={ref} data-reveal className="about container">
      <div className="about__grid">
        <div>
          <span className="about__kicker">02 — About</span>
          <h2 className="about__title">
            Quality as a
            <br />
            product capability.
          </h2>
        </div>
        <div>
          <p className="about__lead">
            Lead Test Automation Engineer with 7+ years of experience, including 3.5+ years at
            EPAM Systems, specializing in
            Playwright, TypeScript, Azure and Quality Engineering. I connect requirements,
            testing, delivery and AI automation without sacrificing governance or production
            safety.
          </p>
          <div className="about__bullets">
            {BULLETS.map((bullet) => (
              <div className="about__bullet" key={bullet}>
                <span className="about__arrow">→</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
