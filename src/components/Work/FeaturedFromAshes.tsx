import { useReveal } from '../../hooks/useReveal'
import './FeaturedFromAshes.css'

const TAGS = ['Next.js 15', 'TypeScript', 'Supabase', '11-agent HITL']

export function FeaturedFromAshes() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="from-ashes">
      <div className="from-ashes__preview">
        <div className="from-ashes__chrome">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
          <span className="from-ashes__url">www.from-ashes.com</span>
        </div>
        <div className="from-ashes__shot">
          <picture>
            <source
              media="(max-width: 767px)"
              srcSet={`${import.meta.env.BASE_URL}images/from-ashes-mobile.png`}
            />
            <img
              src={`${import.meta.env.BASE_URL}images/from-ashes.png`}
              alt="Screenshot of the From Ashes platform"
            />
          </picture>
        </div>
      </div>
      <div className="from-ashes__info">
        <div className="from-ashes__pill-row">
          <span className="pill pill--green">Live · Solo build</span>
        </div>
        <h3 className="from-ashes__title">From Ashes</h3>
        <dl className="case-study">
          <div className="case-study__row">
            <dt className="case-study__label">Problem</dt>
            <dd className="case-study__val">
              Run a live, multiplayer creative community — solo, in production.
            </dd>
          </div>
          <div className="case-study__row">
            <dt className="case-study__label">Approach</dt>
            <dd className="case-study__val">
              Next.js 15 + Supabase, delivered through an <strong>11-agent HITL workflow</strong> and
              a full solo SDLC — design, release governance and backups.
            </dd>
          </div>
          <div className="case-study__row">
            <dt className="case-study__label">Outcome</dt>
            <dd className="case-study__val">
              <strong>117K+ LOC · 200+ database migrations</strong> live in production — RBAC,
              semantic search, realtime messaging and 20+ admin tools, behind CI/CD, release
              governance and backup/restore.
            </dd>
          </div>
        </dl>
        <div className="from-ashes__tags">
          {TAGS.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="from-ashes__actions">
          <a
            href="https://from-ashes.com/?utm_source=portfolio"
            target="_blank"
            rel="noopener"
            className="btn btn--primary btn--sm"
          >
            Visit from-ashes.com <span className="glyph">↗</span>
          </a>
          <span className="from-ashes__note">private repo</span>
        </div>
      </div>
    </div>
  )
}
