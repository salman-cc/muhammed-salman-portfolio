import { portfolio } from '../data/portfolio'

const items = portfolio.marquee

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul className="marquee-group" key={copy}>
            {items.map((item) => (
              <li className="marquee-item" key={`${copy}-${item}`}>
                {item}
                <span className="marquee-plus">+</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
