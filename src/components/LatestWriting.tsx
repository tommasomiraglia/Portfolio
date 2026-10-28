import { formatDate, posts } from '../blog/posts'
import { Section } from './Section'

export function LatestWriting() {
  if (posts.length === 0) return null

  return (
    <Section id="writing" title="Writing">
      <ul className="window divide-y divide-white/[0.06]">
        {posts.slice(0, 3).map((post) => (
          <li key={post.slug}>
            <a
              href={`/blog/${post.slug}`}
              className="group flex items-center gap-4 px-6 py-5 transition-colors duration-300 hover:bg-white/[0.03] sm:px-8"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm text-muted">{formatDate(post.date)}</p>
                <p className="mt-1 font-medium transition-colors duration-300 group-hover:text-arch-light">
                  {post.title}
                </p>
              </div>
              <span
                aria-hidden
                className="text-muted transition duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-arch-light"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="/blog/"
        className="mt-5 inline-block text-sm text-muted transition-colors duration-300 hover:text-fg"
      >
        All writing →
      </a>
    </Section>
  )
}
