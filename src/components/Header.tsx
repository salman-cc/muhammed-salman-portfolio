import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { portfolio } from '../data/portfolio'

const links = ['About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact']

export function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="container nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label={`${portfolio.name}, home`}>
          MS<span>.</span>
        </a>
        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
        <ul id="site-menu" className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((link) => {
            const id = link.toLowerCase()
            return (
              <li key={link}>
                <a
                  href={`#${id}`}
                  className={active === id ? 'active' : ''}
                  aria-current={active === id ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}
