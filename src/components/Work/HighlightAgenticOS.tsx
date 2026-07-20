import { useReveal } from '../../hooks/useReveal'
import './HighlightAgenticOS.css'

const TAGS = ['3-plugin suite', 'HITL governance', 'Decision-router']

export function HighlightAgenticOS() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="agentic-os">
      <div className="agentic-os__info">
        <div className="agentic-os__pill-row">
          <span className="pill pill--violet-bright">Public · Open source</span>
        </div>
        <h3 className="agentic-os__title">agentic-os</h3>
        <div className="card__badges">
          <img
            src="https://img.shields.io/github/stars/Jarroslav/agentic-os?style=flat&label=stars"
            alt="GitHub stars"
            loading="lazy"
          />
          <img
            src="https://img.shields.io/github/license/Jarroslav/agentic-os?style=flat&label=license"
            alt="License: Apache-2.0"
            loading="lazy"
          />
        </div>
        <dl className="case-study">
          <div className="case-study__row">
            <dt className="case-study__label">Problem</dt>
            <dd className="case-study__val">
              Multi-agent coding without governance is unsafe.
            </dd>
          </div>
          <div className="case-study__row">
            <dt className="case-study__label">Approach</dt>
            <dd className="case-study__val">
              Canonical agent contracts + <strong>enforcement hooks, not prompts</strong> — blind
              pre-commit review, write-scope guard, spawn gate — an HITL escalation ladder and a
              decision-router with a full audit trail.
            </dd>
          </div>
          <div className="case-study__row">
            <dt className="case-study__label">Outcome</dt>
            <dd className="case-study__val">
              <strong>Apache-2.0</strong>, stack- and role-agnostic — a three-plugin suite
              (agentic-os governance · agentic-sdlc pipeline · agentic-qe, a 28-blueprint QE catalog
              spanning the STLC) that ships for both Claude Code and Cursor and installs into any
              repo in a single interview.
            </dd>
          </div>
        </dl>
        <div className="agentic-os__tags">
          {TAGS.map((tag) => (
            <span className="tag tag--dark" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="agentic-os__actions">
          <a
            href="https://github.com/Jarroslav/agentic-os"
            target="_blank"
            rel="noopener"
            className="agentic-os__cta"
          >
            View on GitHub <span className="glyph">↗</span>
          </a>
          <a
            href="https://github.com/Jarroslav/agentic-os/blob/main/docs/PRINCIPLES.md"
            target="_blank"
            rel="noopener"
            className="card__arch"
          >
            Read the architecture <span className="glyph">↗</span>
          </a>
        </div>
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
