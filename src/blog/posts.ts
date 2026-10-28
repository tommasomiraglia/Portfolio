/**
 * Blog posts are Markdown files in ./posts. The file name is the URL slug:
 * posts/my-first-post.md is served at /blog/my-first-post.
 *
 * Each file starts with a front-matter block:
 *
 *   ---
 *   title: My first post
 *   date: 2026-10-28
 *   summary: One sentence shown in the post list.
 *   ---
 */

export type Post = {
  slug: string
  title: string
  date: string
  summary: string
  /** Markdown body, without the front matter. */
  body: string
  readingMinutes: number
}

const files = import.meta.glob<string>('./posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const frontMatter = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/

function parse(path: string, source: string): Post {
  const slug = path.replace('./posts/', '').replace(/\.md$/, '')
  const match = source.match(frontMatter)
  if (!match) throw new Error(`Post ${path} is missing its front matter`)

  const fields = Object.fromEntries(
    match[1].split(/\r?\n/).map((line) => {
      const colon = line.indexOf(':')
      return [line.slice(0, colon).trim(), line.slice(colon + 1).trim()]
    }),
  )
  for (const key of ['title', 'date', 'summary']) {
    if (!fields[key]) throw new Error(`Post ${path} is missing "${key}"`)
  }

  const body = source.slice(match[0].length)
  const words = body.split(/\s+/).filter(Boolean).length
  return {
    slug,
    title: fields.title,
    date: fields.date,
    summary: fields.summary,
    body,
    readingMinutes: Math.max(1, Math.round(words / 220)),
  }
}

/** All posts, newest first. */
export const posts: Post[] = Object.entries(files)
  .map(([path, source]) => parse(path, source))
  .sort((a, b) => b.date.localeCompare(a.date))

export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
