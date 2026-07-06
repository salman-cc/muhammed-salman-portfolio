import {
  ArrowDown,
  ArrowUpRight,
  Check,
  Code2,
  GitBranch,
  Mail,
  MapPin,
} from 'lucide-react'
import { Header } from './components/Header'
import { HeroCanvas } from './components/HeroCanvas'
import { Magnetic } from './components/Magnetic'
import { Marquee } from './components/Marquee'
import { ScrambleText } from './components/ScrambleText'
import { ScrollProgress } from './components/ScrollProgress'
import { SectionHeading } from './components/SectionHeading'
import { Spotlight } from './components/Spotlight'
import { TiltCard } from './components/TiltCard'
import { portfolio } from './data/portfolio'

function App() {
  return (
    <div id="top">
      <a className="skip-link" href="#main">Skip to main content</a>
      <ScrollProgress />
      <Spotlight />
      <Header />

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <HeroCanvas />
          <div className="hero-glow" aria-hidden="true" />
          <p className="availability reveal">
            <span aria-hidden="true" /> {portfolio.availability}
          </p>
          <h1 id="hero-title" className="reveal delay-1">
            Frontend experiences built with <span>care and clarity.</span>
          </h1>
          <p className="hero-tagline reveal delay-2">
            <ScrambleText text={`> ${portfolio.role} — building for the web`} delay={700} />
          </p>
          <p className="hero-copy reveal delay-2">{portfolio.intro}</p>
          <div className="hero-actions reveal delay-3">
            <Magnetic>
              <a className="button primary" href="#projects">
                Explore my work <ArrowDown size={17} aria-hidden="true" />
              </a>
            </Magnetic>
            <Magnetic>
              <a className="button secondary" href={`mailto:${portfolio.email}`}>
                Start a conversation <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </Magnetic>
          </div>
          <div className="hero-meta reveal delay-3" aria-label="Profile summary">
            <span><MapPin size={15} aria-hidden="true" /> {portfolio.location}</span>
            <span>{portfolio.role}</span>
          </div>
        </section>

        <Marquee />

        <section id="about" className="section container split-section" aria-labelledby="about-title">
          <SectionHeading id="about-title" eyebrow="01 / About" title="Engineering thoughtful interfaces." />
          <div className="body-copy reveal">
            {portfolio.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section id="skills" className="section container split-section" aria-labelledby="skills-title">
          <SectionHeading id="skills-title" eyebrow="02 / Capabilities" title="A focused frontend toolkit." />
          <div className="skill-groups reveal">
            {portfolio.skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul aria-label={`${group.label} skills`}>
                  {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="section container" aria-labelledby="experience-title">
          <SectionHeading id="experience-title" eyebrow="03 / Experience" title="Learning by shipping." />
          <div className="timeline">
            {portfolio.experience.map((item) => (
              <article className="timeline-item reveal" key={item.organization}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="company">{item.organization}</p>
                </div>
                <div>
                  <p>{item.description}</p>
                  <ul className="achievement-list">
                    {item.achievements.map((achievement) => (
                      <li key={achievement}><Check size={15} aria-hidden="true" />{achievement}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="education" className="section container split-section" aria-labelledby="education-title">
          <SectionHeading id="education-title" eyebrow="04 / Education" title="Continuous, practical learning." />
          <article className="education-card reveal">
            <p className="period">{portfolio.education.period}</p>
            <h3>{portfolio.education.program}</h3>
            <p className="education-provider">{portfolio.education.provider}</p>
            <p>{portfolio.education.description}</p>
          </article>
        </section>

        <section id="projects" className="section container" aria-labelledby="projects-title">
          <SectionHeading id="projects-title" eyebrow="05 / Work" title="Selected project." />
          <div className="project-grid">
            {portfolio.projects.map((project) => (
              <TiltCard className="reveal" key={project.title}>
              <article className="project-card">
                <div className="project-topline">
                  <span>{project.label}</span>
                  <span>2026</span>
                </div>
                <div className="project-content">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="impact-list">
                      {project.impact.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="project-aside">
                    <ul className="project-tags" aria-label={`${project.title} technologies`}>
                      {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                    <div className="project-actions">
                      <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                        Live site <span className="sr-only">(opens in a new tab)</span><ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                      <a className="text-link" href={project.sourceUrl} target="_blank" rel="noreferrer">
                        Source code <span className="sr-only">(opens in a new tab)</span><Code2 size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                </div>
              </article>
              </TiltCard>
            ))}
          </div>
        </section>

        <section id="contact" className="contact section container" aria-labelledby="contact-title">
          <p className="eyebrow reveal">06 / Contact</p>
          <h2 id="contact-title" className="reveal">Let’s build something useful.</h2>
          <p className="reveal">I’m open to frontend opportunities and conversations about thoughtful web products.</p>
          <div className="contact-actions reveal">
            <Magnetic>
              <a className="button primary" href={`mailto:${portfolio.email}`}>
                <Mail size={18} aria-hidden="true" /> Email me
              </a>
            </Magnetic>
            <Magnetic>
              <a className="button secondary" href={portfolio.links.github} target="_blank" rel="noreferrer">
                <GitBranch size={18} aria-hidden="true" /> View GitHub <span className="sr-only">(opens in a new tab)</span>
              </a>
            </Magnetic>
          </div>
          <a className="contact-email reveal" href={`mailto:${portfolio.email}`}>{portfolio.email}</a>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {new Date().getFullYear()} {portfolio.name}</p>
          <p>Designed and built with React + TypeScript</p>
          <a href="#top">Back to top <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </footer>
    </div>
  )
}

export default App
