import './Nav.css'

export function Nav() {
  return (
    <nav className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__brand">
          Yaroslav Krivushenko
        </a>
        <div className="nav__links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#stack" className="nav__stack-link">
            Stack
          </a>
          <a href="#contact" className="nav__contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
