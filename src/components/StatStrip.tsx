import { useReveal } from '../hooks/useReveal'
import './StatStrip.css'

const STATS = [
  { value: '95%+', caption: 'suite stability' },
  { value: '200+', caption: 'tests migrated' },
  { value: '$100K+', caption: 'Upwork · Top Rated Plus' },
  { value: '7+ yrs', caption: 'Test automation experience' },
]

export function StatStrip() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="stats container">
      {STATS.map((stat) => (
        <div className="stats__cell" key={stat.caption}>
          <div className="stats__value">{stat.value}</div>
          <div className="stats__caption">{stat.caption}</div>
        </div>
      ))}
    </div>
  )
}
