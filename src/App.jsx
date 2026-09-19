import { useState } from 'react';
import { profile, expertise, experience, projects, education, training } from './portfolio';
import './App.css';

const navigation = [['about', 'About'], ['expertise', 'Expertise'], ['experience', 'Experience'], ['projects', 'Projects'], ['education', 'Education'], ['contact', 'Contact']];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function SectionHeading({ number, label, title, children }) {
  return <div className="section-heading"><p className="eyebrow"><span>{number}</span> / {label}</p><h2>{title}</h2>{children && <p className="section-intro">{children}</p>}</div>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><a className="wordmark" href="#home" aria-label="Vivek Singh home">VS<span> / </span></a>
    <button className="menu-button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>{open ? 'Close −' : 'Menu +'}</button>
    <nav id="main-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="Main navigation" onKeyDown={event => { if (event.key === 'Escape') { setOpen(false); document.querySelector('.menu-button')?.focus(); } }}>
      {navigation.map(([id, label]) => <a href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>)}
    </nav><a className="header-link" href={`mailto:${profile.email}`}>Let’s connect <Arrow /></a>
  </header>;
}

function FlowGraphic() {
  return <div className="flow-graphic" aria-hidden="true"><svg viewBox="0 0 660 500" fill="none"><defs><linearGradient id="flow" x1="0" y1="250" x2="660" y2="250" gradientUnits="userSpaceOnUse"><stop stopColor="#87e8db" stopOpacity="0"/><stop offset=".4" stopColor="#87e8db"/><stop offset="1" stopColor="#87e8db" stopOpacity=".2"/></linearGradient></defs>{Array.from({ length: 22 }, (_, i) => { const y = 45 + i * 19; const bend = (y - 250) * .55; return <path key={i} d={`M0 ${y} C150 ${y}, 195 ${y + bend}, 320 ${y + bend} S490 ${y}, 660 ${y}`} stroke="url(#flow)" strokeWidth={i % 5 === 0 ? 1.5 : .65}/>; })}<path d="M330 20V480M60 250H630" stroke="#86a2a5" strokeOpacity=".18" strokeDasharray="3 6"/><circle cx="330" cy="250" r="140" stroke="#86a2a5" strokeOpacity=".18"/><circle cx="330" cy="250" r="4" fill="#87e8db"/></svg><div className="graphic-caption"><span>FLUID DYNAMICS</span><span>MODELLING → INSIGHT</span></div></div>;
}

function ProjectCard({ project, index }) {
  return <article className="project-card"><div className="project-topline"><span className="project-number">0{index + 1}</span><span>{project.category}</span></div><h3>{project.title}</h3>
    {project.institution && <p className="project-institution">{project.institution}</p>}
    {project.period && <p className="metadata">{project.period}{project.status && <span className="status">{project.status}</span>}</p>}
    <p>{project.summary}</p><ul className="project-points">{project.points.map(point => <li key={point}>{point}</li>)}</ul><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
  </article>;
}

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main">
    <section className="hero section-shell" id="home" aria-labelledby="hero-title"><div className="hero-copy"><p className="eyebrow"><span className="signal"/> {profile.role} · {profile.location}</p><h1 id="hero-title">Vivek<br/><span>Singh.</span></h1><p className="hero-statement">Understanding flow.<br/>Informing engineering decisions.</p><p className="hero-description">Fluid dynamics, aerodynamics, and thermal analysis — from vehicle simulation to data-driven research.</p><div className="hero-actions"><a className="button button-primary" href="#projects">Explore my work <Arrow /></a><a className="button button-secondary" href="/Vivek_Singh_CV.pdf" download>Download resume <span aria-hidden="true">↓</span></a></div></div><FlowGraphic/><div className="hero-footer"><span>MSc Automotive Engineering · Cranfield University</span><a href="#about">Discover more <span aria-hidden="true">↓</span></a></div></section>

    <section className="section-shell section about-section" id="about"><SectionHeading number="01" label="About" title="A rigorous approach to every simulation."/><div className="about-copy"><p className="large-copy">{profile.summary}</p><p>I work across mesh generation, turbulence modelling, boundary conditions, and post-processing, validating simulation and surrogate predictions against independent reference data.</p><p>My experience spans multidisciplinary engineering teams, independently scoped MSc research, and presenting technical findings at an international research conference.</p><div className="facts"><div><strong>2+ <span>years</span></strong><span>Hands-on simulation experience</span></div><div><strong>10<span>%</span></strong><span>CFD workflow efficiency improvement at Tata Technologies</span></div></div></div></section>

    <section className="section-shell section" id="expertise"><SectionHeading number="02" label="Expertise" title="Physics. Models. Engineering insight."/><div className="expertise-grid">{expertise.map((group, i) => <article className="expertise-card" key={group.title}><span className="small-index">0{i + 1}</span><h3>{group.title}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></section>

    <section className="section-shell section" id="experience"><SectionHeading number="03" label="Experience" title="Simulation in engineering practice."/><article className="experience-layout"><div className="experience-aside"><p className="eyebrow">{experience.period}</p><h3>{experience.employer}</h3><p>{experience.location}</p></div><div className="experience-content"><h3>{experience.role}</h3><ul className="detail-list">{experience.points.map(point => <li key={point}>{point}</li>)}</ul></div></article></section>

    <section className="projects-section" id="projects"><div className="section-shell section"><SectionHeading number="04" label="Selected projects" title="From flow prediction to physical performance.">Research and engineering projects across aerodynamics, vehicle structures, motorsport, and composite materials.</SectionHeading><div className="project-grid">{projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index}/>)}</div></div></section>

    <section className="section-shell section" id="education"><SectionHeading number="05" label="Education" title="Grounded in engineering."/><div className="education-list">{education.map(item => <article className="education-row" key={item.degree}><p className="metadata">{item.period}</p><div><h3>{item.degree}</h3><p className="university">{item.university} <span>· {item.location}</span></p><p>{item.details}</p></div></article>)}</div></section>

    <section className="section-shell section development-section" id="training"><SectionHeading number="06" label="Training & volunteering" title="Learning, leading, and building together."/><div className="development-grid"><article><p className="eyebrow">Professional training</p><h3>Continuing technical development</h3><ul className="detail-list">{training.map(item => <li key={item}>{item}</li>)}</ul></article><article><p className="eyebrow">September 2019 — March 2022</p><h3>Team Captain & Development Driver</h3><p className="university">Parakram Formula Student Team · DIT University, India</p><p>Directed technical and operational work across aerodynamics, chassis, powertrain, and electronics. Championed the aerodynamic concept from initial ideas to CFD, physical build, and competition validation.</p><p>Competed as a development driver at national level, providing vehicle-balance feedback for further iteration, and secured external technical and financial sponsorships through stakeholder engagement.</p></article></div></section>

    <section className="contact-section" id="contact"><div className="section-shell section"><p className="eyebrow"><span>07</span> / Contact</p><div className="contact-heading"><h2>Let’s talk<br/><span>engineering.</span></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Vivek Singh"><Arrow/></a></div><a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a><div className="contact-details"><span>{profile.location}</span><a href="tel:+447352670122">{profile.phone}</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <Arrow/></a><a href="/Vivek_Singh_CV.pdf" download>Resume <span aria-hidden="true">↓</span></a></div></div></section>
  </main><footer className="site-footer section-shell"><span>Vivek Singh · CFD Engineer</span><a href="#home">Back to top ↑</a></footer></>;
}
