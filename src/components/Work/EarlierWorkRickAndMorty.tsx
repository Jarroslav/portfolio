import { useReveal } from '../../hooks/useReveal'
import './EarlierWorkRickAndMorty.css'

export function EarlierWorkRickAndMorty() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="earlier-work">
      <div className="earlier-work__label">Earlier work</div>
      <a
        href="https://github.com/Jarroslav/ricknmorty"
        target="_blank"
        rel="noopener"
        className="earlier-work__row"
      >
        <div className="earlier-work__main">
          <span className="earlier-work__title">Rick &amp; Morty Explorer</span>
          <span className="earlier-work__desc">
            React app — characters, episodes &amp; locations with working filters and a
            local-storage watchlist.
          </span>
        </div>
        <span className="earlier-work__meta">React · public ↗</span>
      </a>
    </div>
  )
}
