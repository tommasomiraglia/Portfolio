import { projects } from '../data/content'

export function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
          Projects
        </h2>
      </div>

      <ul className="group/list">
        {projects.map((project) => (
          <li key={project.id} className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  {project.href ? (
                    <a
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                      <span>
                        {project.title}
                        <span className="inline-block" aria-hidden>
                          {' '}
                          ↗
                        </span>
                      </span>
                    </a>
                  ) : (
                    <span className="font-medium leading-tight text-slate-200 text-base">
                      {project.title}
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-normal">{project.description}</p>
                <ul className="mt-2 flex flex-wrap" aria-label="Technologies">
                  {project.tags.map((tag) => (
                    <li key={tag} className="mr-1.5 mt-2">
                      <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                        {tag}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="z-10 sm:order-1 sm:col-span-2 sm:translate-y-1">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.imageAlt ?? ''}
                    loading="lazy"
                    width={200}
                    height={112}
                    className="aspect-video w-full rounded border-2 border-slate-200/10 object-cover transition group-hover:border-slate-200/30 sm:w-[200px]"
                  />
                ) : project.year ? (
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {project.year}
                  </p>
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
