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
        <p className="from-ashes__desc">
          A production urban-fantasy text-roleplay platform, built from scratch. 62K+ LOC, 130+
          database migrations, RBAC, semantic search, realtime messaging, lore management,
          AI-assisted features and 20+ admin tools — with a full CI/CD, release-governance and
          backup/restore pipeline.
        </p>
        <div className="from-ashes__tags">
          {TAGS.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <div className="from-ashes__actions">
          <a
            href="https://www.from-ashes.com"
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
