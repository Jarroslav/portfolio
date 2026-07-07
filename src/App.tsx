import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { StatStrip } from './components/StatStrip'
import { QEPipeline } from './components/QEPipeline'
import { Work } from './components/Work/Work'
import { About } from './components/About'
import { Stack } from './components/Stack'
import { Contact } from './components/Contact'

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <StatStrip />
      <QEPipeline />
      <Work />
      <About />
      <Stack />
      <Contact />
    </>
  )
}

export default App
