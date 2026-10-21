import type { LucideIcon } from 'lucide-react'
import { Check, CircuitBoard, HeartPulse, Trophy, Wifi } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

const projectIcons: Record<string, LucideIcon> = {
  'Embedded Systems': CircuitBoard,
  'Internet of Things': Wifi,
  'Healthcare IoT': HeartPulse,
}

function tintFor(index: number) {
  return `tint-${(index % 3) + 1}`
}

function ProjectPlaceholder({ project, Icon }: { project: (typeof portfolio.projects)[number]; Icon: LucideIcon }) {
  return (
    <div className="project-placeholder">
      <Icon size={56} strokeWidth={1.1} aria-hidden="true" />
      <span className="placeholder-label">{project.label}</span>
    </div>
  )
}

export function Projects() {
  const [failedImages, setFailedImages] = useState<string[]>([])
  const hasImage = (title: string, image?: string) => Boolean(image) && !failedImages.includes(title)

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          index="03"
          label="Selected work"
          title="Systems built for the real world."
          lede="Three builds spanning power electronics, connected metering, and wearable healthcare — each taken from circuit design to working firmware."
        />

        <div className="project-grid">
          {portfolio.projects.map((project, index) => {
            const Icon = projectIcons[project.label] ?? CircuitBoard
            return (
              <article
                key={project.title}
                className={`project-card reveal ${index === 0 ? 'is-featured' : ''} ${tintFor(index)}`}
                aria-labelledby={`project-title-${index}`}
              >
                <div className={`project-media${hasImage(project.title, project.image) ? ' has-image' : ''}`}>
                  <span className="project-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {project.image ? (
                    <SmartImage
                      src={project.image}
                      alt={`${project.title} project preview`}
                      onError={() => setFailedImages((current) => [...current, project.title])}
                      fallback={<ProjectPlaceholder project={project} Icon={Icon} />}
                    />
                  ) : (
                    <ProjectPlaceholder project={project} Icon={Icon} />
                  )}
                </div>

                <div className="project-body">
                  <div className="project-topline">
                    <span className="project-category">{project.label}</span>
                    {project.badge ? (
                      <span className="badge">
                        <Trophy size={12} aria-hidden="true" />
                        {project.badge}
                      </span>
                    ) : null}
                  </div>

                  <h3 id={`project-title-${index}`}>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <ul className="impact-list">
                    {project.impact.map((item) => (
                      <li key={item}>
                        <Check size={13} aria-hidden="true" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="tag-list project-tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
