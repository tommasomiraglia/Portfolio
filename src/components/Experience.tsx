import { experience } from '../data/content'
import { Section } from './Section'

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="window divide-y divide-white/[0.06]">
        {experience.map((item) => (
          <li
            key={item.id}
            className="grid gap-2 p-6 sm:grid-cols-[8.5rem_1fr] sm:gap-6 sm:p-8"
          >
            <p className="text-sm leading-7 text-muted">{item.date}</p>
            <div>
              <h3 className="text-lg font-medium leading-snug">{item.role}</h3>
              <p className="mt-0.5 text-sm text-muted">
                {item.href ? (
                  <a
                    className="link"
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {item.company}
                  </a>
                ) : (
                  item.company
                )}
              </p>
              <ul className="mt-4 grid gap-2 leading-relaxed text-muted">
                {item.summary.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              {item.tags.length > 0 && (
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {item.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
