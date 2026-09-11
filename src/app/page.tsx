import Image from "next/image";
import { ArrowDown, ArrowUpRight, Plus, Sparkles, Camera, Dumbbell, MapPin } from "lucide-react";

const projects = [
  { number: "01", company: "ROSETTA STONE", category: "Growth & experimentation", title: "A little less friction. A lot more possibility.", description: "Building an experimentation capability from scratch, then putting it to work on the path from choosing a plan to checking out.", metric: "+26%", label: "plan-selection-to-checkout conversion", color: "pink", detail: "I partnered directly with engineers to define and build Rosetta Stone’s first in-house A/B testing framework. With that capability in place, I shipped changes to the purchase journey that improved conversion from plan selection to checkout by 26%.", extra: "I also led landing pages, checkout, and account creation for the consumer subscription relaunch. Within two months, the product reached 14K paid subscribers and $190K in monthly recurring revenue, with a 42% trial-to-paid conversion rate.", tags: ["Experiment design", "Acquisition", "Analytics"] },
  { number: "02", company: "ROSETTA STONE", category: "AI-powered workflows", title: "From a blank page to 300,000+ assets.", description: "Making AI content generation work across a core learning feature, with written copy, images, and audio at scale.", metric: "300K+", label: "assets across the Flashcards feature", color: "orange", detail: "I defined and directed AI-powered content generation for Rosetta Stone’s Flashcards feature, spanning more than 300,000 assets. The work brought together written copy, images, and audio in support of a core learning experience.", extra: "I also worked hands-on with AI tools on more than 200 assets for 25 SEO landing pages. My remit spans both the acquisition experience and the product people use after signing up.", tags: ["Generative AI", "Content workflows", "Product delivery"] },
  { number: "03", company: "CLEARCO", category: "Fintech & onboarding", title: "Less waiting. More getting started.", description: "Bringing automated identity verification into onboarding so customers could get moving and teams could spend less time on manual review.", metric: "−47%", label: "customer activation time", color: "green", detail: "As a Product Management Intern at Clearco, I led the research and integration of automated customer identity verification into the onboarding flow.", extra: "The integration reduced customer activation time by 47% and manual internal review time by 32%. It connected a better customer experience with a more efficient internal process.", tags: ["Customer research", "Onboarding", "Automation"] },
];

export default function Home() {
  return (
    <main id="top">
      <a href="#work" className="skip-link">Skip to selected work</a>
      <div className="site-shell">
        <header className="flex items-center justify-between gap-5 py-7 sm:py-9">
          <a href="#top" className="wordmark" aria-label="Merissa Li home">merissa li<span aria-hidden="true">✳</span></a>
          <nav aria-label="Main navigation" className="flex items-center gap-5 text-sm sm:gap-9">
            <a href="#work">Work</a><a href="#about">A little about me</a><a href="#contact" className="nav-contact">Say hello <ArrowUpRight size={15} /></a>
          </nav>
        </header>

        <section className="hero grid items-center gap-12 lg:grid-cols-[1.45fr_1fr]" aria-labelledby="hero-title">
          <div>
            <p className="eyebrow mb-6"><span className="status-dot" /> PRODUCT MANAGER · HANDS-ON BUILDER</p>
            <h1 id="hero-title">Product questions.<br />Shipped <span className="highlight">experiments.<svg viewBox="0 0 520 20" preserveAspectRatio="none" aria-hidden="true"><path d="M4 13 Q220 -2 510 10 M30 18 Q270 6 483 17" /></svg></span></h1>
            <p className="hero-intro">Hi, I’m Merissa. I turn product questions into shipped experiments — connecting customer needs, data, and a willingness to get my hands dirty.</p>
            <p className="hero-role">Currently building at <strong>Rosetta Stone / IXL Learning.</strong></p>
            <div className="mt-8 flex flex-wrap items-center gap-6"><a className="button button-dark" href="#work">Explore my work <ArrowDown size={17} /></a></div>
          </div>
          <div className="portrait-wrap">
            <span className="portrait-spark" aria-hidden="true">✳</span>
            <div className="portrait-frame"><Image src="/images/merissa-li.jpeg" alt="Merissa Li smiling outdoors" width={800} height={800} priority sizes="(max-width: 1023px) 80vw, 400px" /><div className="portrait-caption"><span>Hi, I’m Merissa!</span><span aria-hidden="true">↗</span></div></div>
            <div className="portrait-note">curious by default.<br />hands-on by choice.</div>
          </div>
        </section>

        <div className="chapter-divider"><span>GOOD QUESTIONS. MEASURABLE PROGRESS.</span><ArrowDown size={17} /></div>

        <section id="work" className="work-section scroll-mt-8" aria-labelledby="work-title">
          <div className="section-heading"><div><p className="eyebrow">A FEW THINGS I’VE HELPED MOVE FORWARD</p><h2 id="work-title">Small details.<br className="sm:hidden" /> Meaningful impact<span className="orange-dot">.</span></h2></div><span className="side-note">Selected work / 01—03</span></div>
          <div className="project-list">{projects.map((project) => (
            <article key={project.number} className={`project-card ${project.color}`}>
              <div className="project-copy"><div className="project-meta"><span>{project.number} / {project.company}</span><span>{project.category}</span></div><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
              <div className="metric-panel"><span className="metric-decoration" aria-hidden="true">{project.number === "01" ? "↗" : project.number === "02" ? "✳" : "↘"}</span><strong>{project.metric}</strong><span>{project.label}</span></div>
              <details className="project-details"><summary><span>Behind the outcome</span><Plus size={20} className="details-icon" /></summary><div className="detail-body"><div><h4>My role</h4><p>{project.detail}</p></div><div><h4>The bigger picture</h4><p>{project.extra}</p></div></div></details>
            </article>
          ))}</div>
        </section>

        <section id="about" className="about-section scroll-mt-8" aria-labelledby="about-title">
          <div className="about-intro"><p className="eyebrow">BUSINESS BRAIN. BUILDER’S INSTINCT.</p><h2 id="about-title">Comfortable with<br />the big picture.<br /><span className="serif-ish">And the messy middle.</span></h2><p>I studied Business and Computer Science at UBC, and I’ve kept a foot in both worlds ever since. My work has taken me from SQL analysis and front-end engineering to product discovery, growth experiments, and AI workflows.</p><p>Today, I own acquisition, subscription management, Flashcards, and internal support tooling at Rosetta Stone.</p><div className="toolkit"><span className="eyebrow">OFTEN IN MY TOOLKIT</span><div className="tags">{["SQL", "Amplitude", "GA4", "Figma", "Codex", "Gemini", "Jira"].map(tool=><span key={tool}>{tool}</span>)}</div></div></div>
          <div className="experience-note"><div className="note-heading"><span>THE PATH SO FAR</span><Sparkles size={22}/></div><div className="career-item"><span>2023 — NOW</span><h3>IXL Learning / Rosetta Stone</h3><p>Product Manager</p><p className="career-detail">From an APM rotation to consumer growth. Along the way: a discoverability redesign at Education.com that increased MAU by 23%.</p></div><div className="career-item"><span>2022</span><h3>Clearco</h3><p>Product Management Intern</p></div><div className="career-item"><span>2021</span><h3>Royal Bank of Canada</h3><p>Software Engineering Intern</p><p className="career-detail">Part of a four-person team building an ML-driven cloud optimization solution that delivered $1.5M in annual savings.</p></div><div className="career-item"><span>2020</span><h3>Trulioo</h3><p>Business Analyst Intern</p></div><div className="education"><span>THE FOUNDATION</span><p>University of British Columbia · 2023<br /><strong>B.Com., Business & Computer Science</strong></p></div></div>
        </section>

        <section className="off-clock" aria-labelledby="off-clock-title"><div><p className="eyebrow">A LITTLE MORE HUMAN</p><h2 id="off-clock-title">Away from the tabs.</h2><p>Usually lifting something heavy,<br />finding a new trail, or taking the scenic route.</p></div><div className="interest"><Dumbbell size={28} strokeWidth={1.5}/><h3>Chasing a stronger total</h3><p>832 lb powerlifting total</p></div><div className="interest"><MapPin size={28} strokeWidth={1.5}/><h3>Taking the long way</h3><p>Solo travel · Balkans, 2026</p></div><div className="interest"><Camera size={28} strokeWidth={1.5}/><h3>Noticing the little things</h3><p>Photography & hiking</p></div></section>

        <section id="contact" className="contact-section scroll-mt-8" aria-labelledby="contact-title"><div><p className="eyebrow">GOOD CONVERSATIONS START HERE</p><h2 id="contact-title">Something in mind?<br />Let’s talk<span aria-hidden="true" className="contact-star">✳</span></h2><p>I’d love to hear what you’re building.</p></div><a className="button button-dark" href="mailto:merissajli@gmail.com">merissajli@gmail.com <ArrowUpRight size={20}/></a></section>
        <footer className="flex flex-wrap items-center justify-between gap-5 py-7 text-sm"><span>© {new Date().getFullYear()} Merissa Li</span><div className="flex gap-6"><a href="https://www.linkedin.com/in/merissali/" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="https://github.com/merissali" target="_blank" rel="noreferrer">GitHub ↗</a><a href="#top">Back to top ↑</a></div></footer>
      </div>
    </main>
  );
}
