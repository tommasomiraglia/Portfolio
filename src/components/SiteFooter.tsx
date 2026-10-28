import { profile } from '../data/content'

const year = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-32 max-w-3xl px-4 pb-10 text-sm text-muted sm:px-6">
      <div className="flex flex-col gap-2 border-t border-white/[0.08] pt-6 sm:flex-row sm:justify-between">
        <p>
          © {year} {profile.name} · {profile.location}
        </p>
        <p>
          Built with React and Tailwind ·{' '}
          <a
            className="link"
            href={`${profile.github}/Portfolio`}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  )
}
