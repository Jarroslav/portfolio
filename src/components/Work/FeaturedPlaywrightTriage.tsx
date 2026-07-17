import { useReveal } from '../../hooks/useReveal'
import './FeaturedPlaywrightTriage.css'

const TAGS = ['TypeScript', 'Playwright', 'LLM reporter']

export function FeaturedPlaywrightTriage() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="pw-triage">
      <div className="pw-triage__info">
        <div className="pw-triage__pill-row">
          <span className="pill pill--green">Public · on npm</span>
        </div>
        <h3 className="pw-triage__title">playwright-ai-triage</h3>
        <div className="card__badges">
          <img
            src="https://img.shields.io/npm/v/playwright-ai-triage?style=flat&label=npm"
            alt="npm version"
            loading="lazy"
          />
          <img
            src="https://img.shields.io/npm/dm/playwright-ai-triage?style=flat&label=downloads"
            alt="npm monthly downloads"
            loading="lazy"
          />
          <img
            src="https://img.shields.io/github/actions/workflow/status/flaketrace/playwright-ai-triage/ci.yml?branch=main&style=flat&label=ci"
            alt="CI status"
            loading="lazy"
          />
        </div>
        <dl className="case-study">
          <div className="case-study__row">
            <dt className="case-study__label">Problem</dt>
            <dd className="case-study__val">Flaky CI failures burn hours of manual triage.</dd>
          </div>
          <div className="case-study__row">
            <dt className="case-study__label">Approach</dt>
            <dd className="case-study__val">
              A Playwright reporter runs a heuristic pre-pass, then an{' '}
              <strong>LLM classifier with fail-closed handling</strong> — every failure tagged real
              bug / flaky / selector drift / env issue.
            </dd>
          </div>
          <div className="case-study__row">
            <dt className="case-study__label">Outcome</dt>
            <dd className="case-study__val">
              Posts <strong>one auto-updating verdict comment</strong> to your PR. Self-hosted,
              bring-your-own-key — nothing leaves your CI.
            </dd>
          </div>
        </dl>
        <div className="pw-triage__tags">
          {TAGS.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="pw-triage__actions">
          <a
            href="https://www.npmjs.com/package/playwright-ai-triage"
            target="_blank"
            rel="noopener"
            className="btn btn--primary btn--sm"
          >
            View on npm <span className="glyph">↗</span>
          </a>
          <a
            href="https://github.com/flaketrace/playwright-ai-triage"
            target="_blank"
            rel="noopener"
            className="btn btn--outline btn--sm"
          >
            GitHub <span className="glyph">↗</span>
          </a>
          <a
            href="https://github.com/flaketrace/playwright-ai-triage#readme"
            target="_blank"
            rel="noopener"
            className="card__arch"
          >
            Read the architecture <span className="glyph">↗</span>
          </a>
        </div>
      </div>

      <div className="pw-triage__preview">
        <div className="pw-triage__comment-head">
          <span className="pw-triage__bot">ai-triage</span>
          <span className="pw-triage__bot-tag">bot</span>
          <span className="pw-triage__comment-meta">commented on #128</span>
        </div>
        <div className="pw-triage__comment-body">
          <div className="pw-triage__comment-title">AI triage — 3 failures classified</div>
          <div className="pw-triage__verdict pw-triage__verdict--bug">
            <span className="pw-triage__mark">REAL_BUG</span> checkout.spec · total mismatch on tax
          </div>
          <div className="pw-triage__verdict pw-triage__verdict--flaky">
            <span className="pw-triage__mark">FLAKY</span> search.spec · passed on retry
          </div>
          <div className="pw-triage__verdict pw-triage__verdict--drift">
            <span className="pw-triage__mark">SELECTOR_DRIFT</span> login.spec · #submit renamed
          </div>
        </div>
      </div>
    </div>
  )
}
