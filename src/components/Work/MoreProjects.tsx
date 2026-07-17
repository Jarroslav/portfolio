import { useReveal } from '../../hooks/useReveal'
import { projects } from '../../data/projects'
import './MoreProjects.css'

export function MoreProjects() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal className="more-projects">
      <div className="more-projects__label">More projects</div>
      <ul className="more-projects__list">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener"
              className="more-projects__row"
            >
              <div className="more-projects__main">
                <span className="more-projects__name">
                  {project.name}
                  {project.note === 'fork' && (
                    <span className="more-projects__fork">fork</span>
                  )}
                </span>
                <span className="more-projects__desc">{project.oneLiner}</span>
              </div>
              <div className="more-projects__aside">
                <div className="more-projects__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="more-projects__link">
                  Repo <span className="glyph">↗</span>
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
