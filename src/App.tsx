import { Connect } from './components/Connect'
import { Experience } from './components/Experience'
import { Hero } from './components/Hero'
import { LatestWriting } from './components/LatestWriting'
import { Projects } from './components/Projects'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { Toolbox } from './components/Toolbox'
import { useReveal } from './hooks/useReveal'
import { useScrollToHash } from './hooks/useScrollToHash'

export default function App() {
  useScrollToHash()
  useReveal()

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        <Hero />
        <Experience />
        <Projects />
        <Toolbox />
        <LatestWriting />
        <Connect />
      </main>
      <SiteFooter />
    </>
  )
}
