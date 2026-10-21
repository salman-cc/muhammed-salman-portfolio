import type { LucideIcon } from 'lucide-react'
import { Binary, CircuitBoard, Cpu, Radio, Terminal } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'

const skillIcons: LucideIcon[] = [Cpu, CircuitBoard, Binary, Terminal, Radio]

export function Skills() {
  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading
          id="skills-title"
          index="02"
          label="Technical stack"
          title="Hardware-minded, software-capable."
          lede="From firmware and RTL to PCB layout and connected dashboards — a toolkit that crosses the hardware/software boundary."
        />

        <div className="skills-grid">
          {portfolio.skillGroups.map((group, index) => {
            const Icon = skillIcons[index] ?? Cpu
            return (
              <article className="skill-card reveal" key={group.label}>
                <div className="skill-head">
                  <span className="skill-icon" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                  <h3>{group.label}</h3>
                  <span className="skill-index" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <ul className="tag-list">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
