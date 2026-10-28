import { useEffect, useRef } from 'react'
import { comments } from '../data/content'

/**
 * Embeds the giscus widget (https://giscus.app) for one discussion.
 * giscus finds or creates the GitHub Discussion whose title equals `term`.
 */
export function Giscus({ term }: { term: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.async = true
    script.crossOrigin = 'anonymous'
    const attributes = {
      'data-repo': comments.repo,
      'data-repo-id': comments.repoId,
      'data-category': comments.category,
      'data-category-id': comments.categoryId,
      'data-mapping': 'specific',
      'data-term': term,
      'data-strict': '1',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'transparent_dark',
      'data-lang': 'en',
      'data-loading': 'lazy',
    }
    for (const [name, value] of Object.entries(attributes)) {
      script.setAttribute(name, value)
    }
    container.appendChild(script)

    return () => {
      container.replaceChildren()
    }
  }, [term])

  return <div ref={ref} className="min-h-64" />
}
