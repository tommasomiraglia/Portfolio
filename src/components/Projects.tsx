import { projects } from '../data/content'
import { Section } from './Section'

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <li
            key={project.id}
            // The first project spans the full width as the featured one.
            className={`window window-active group flex flex-col ${
              i === 0 ? 'sm:col-span-2' : ''
            }`}
          >
            {project.image && (
              <div className="overflow-hidden rounded-t-2xl border-b border-white/[0.06]">
                <img
                  src={project.image}
                  alt={project.imageAlt ?? ''}
                  loading="lazy"
                  className="aspect-video w-full object-cover opacity-90 transition duration-700 ease-smooth group-hover:scale-[1.03] group-hover:opacity-100"
                />
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-medium leading-snug">
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer noopener">
                    {/* Stretched link: the whole card is clickable. */}
                    <span className="absolute inset-0 rounded-2xl" aria-hidden />
                    {project.title}
                    <span
                      aria-hidden
                      className="ml-1 inline-block text-muted transition duration-300 ease-smooth group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-arch-light"
                    >
                      ↗
                    </span>
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              {project.year && !project.image && (
                <p className="mt-1 text-sm text-muted">{project.year}</p>
              )}
              <p className="mt-3 flex-1 leading-relaxed text-muted">
                {project.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                {project.tags.map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
