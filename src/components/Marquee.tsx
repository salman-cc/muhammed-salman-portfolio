import { portfolio } from '../data/portfolio'

const items = portfolio.skillGroups.flatMap((group) => group.skills)

export function Marquee() {
  return (
    <div className="marquee" aria-label="Technologies I work with">
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
            {items.map((item) => (
              <span className="marquee-item" key={`${copy}-${item}`}>
                {item}
                <span className="marquee-dot" />
              </span>
            ))}
          </div>
        ))}
      </div>
      <span className="sr-only">{items.join(', ')}</span>
    </div>
  )
}
