import type { CSSProperties, ReactNode } from 'react'
import {
  siApache,
  siApachemaven,
  siClaude,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siJunit5,
  siLinux,
  siN8n,
  siOpenai,
  siOpenjdk,
  siPandas,
  siPhp,
  siPytest,
  siPython,
  siPytorch,
  siScikitlearn,
  siSpringboot,
  siSqlite,
  siTypescript,
  type SimpleIcon,
} from 'simple-icons'
import { skillGroups } from '../data/content'
import { Section } from './Section'

/** Brand logos from Simple Icons (CC0), keyed by the skill names in content.ts. */
const brandIcons: Record<string, SimpleIcon> = {
  Java: siOpenjdk,
  Python: siPython,
  TypeScript: siTypescript,
  JavaScript: siJavascript,
  'HTML/CSS': siHtml5,
  PHP: siPhp,
  'Spring Boot': siSpringboot,
  'Apache Camel': siApache,
  Maven: siApachemaven,
  'OpenAI API': siOpenai,
  n8n: siN8n,
  pandas: siPandas,
  'scikit-learn': siScikitlearn,
  PyTorch: siPytorch,
  SQLite: siSqlite,
  Git: siGit,
  GitHub: siGithub,
  'GitHub Actions': siGithubactions,
  pytest: siPytest,
  JUnit: siJunit5,
  Linux: siLinux,
  'Claude Code': siClaude,
}

/** Line icons for skills that are concepts rather than brands. */
const conceptIcons: Record<string, ReactNode> = {
  SQL: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  'API integration': <path d="M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0V8ZM12 18v4" />,
  'Data modeling': (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h4a2.5 2.5 0 0 1 2.5 2.5v5" />
    </>
  ),
}

const fallbackGlow = '#5cb8ea'

/** Very dark brand colors (GitHub, OpenAI...) would vanish on the dark background. */
function glowColor(hex: string) {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16))
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255
  return luminance < 0.25 ? '#e7eaf0' : `#${hex}`
}

function SkillIcon({ name }: { name: string }) {
  const brand = brandIcons[name]
  const iconClass = 'h-4 w-4 shrink-0'

  if (brand) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass} aria-hidden>
        <path d={brand.path} />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={iconClass}
      aria-hidden
    >
      {conceptIcons[name]}
    </svg>
  )
}

export function Toolbox() {
  return (
    <Section id="toolbox" title="Toolbox">
      <dl className="window divide-y divide-white/[0.06]">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid gap-3 px-6 py-5 sm:grid-cols-[8.5rem_1fr] sm:items-center sm:gap-6 sm:px-8"
          >
            <dt className="text-sm text-muted">{group.label}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const brand = brandIcons[item]
                  const glow = brand ? glowColor(brand.hex) : fallbackGlow
                  return (
                    <li
                      key={item}
                      style={{ '--glow': glow } as CSSProperties}
                      className="group/skill flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm text-fg/90 transition duration-300 ease-smooth hover:-translate-y-0.5 hover:border-[color-mix(in_srgb,var(--glow)_45%,transparent)] hover:bg-[color-mix(in_srgb,var(--glow)_12%,transparent)] hover:text-fg"
                    >
                      <span className="text-fg/60 transition-colors duration-300 group-hover/skill:text-[var(--glow)]">
                        <SkillIcon name={item} />
                      </span>
                      {item}
                    </li>
                  )
                })}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
