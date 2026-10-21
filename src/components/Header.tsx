import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { portfolio } from '../data/portfolio'
import { useScrollMetrics } from '../hooks/useScrollMetrics'
import { useScrollSpy } from '../hooks/useScrollSpy'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = navLinks.map((link) => link.href.slice(1))

export function Header() {
  const [open, setOpen] = useState(false)
  const { scrolled, progress } = useScrollMetrics()
  const activeId = useScrollSpy(sectionIds)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!open) return

    const desktop = window.matchMedia?.('(min-width: 921px)')
    const closeOnDesktop = () => {
      if (desktop?.matches) setOpen(false)
    }

    const focusable = () =>
      Array.from(
        document.querySelectorAll<HTMLElement>(
          '.site-header a[href], .site-header button:not([disabled])',
        ),
      ).filter((element) => element.offsetParent !== null || element === menuButtonRef.current)

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        menuButtonRef.current?.focus()
        return
      }

      if (event.key !== 'Tab') return

      const items = focusable()
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]
      const active = document.activeElement as HTMLElement | null

      if (!event.shiftKey && active === last) {
        event.preventDefault()
        first.focus()
      } else if (event.shiftKey && (active === first || !active || !items.includes(active))) {
        event.preventDefault()
        last.focus()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const focusTimer = window.setTimeout(() => firstLinkRef.current?.focus(), 60)
    window.addEventListener('keydown', onKeyDown)
    desktop?.addEventListener('change', closeOnDesktop)

    return () => {
      window.clearTimeout(focusTimer)
      window.removeEventListener('keydown', onKeyDown)
      desktop?.removeEventListener('change', closeOnDesktop)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label={`${portfolio.name} — home`}>
          <span className="brand-mark" aria-hidden="true">
            MS
          </span>
          <span className="brand-text">
            <span className="brand-name">{portfolio.name}</span>
            <span className="brand-role">Embedded systems · FPGA · IoT</span>
          </span>
        </a>

        <nav className={`site-nav${open ? ' is-open' : ''}`} id="site-menu" aria-label="Primary">
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  ref={index === 0 ? firstLinkRef : undefined}
                  href={link.href}
                  aria-current={activeId === link.href.slice(1) ? 'true' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a className="button primary button-sm header-cta" href="#contact">
            Let’s talk
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
          <button
            ref={menuButtonRef}
            type="button"
            className="icon-button menu-button"
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div className={`nav-backdrop${open ? ' is-open' : ''}`} aria-hidden="true" onClick={() => setOpen(false)} />

      <div className="scroll-progress" aria-hidden="true">
        <span style={{ transform: `scaleX(${progress})` }} />
      </div>
    </header>
  )
}
