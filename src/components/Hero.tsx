import { useReveal } from '../hooks/useReveal'
import './Hero.css'

export function Hero() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <header id="top" ref={ref} data-reveal className="hero container">
      <div className="hero__copy">
        <div className="hero__kicker">
          <span className="hero__dot" />
          Lead Test Automation Engineer · Agentic SDLC
        </div>
        <h1 className="hero__title">
          Requirements to
          <br />
          release — as one
          <br />
          governed system.
        </h1>
        <p className="hero__lead">
          Most QA automation stops at scripts. I build the systems around them — architecture,
          CI/CD, governance, traceability and AI-assisted workflows, so quality is a product
          capability, not an afterthought.
        </p>
        <div className="hero__ctas">
          <a href="#work" className="btn btn--primary">
            Selected work
          </a>
          <a href="#contact" className="btn btn--outline">
            Get in touch
          </a>
        </div>
      </div>
      <div className="hero__side">
        <div className="hero__portrait">
          <img
            src={`${import.meta.env.BASE_URL}images/portrait.jpg`}
            alt="Portrait of Yaroslav Krivushenko"
          />
        </div>
        <div className="hero__building">
          <div className="hero__building-label">Now building</div>
          <div className="hero__building-title">From Ashes</div>
          <div className="hero__building-desc">
            117K+ LOC roleplay platform · Next.js 15 · Supabase · 11-agent HITL pipeline.
          </div>
        </div>
      </div>
    </header>
  )
}
