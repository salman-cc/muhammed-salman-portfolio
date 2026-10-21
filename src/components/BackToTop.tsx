import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const update = () => setVisible(window.scrollY > 720)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <a className={`back-to-top${visible ? ' is-visible' : ''}`} href="#top" aria-label="Back to top">
      <ArrowUp size={18} aria-hidden="true" />
    </a>
  )
}
