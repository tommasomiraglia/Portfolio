import { useEffect } from 'react'

/**
 * The browser tries to jump to `#section` before React has rendered it,
 * so links like /#connect from the forum page would land at the top.
 * Re-run that jump once the page exists.
 */
export function useScrollToHash() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) document.getElementById(id)?.scrollIntoView()
  }, [])
}
