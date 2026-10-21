import type { LucideIcon } from 'lucide-react'
import { GraduationCap, Radio, Trophy } from 'lucide-react'
import { portfolio, type Highlight } from '../data/portfolio'

const icons: Record<Highlight['icon'], LucideIcon> = {
  graduation: GraduationCap,
  award: Trophy,
  broadcast: Radio,
}

export function Highlights() {
  return (
    <section className="highlights" aria-label="At a glance">
      <ul className="container highlights-grid">
        {portfolio.highlights.map((highlight) => {
          const Icon = icons[highlight.icon]
          return (
            <li className="highlight reveal" key={highlight.label}>
              <span className="highlight-icon" aria-hidden="true">
                <Icon size={17} />
              </span>
              <div className="highlight-copy">
                <span className="highlight-label">{highlight.label}</span>
                <strong>{highlight.value}</strong>
                <span className="highlight-meta">{highlight.meta}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
