import { ArrowUpRight, GraduationCap, Mail, MapPin, Phone } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { CopyEmailButton } from './CopyEmailButton'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const phoneHref = `tel:+${portfolio.phone.replace(/\D/g, '')}`

export function Contact() {
  return (
    <section id="contact" className="section contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-panel reveal">
          <div className="contact-main">
            <p className="eyebrow contact-eyebrow">
              <span className="eyebrow-index">06</span>
              <span className="eyebrow-rule" aria-hidden="true" />
              <span>Contact</span>
            </p>

            <h2 id="contact-title">
              Let’s engineer something <em>meaningful.</em>
            </h2>

            <p className="contact-lede">
              Open to embedded systems opportunities, technical collaborations, and research conversations. The
              fastest way to reach me is email — I usually reply within a day.
            </p>

            <div className="contact-actions">
              <a className="button primary" href={`mailto:${portfolio.email}`}>
                <Mail size={17} aria-hidden="true" />
                Email me
              </a>
              <a className="button ghost" href={portfolio.links.linkedin} target="_blank" rel="noreferrer">
                <LinkedInIcon size={16} />
                LinkedIn
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <a className="button ghost" href={portfolio.links.github} target="_blank" rel="noreferrer">
                <GitHubIcon size={16} />
                GitHub
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <CopyEmailButton />
            </div>
          </div>

          <aside className="contact-card" aria-label="Contact details">
            <div className="contact-status">
              <span className="availability-dot" aria-hidden="true" />
              <span>{portfolio.availability}</span>
            </div>

            <dl className="contact-list">
              <div>
                <dt>Personal</dt>
                <dd>
                  <a href={`mailto:${portfolio.email}`}>
                    {portfolio.email}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </dd>
              </div>
              <div>
                <dt>University</dt>
                <dd>
                  <a href={`mailto:${portfolio.universityEmail}`}>
                    {portfolio.universityEmail}
                    <ArrowUpRight size={13} aria-hidden="true" />
                  </a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={phoneHref}>
                    <Phone size={13} aria-hidden="true" />
                    {portfolio.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>
                  <span>
                    <MapPin size={13} aria-hidden="true" />
                    {portfolio.location}
                  </span>
                </dd>
              </div>
            </dl>

            <p className="contact-card-foot">
              <GraduationCap size={13} aria-hidden="true" />
              M.Sc. Electronics · CUSAT · Expected 2027
            </p>
          </aside>
        </div>
      </div>
    </section>
  )
}
