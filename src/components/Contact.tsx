import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export function Contact() {
  const ref = useReveal<HTMLElement>()

  return (
    <section id="contact" ref={ref} data-reveal className="contact container">
      <div className="contact__block">
        <span className="contact__kicker">Open to senior IC · staff · lead · architecture</span>
        <h2 className="contact__title">
          Let's build quality
          <br />
          into the system.
        </h2>
        <p className="contact__lead">
          Roles across Quality Engineering, Test Automation, Agentic SDLC and AI-enabled delivery
          platforms — where quality is a product capability.
        </p>
        <div className="contact__actions">
          <a href="mailto:y.krivushenko@gmail.com" className="contact__btn contact__btn--solid">
            y.krivushenko@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/yaroslav-krivushenko"
            target="_blank"
            rel="noopener"
            className="contact__btn contact__btn--outline"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://github.com/Jarroslav"
            target="_blank"
            rel="noopener"
            className="contact__btn contact__btn--outline"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.instagram.com/yarro_"
            target="_blank"
            rel="noopener"
            className="contact__btn contact__btn--outline"
          >
            Instagram ↗
          </a>
        </div>
      </div>
      <div className="contact__footer">
        <span>© 2026 Yaroslav Krivushenko</span>
        <span>Ukraine · remote · built &amp; deployed on GitHub Pages</span>
      </div>
    </section>
  )
}
