import { useReveal } from '../../hooks/useReveal'
import './HighlightAgenticOS.css'

const TAGS = ['Claude Code plugin', 'HITL governance', 'Decision-router']

export function HighlightAgenticOS() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="agentic-os">
      <div className="agentic-os__info">
        <div className="agentic-os__pill-row">
          <span className="pill pill--violet-bright">Public · Open source</span>
        </div>
        <h3 className="agentic-os__title">agentic-os</h3>
        <p className="agentic-os__desc">
          A portable, governed multi-agent architecture you install into any repo in a single
          interview. Canonical agent contracts, enforcement hooks — blind pre-commit review,
          write-scope guard, spawn gate — an HITL escalation ladder and a decision-router with a
          full audit trail. Ships as a Claude Code plugin; stack- and role-agnostic.
        </p>
        <div className="agentic-os__tags">
          {TAGS.map((tag) => (
            <span className="tag tag--dark" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://github.com/Jarroslav"
          target="_blank"
          rel="noopener"
          className="agentic-os__cta"
        >
          View on GitHub <span className="glyph">↗</span>
        </a>
      </div>

      <div className="agentic-os__terminal">
        <div className="agentic-os__terminal-chrome">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="agentic-os__terminal-cmd">/agentic-init</span>
        </div>
        <div className="agentic-os__terminal-body">
          <div className="agentic-os__q">? Role preset</div>
          <div className="agentic-os__a">&gt; qa · architect</div>
          <div className="agentic-os__q">? HITL autonomy</div>
          <div className="agentic-os__a">&gt; gated-autonomous</div>
          <div className="agentic-os__q">? Stack (detected)</div>
          <div className="agentic-os__a">&gt; next.js · playwright</div>
          <div className="agentic-os__ok agentic-os__ok--first">✓ agent contracts scaffolded</div>
          <div className="agentic-os__ok">✓ enforcement hooks wired</div>
          <div className="agentic-os__ok">✓ decision-router · audit trail</div>
        </div>
      </div>
    </div>
  )
}
