import { useEffect, useState } from 'react'

/**
 * Small header helper: becomes true once the page is scrolled and exposes
 * reading progress as a 0–1 value for the top progress bar.
 */
export function useScrollMetrics() {
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(scrollTop > 16)
      setProgress(max > 0 ? Math.min(1, Math.max(0, scrollTop / max)) : 0)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return { scrolled, progress }
}
