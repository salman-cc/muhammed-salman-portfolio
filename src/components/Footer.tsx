import { ArrowUp, Mail } from 'lucide-react'
import { portfolio } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './SocialIcons'

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#top" aria-label={`${portfolio.name} — back to top`}>
              <span className="brand-mark" aria-hidden="true">
                MS
              </span>
              <span className="brand-text">
                <span className="brand-name">{portfolio.name}</span>
              </span>
            </a>
            <p>Electronics student building intelligent systems from sensor to cloud.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer">
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-social">
            <a
              className="social-link"
              href={portfolio.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub (opens in a new tab)"
            >
              <GitHubIcon size={17} />
            </a>
            <a
              className="social-link"
              href={portfolio.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
            >
              <LinkedInIcon size={17} />
            </a>
            <a className="social-link" href={`mailto:${portfolio.email}`} aria-label="Email Muhammed Salman">
              <Mail size={17} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {portfolio.name}
          </p>
          <p className="footer-note">Designed &amp; built with React · TypeScript · Vite</p>
          <a href="#top">
            Back to top
            <ArrowUp size={13} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
