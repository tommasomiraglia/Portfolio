import { navItems } from '../data/content'

export function SiteHeader({ current }: { current?: string }) {
  return (
    <header className="fixed inset-x-0 top-3 z-30 px-3 sm:top-4">
      <div className="window mx-auto flex h-14 max-w-3xl items-center justify-between gap-2 bg-base/60 px-2 pl-3">
        <a
          href="/"
          aria-label="Home"
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-arch to-[#0f6ea3] text-sm font-semibold text-white shadow-[0_4px_16px_-4px_rgb(23_147_209/0.8)]"
        >
          tm
        </a>
        <nav aria-label="Main">
          <ul className="flex items-center gap-0.5 text-sm">
            {navItems.map((item) => {
              const isCurrent = item.label === current
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`block rounded-lg px-2.5 py-1.5 transition-colors duration-300 sm:px-3.5 ${
                      isCurrent
                        ? 'bg-white/10 text-fg'
                        : 'text-muted hover:bg-white/[0.06] hover:text-fg'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
