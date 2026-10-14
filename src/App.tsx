import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Sidebar } from './components/Sidebar'
import { Spotlight } from './components/Spotlight'

export default function App() {
  return (
    <div className="relative">
      <Spotlight />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />
          <main className="pt-24 lg:w-1/2 lg:py-24">
            <About />
            <Experience />
            <Projects />
            <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
              <p>
                Built in React and Tailwind CSS.
                Layout inspired by{' '}
                <a
                  className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
                  href="https://brittanychiang.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Brittany Chiang
                </a>
              </p>
            </footer>
          </main>
        </div>
      </div>
    </div>
  )
}
