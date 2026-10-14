import { useEffect, useRef } from 'react'

export function Spotlight() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const onMove = (event: MouseEvent) => {
      node.style.setProperty('--spot-x', `${event.clientX}px`)
      node.style.setProperty('--spot-y', `${event.clientY}px`)
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 hidden lg:block"
      style={{
        background:
          'radial-gradient(650px circle at var(--spot-x, 50%) var(--spot-y, 50%), rgba(94, 234, 212, 0.12), transparent 70%)',
      }}
    />
  )
}
