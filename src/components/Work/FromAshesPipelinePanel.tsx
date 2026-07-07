import { useReveal } from '../../hooks/useReveal'
import './FromAshesPipelinePanel.css'

type Chip = { label: string; variant?: 'pass' | 'human' | 'dark' }

const DESIGN_LAYER: Chip[] = [
  { label: 'creative-director' },
  { label: 'component-generator' },
  { label: 'site-assembler' },
  { label: 'design-qa ✓', variant: 'pass' },
  { label: 'build' },
  { label: 'portfolio-narrator' },
]

const PRODUCTION_LAYER: Chip[] = [
  { label: 'schema-architect' },
  { label: 'migration-validator ✓', variant: 'pass' },
  { label: 'action-author · API' },
  { label: 'security-reviewer ✓', variant: 'pass' },
  { label: 'human commit', variant: 'human' },
]

const RELEASE_LAYER: Chip[] = [
  { label: 'changelog-narrator' },
  { label: 'en · ru · ua release ✓', variant: 'dark' },
]

const GOVERNANCE = [
  'blind pre-commit review',
  'write-scope contracts',
  'human-gated ops',
  'orchestrator-only spawning',
]

function ChipRow({ chips }: { chips: Chip[] }) {
  return (
    <div className="fa-pipeline__chip-row">
      {chips.map((chip, i) => (
        <span key={chip.label} className="fa-pipeline__chip-wrap">
          <span className={`fa-pipeline__chip fa-pipeline__chip--${chip.variant ?? 'plain'}`}>
            {chip.label}
          </span>
          {i < chips.length - 1 && <span className="fa-pipeline__arrow">→</span>}
        </span>
      ))}
    </div>
  )
}

export function FromAshesPipelinePanel() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="fa-pipeline">
      <div className="fa-pipeline__header">
        <h4 className="fa-pipeline__title">How From Ashes ships — an 11-agent HITL pipeline</h4>
        <span className="fa-pipeline__tag">/create-iteration · /feature-ship</span>
      </div>
      <p className="fa-pipeline__lead">
        A different architecture from my enterprise QE work: an orchestrator delegates to scoped,
        single-role agents across three layers — every gate emits a literal{' '}
        <span className="fa-pipeline__pass-word">PASS</span>, every commit is human-gated.
      </p>

      <div className="fa-pipeline__layers">
        <div className="fa-pipeline__layer">
          <div className="fa-pipeline__layer-label fa-pipeline__layer-label--design">
            Design layer · /create-iteration
          </div>
          <ChipRow chips={DESIGN_LAYER} />
        </div>
        <div className="fa-pipeline__layer">
          <div className="fa-pipeline__layer-label fa-pipeline__layer-label--production">
            Production layer · /feature-ship
          </div>
          <ChipRow chips={PRODUCTION_LAYER} />
        </div>
        <div className="fa-pipeline__layer">
          <div className="fa-pipeline__layer-label fa-pipeline__layer-label--release">
            Release layer · workflow_dispatch
          </div>
          <ChipRow chips={RELEASE_LAYER} />
        </div>
      </div>

      <div className="fa-pipeline__footer">
        {GOVERNANCE.map((item) => (
          <span key={item}>◆ {item}</span>
        ))}
      </div>
    </div>
  )
}
