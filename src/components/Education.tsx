import { GraduationCap } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { SectionHeading } from './SectionHeading'
import { SmartImage } from './SmartImage'

export function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading
          id="education-title"
          index="05"
          label="Education"
          title="A foundation in electronics."
          lede="Formal training in analog, digital, and embedded systems — now focused on intelligent hardware and FPGA design."
        />

        <div className="education-grid">
          {portfolio.education.map((entry) => (
            <article className="education-card reveal" key={entry.program}>
              <div className="education-top">
                {entry.logo ? (
                  <SmartImage
                    src={entry.logo}
                    alt={`${entry.provider} logo`}
                    className="education-logo education-logo-img"
                    fallback={
                      <span className="education-logo is-fallback" aria-hidden="true">
                        <GraduationCap size={25} />
                      </span>
                    }
                  />
                ) : (
                  <span className="education-logo is-fallback" aria-hidden="true">
                    <GraduationCap size={25} />
                  </span>
                )}
                <span className="education-period">{entry.period}</span>
              </div>

              <h3>{entry.program}</h3>
              <p className="education-provider">{entry.provider}</p>
              <p className="education-detail">{entry.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
