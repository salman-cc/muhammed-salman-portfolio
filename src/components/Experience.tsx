import type { LucideIcon } from 'lucide-react'
import { Briefcase, FlaskConical, Megaphone } from 'lucide-react'
import { portfolio, type ExperienceKind } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const kindIcons: Record<ExperienceKind, LucideIcon> = {
  work: Briefcase,
  research: FlaskConical,
  community: Megaphone,
}

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading
          id="experience-title"
          index="04"
          label="Experience"
          title="What I've done outside coursework."
          lede="An internship, a research seminar, and a channel I started."
        />

        <ol className="timeline">
          {portfolio.experience.map((item) => {
            const Icon = kindIcons[item.kind]
            return (
              <li className="timeline-item reveal" key={item.title}>
                <p className="timeline-period">{item.period}</p>
                <span className="timeline-rail" aria-hidden="true">
                  <span className="timeline-dot" />
                </span>
                <article className="timeline-card">
                  <div className="timeline-head">
                    <span className="timeline-icon" aria-hidden="true">
                      <Icon size={16} />
                    </span>
                    <div>
                      <h3>{item.title}</h3>
                      <p className="timeline-org">{item.org}</p>
                    </div>
                  </div>
                  <p className="timeline-description">{item.description}</p>
                  <ul className="tag-list timeline-tags">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
