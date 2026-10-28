import { useEffect, useMemo } from 'react'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { profile } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { Giscus } from './Giscus'
import { renderMarkdown } from './markdown'
import { formatDate, posts, type Post } from './posts'

/** /blog/ shows the list, /blog/<slug> shows one post. */
function slugFromPath() {
  return window.location.pathname.replace(/^\/blog\/?/, '').replace(/\/$/, '')
}

export function BlogPage() {
  const slug = slugFromPath()
  const post = slug ? posts.find((p) => p.slug === slug) : undefined
  useReveal()

  useEffect(() => {
    if (post) document.title = `${post.title} · ${profile.name}`
    else if (slug) document.title = `Not found · ${profile.name}`
  }, [post, slug])

  return (
    <>
      <SiteHeader current="Writing" />
      <main className="mx-auto max-w-3xl px-4 sm:px-6">
        {!slug ? <PostList /> : post ? <PostView post={post} /> : <NotFound />}
      </main>
      <SiteFooter />
    </>
  )
}

function PostList() {
  return (
    <>
      <section className="reveal pt-36 sm:pt-44" aria-labelledby="blog-title">
        <h1 id="blog-title" className="text-5xl font-semibold tracking-tight sm:text-6xl">
          Writing
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-fg/90">
          Guides and notes on things I build and learn: Java backends, LLM
          integrations and studying computer science in Denmark.
        </p>
      </section>

      <ul className="reveal mt-12 grid gap-5">
        {posts.map((post) => (
          <li key={post.slug} className="window window-active group">
            <a href={`/blog/${post.slug}`} className="block p-6 sm:p-8">
              <p className="text-sm text-muted">
                {formatDate(post.date)} · {post.readingMinutes} min read
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-arch-light sm:text-2xl">
                {post.title}
              </h2>
              <p className="mt-3 leading-relaxed text-muted">{post.summary}</p>
            </a>
          </li>
        ))}
      </ul>
      {posts.length === 0 && <p className="mt-12 text-muted">No posts yet.</p>}
    </>
  )
}

function PostView({ post }: { post: Post }) {
  const html = useMemo(() => renderMarkdown(post.body), [post.body])

  return (
    <article className="pt-36 sm:pt-44">
      <header className="reveal">
        <a
          href="/blog/"
          className="text-sm text-muted transition-colors duration-300 hover:text-fg"
        >
          ← All writing
        </a>
        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-4 text-muted">
          {formatDate(post.date)} · {post.readingMinutes} min read
        </p>
      </header>

      <div
        className="reveal prose prose-invert mt-12 max-w-none prose-headings:tracking-tight prose-a:text-arch-light prose-code:before:content-none prose-code:after:content-none"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <section aria-labelledby="comments-title" className="window reveal mt-16 p-6 sm:p-8">
        <h2 id="comments-title" className="text-xl font-semibold tracking-tight">
          Comments
        </h2>
        <p className="mt-1 text-sm text-muted">
          Questions or corrections welcome. Sign in with GitHub to comment.
        </p>
        <div className="mt-6 border-t border-white/[0.06] pt-6">
          <Giscus term={`blog/${post.slug}`} />
        </div>
      </section>
    </article>
  )
}

function NotFound() {
  return (
    <section className="pt-36 sm:pt-44">
      <h1 className="text-4xl font-semibold tracking-tight">Post not found</h1>
      <p className="mt-4 text-muted">
        It may have moved.{' '}
        <a className="link" href="/blog/">
          See all writing
        </a>
        .
      </p>
    </section>
  )
}
