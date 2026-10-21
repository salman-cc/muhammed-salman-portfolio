import { Compass, Telescope } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container split">
        <div className="about-aside">
          <SectionHeading id="about-title" index="01" label="Profile" title="Electronics first. Always curious." />
          <aside className="explore-card reveal" aria-label="Currently exploring">
            <div className="explore-head">
              <Telescope size={15} aria-hidden="true" />
              <span>{portfolio.currentlyExploring.label}</span>
            </div>
            <p>{portfolio.currentlyExploring.body}</p>
            <ul className="tag-list">
              {portfolio.currentlyExploring.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="about-body">
          <div className="body-copy reveal">
            {portfolio.about.map((paragraph, index) => (
              <p className={index === 0 ? 'lead' : undefined} key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className="interest-card reveal">
            <div className="interest-head">
              <Compass size={15} aria-hidden="true" />
              <span>Research interests</span>
            </div>
            <ul className="interest-list">
              {portfolio.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
