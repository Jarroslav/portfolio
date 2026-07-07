import { FeaturedFromAshes } from './FeaturedFromAshes'
import { FromAshesPipelinePanel } from './FromAshesPipelinePanel'
import { HighlightAgenticOS } from './HighlightAgenticOS'
import { EarlierWorkRickAndMorty } from './EarlierWorkRickAndMorty'
import './Work.css'

export function Work() {
  return (
    <section id="work" className="work container">
      <div className="work__header">
        <h2 className="work__title">Selected work</h2>
        <span className="work__tag">01 — Building</span>
      </div>

      <FeaturedFromAshes />
      <FromAshesPipelinePanel />
      <HighlightAgenticOS />
      <EarlierWorkRickAndMorty />
    </section>
  )
}
