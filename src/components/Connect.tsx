import { profile } from '../data/content'
import { GitHubIcon, LeetCodeIcon, LinkedInIcon, MailIcon } from './icons'

const secondaryLinks = [
  { label: 'Email', href: `mailto:${profile.email}`, icon: MailIcon },
  { label: 'GitHub', href: profile.github, icon: GitHubIcon },
  { label: 'LeetCode', href: profile.leetcode, icon: LeetCodeIcon },
]

export function Connect() {
  return (
    <section id="connect" aria-labelledby="connect-title" className="reveal mt-24 sm:mt-32">
      <div className="window overflow-hidden p-8 text-center sm:p-14">
        {/* Soft glow behind the card content. */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-arch/25 blur-3xl"
        />
        <div className="relative">
          <h2 id="connect-title" className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let’s connect
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted">
            I’m looking for a part-time student developer role in {profile.location}.
            Have a role, a project or a question? LinkedIn is the best place to reach me.
          </p>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="button-primary mt-8 px-6 py-3.5 text-base"
          >
            <LinkedInIcon className="h-5 w-5" />
            Connect on LinkedIn
          </a>

          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {secondaryLinks.map(({ label, href, icon: LinkIcon }) => {
              const external = href.startsWith('http')
              return (
                <li key={href}>
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer noopener' : undefined}
                    className="button-glass px-4 py-2.5"
                  >
                    <LinkIcon className="h-4 w-4" />
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
