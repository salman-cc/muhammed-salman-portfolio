import { useEffect, useState } from 'react'

/**
 * Tracks which section is currently in view so the header can highlight it.
 * Returns an empty string while the visitor is still in the hero.
 */
export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const update = () => {
      const marker = window.scrollY + offset
      let current = ''

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }

      const documentHeight = document.documentElement.scrollHeight
      const atBottom = window.scrollY + window.innerHeight >= documentHeight - 8
      if (atBottom) current = ids[ids.length - 1] ?? current

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return activeId
}
