import { bioParagraphs, profile } from '../data/content'
import { LinkedInIcon } from './icons'

export function Hero() {
  return (
    <section id="about" aria-label="About me" className="reveal pt-36 sm:pt-44">
      <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>

      <p className="mt-6 max-w-2xl text-xl leading-snug text-fg sm:text-2xl">
        {profile.tagline}
      </p>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-fg/70 sm:text-lg">
        {profile.availability}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="button-primary"
        >
          <LinkedInIcon className="h-4 w-4" />
          Connect on LinkedIn
        </a>
        <a href="#projects" className="button-glass">
          See my projects
        </a>
      </div>

      <div className="window mt-14 grid max-w-none gap-5 p-6 text-[1.0625rem] leading-8 text-fg/80 sm:p-8">
        {bioParagraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
