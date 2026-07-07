import { useReveal } from '../hooks/useReveal'
import './QEPipeline.css'

type Node = {
  num: string
  title: string
  sub: string
  variant?: 'green' | 'blue' | 'hitl' | 'production'
}

const NODES: Node[] = [
  { num: '01 →', title: 'Requirements', sub: 'Azure DevOps · traced', variant: 'green' },
  { num: '02 →', title: 'Test cases', sub: 'real-ID · coverage gate', variant: 'green' },
  { num: '03 →', title: 'Automation', sub: 'Playwright · TypeScript', variant: 'blue' },
  { num: '04 · human →', title: 'Review gate', sub: 'HITL · blind pre-commit', variant: 'hitl' },
  { num: '05 →', title: 'CI checks', sub: 'lint · types · build · smoke', variant: 'blue' },
  { num: '06 · human →', title: 'Release', sub: 'gated · fast-forward main', variant: 'green' },
  { num: '07 ✓', title: 'Production', sub: 'daily backups · safeguards', variant: 'production' },
]

export function QEPipeline() {
  const ref = useReveal<HTMLElement>()

  return (
    <section ref={ref} data-reveal className="pipeline container">
      <div className="pipeline__kicker">Enterprise quality engineering · EPAM</div>
      <div className="pipeline__header">
        <h2 className="pipeline__title">The governed test-automation pipeline I architect</h2>
        <span className="pipeline__tag">requirements → production</span>
      </div>
      <p className="pipeline__lead">
        At enterprise scale I connect requirements, testing and delivery into one traceable flow —
        a human-in-the-loop review gate, quality checks enforced in CI, and human-gated releases
        with production safeguards. Each step is auditable in Azure DevOps, from work item to
        shipped change.
      </p>

      <div className="pipeline__nodes">
        {NODES.map((node) => (
          <div className={`pipeline__node pipeline__node--${node.variant}`} key={node.title}>
            <span className="pipeline__node-num">{node.num}</span>
            <span className="pipeline__node-title">{node.title}</span>
            <span className="pipeline__node-sub">{node.sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
