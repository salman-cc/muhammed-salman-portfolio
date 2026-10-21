import { ArrowDown, ArrowUpRight, Cpu, MapPin } from 'lucide-react'
import { useState } from 'react'
import { portfolio } from '../data/portfolio'
import { Monogram } from './Monogram'
import { SmartImage } from './SmartImage'

export function Hero() {
  const [portraitFailed, setPortraitFailed] = useState(false)
  const degree = portfolio.education[0]
  const year = new Date().getFullYear()

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <p className="availability intro">
            <span className="availability-dot" aria-hidden="true" />
            {portfolio.availability}
          </p>

          <p className="hero-kicker intro intro-1">Hello, I’m {portfolio.preferredName}.</p>

          <h1 id="hero-title" className="intro intro-2">
            I build the circuits. <em>I write the firmware.</em>
          </h1>

          <p className="hero-copy intro intro-3">{portfolio.intro}</p>

          <div className="hero-actions intro intro-3">
            <a className="button primary" href="#projects">
              View selected work
              <ArrowDown size={16} aria-hidden="true" />
            </a>
            <a className="button ghost" href={`mailto:${portfolio.email}`}>
              Get in touch
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-meta intro intro-4">
            <span>
              <MapPin size={14} aria-hidden="true" />
              {portfolio.location}
            </span>
            <span className="meta-divider" aria-hidden="true" />
            <span>
              <Cpu size={14} aria-hidden="true" />
              {portfolio.role} @ CUSAT
            </span>
          </div>
        </div>

        <div className="hero-visual intro intro-2">
          <svg className="hero-schematic" viewBox="0 0 460 460" fill="none" aria-hidden="true" focusable="false">
            <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="square">
              <path d="M460 70H372V122H286V88" />
              <path d="M460 154H400V208H330" />
              <path d="M0 292H80V248H154V292" />
              <path d="M460 336H384V292H326V336H272" />
              <path d="M36 460V404H112V460" />
              <path d="M460 240H422V190" />
            </g>
            <g fill="currentColor">
              <circle cx="286" cy="88" r="3" />
              <circle cx="330" cy="208" r="3" />
              <circle cx="154" cy="292" r="3" />
              <circle cx="272" cy="336" r="3" />
              <circle cx="112" cy="460" r="3" />
              <circle cx="422" cy="190" r="3" />
            </g>
          </svg>

          <figure className="portrait">
            <div className={`portrait-frame${portraitFailed ? ' is-fallback' : ''}`}>
              <span className="portrait-corner corner-tl" aria-hidden="true" />
              <span className="portrait-corner corner-tr" aria-hidden="true" />
              <span className="portrait-corner corner-bl" aria-hidden="true" />
              <span className="portrait-corner corner-br" aria-hidden="true" />
              <SmartImage
                src={portfolio.profileImage}
                alt={`Portrait of ${portfolio.name}`}
                loading="eager"
                fetchPriority="high"
                onError={() => setPortraitFailed(true)}
                fallback={<Monogram initials="MS" label="Embedded systems engineer" />}
              />
              <div className="portrait-card">
                <span className="portrait-card-label">Currently</span>
                <strong>{degree.program}</strong>
                <span>{degree.provider.split(',')[0]} · Expected 2027</span>
              </div>
            </div>
            <figcaption>
              <span>Focus / {year}</span>
              <strong>Embedded · FPGA · IoT</strong>
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="container hero-foot intro intro-4">
        <a className="scroll-cue" href="#about">
          <span className="scroll-cue-icon" aria-hidden="true">
            <ArrowDown size={14} />
          </span>
          Scroll for more
        </a>
        <p className="hero-note" aria-hidden="true">
          Analog · digital · firmware
        </p>
      </div>
    </section>
  )
}
