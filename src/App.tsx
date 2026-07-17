import { ArrowDown, ArrowUpRight, Award, Check, Cpu, GitBranch, Link, Mail, MapPin, Phone } from 'lucide-react'
import { Header } from './components/Header'
import { SectionHeading } from './components/SectionHeading'
import { portfolio } from './data/portfolio'

function App() {
  return <div id="top">
    <a className="skip-link" href="#main">Skip to main content</a><Header />
    <main id="main">
      <section className="hero container" aria-labelledby="hero-title">
        <div className="hero-copy-wrap">
          <p className="availability reveal"><span aria-hidden="true" />{portfolio.availability}</p>
          <p className="hero-kicker reveal">Hello, I’m {portfolio.preferredName}.</p>
          <h1 id="hero-title" className="reveal delay-1">Building smarter systems, <span>one circuit at a time.</span></h1>
          <p className="hero-copy reveal delay-2">{portfolio.intro}</p>
          <div className="hero-actions reveal delay-3"><a className="button primary" href="#projects">Explore my projects <ArrowDown size={17}/></a><a className="button secondary" href={`mailto:${portfolio.email}`}>Contact me <ArrowUpRight size={17}/></a></div>
          <div className="hero-meta reveal"><span><MapPin size={15}/>{portfolio.location}</span><span><Cpu size={15}/>{portfolio.role} @ CUSAT</span></div>
        </div>
        <figure className="portrait reveal"><div className="portrait-frame"><img src={portfolio.profileImage} alt="Muhammed Salman CC" /></div><figcaption><span>Focus / 2026</span><strong>Embedded · FPGA · IoT</strong></figcaption></figure>
      </section>

      <section id="about" className="section container split-section" aria-labelledby="about-title"><SectionHeading id="about-title" eyebrow="01 / Profile" title="Electronics first. Always curious."/><div className="body-copy reveal">{portfolio.about.map(p=><p key={p}>{p}</p>)}<div className="interest-strip"><span>Research interests</span><p>Embedded AI · Robotics · Edge AI · Computer Vision · Hardware Acceleration · Automation</p></div></div></section>

      <section id="skills" className="section container split-section" aria-labelledby="skills-title"><SectionHeading id="skills-title" eyebrow="02 / Technical Stack" title="Hardware-minded, software-capable."/><div className="skill-groups reveal">{portfolio.skillGroups.map(g=><div className="skill-group" key={g.label}><h3>{g.label}</h3><ul>{g.skills.map(s=><li key={s}>{s}</li>)}</ul></div>)}</div></section>

      <section id="projects" className="section container" aria-labelledby="projects-title"><SectionHeading id="projects-title" eyebrow="03 / Selected Work" title="Systems built for the real world."/><div className="project-grid">{portfolio.projects.map((p,i)=><article className={`project-card reveal ${i===0?'featured':''}`} key={p.title}>{p.image&&<div className="project-image"><img src={p.image} alt={`${p.title} project`} /></div>}<div className="project-content"><div className="project-topline"><span>{p.label}</span>{p.badge&&<strong><Award size={14}/>{p.badge}</strong>}</div><h3>{p.title}</h3><p>{p.description}</p><ul className="impact-list">{p.impact.map(x=><li key={x}><Check size={14}/>{x}</li>)}</ul><ul className="project-tags">{p.tags.map(t=><li key={t}>{t}</li>)}</ul></div></article>)}</div></section>

      <section id="experience" className="section container" aria-labelledby="experience-title"><SectionHeading id="experience-title" eyebrow="04 / Experience" title="Learning through engineering."/><div className="timeline"><article className="timeline-item reveal"><p className="period">2 months · Online</p><div><h3>IoT Intern</h3><p className="company">Sparkiit</p></div><div><p>Hands-on development with ESP32, NodeMCU, embedded programming, sensor interfacing, and IoT communication.</p></div></article><article className="timeline-item reveal"><p className="period">Research seminar</p><div><h3>FPGA-Based Vision Processing</h3><p className="company">For Autonomous Robots</p></div><div><p>Exploring FPGA architecture, computer vision, robotics, hardware acceleration, and autonomous systems.</p></div></article><article className="timeline-item reveal"><p className="period">Founder · Present</p><div><h3>Content Creator</h3><p className="company">AiCoN Tech Hub</p></div><div><p>Creating accessible educational content about AI, Linux, programming, cybersecurity, open source, and developer tools.</p></div></article></div></section>

      <section id="education" className="section container split-section" aria-labelledby="education-title"><SectionHeading id="education-title" eyebrow="05 / Education" title="A foundation in electronics."/><div className="education-list">{portfolio.education.map(e=><article className="education-card reveal" key={e.program}>{e.logo&&<img src={e.logo} alt="CUSAT logo"/>}<div><p className="period">{e.period}</p><h3>{e.program}</h3><p className="education-provider">{e.provider}</p><p>{e.detail}</p></div></article>)}</div></section>

      <section id="contact" className="contact section container" aria-labelledby="contact-title"><p className="eyebrow reveal">06 / Contact</p><h2 id="contact-title" className="reveal">Let’s engineer something <span>meaningful.</span></h2><p className="reveal">Open to embedded systems opportunities, technical collaborations, and research conversations.</p><div className="contact-actions reveal"><a className="button primary" href={`mailto:${portfolio.email}`}><Mail size={18}/>Email me</a><a className="button secondary" href={portfolio.links.linkedin} target="_blank" rel="noreferrer"><Link size={18}/>LinkedIn</a><a className="button secondary" href={portfolio.links.github} target="_blank" rel="noreferrer"><GitBranch size={18}/>GitHub</a></div><div className="contact-details"><a href={`mailto:${portfolio.universityEmail}`}>{portfolio.universityEmail}</a><a href="tel:+919746707833"><Phone size={14}/>{portfolio.phone}</a></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><p>© {new Date().getFullYear()} {portfolio.name}</p><p>Electronics · Embedded Systems · Open Source</p><a href="#top">Back to top <ArrowUpRight size={14}/></a></div></footer>
  </div>
}
export default App
