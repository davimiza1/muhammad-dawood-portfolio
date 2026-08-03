"use client";

import { useState } from "react";

const projects = [
  {
    number: "01",
    type: "FLAGSHIP SAAS",
    title: "LeadIQ AI",
    description: "A secure real-estate lead intelligence workspace that scores purchase intent, classifies opportunities, and turns spreadsheet data into an actionable sales pipeline.",
    features: ["Supabase authentication", "Persistent user-scoped leads", "Validated CSV import", "Scoring & analytics"],
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    live: "https://leadiq-ai-xtiz-pearl.vercel.app",
    github: "https://github.com/davimiza1/leadiq-ai",
    visual: "leadiq",
  },
  {
    number: "02",
    type: "CRM AUTOMATION",
    title: "AI Lead Qualification",
    description: "A secure TypeScript service that receives WordPress leads, verifies webhooks, explains each score, synchronizes GoHighLevel, and protects the workflow from duplicates.",
    features: ["HMAC verification", "Schema validation", "GHL contact upsert", "Idempotency & audit logs"],
    stack: ["TypeScript", "GoHighLevel", "REST APIs", "Docker"],
    github: "https://github.com/davimiza1/ai-lead-qualification-ghl",
    visual: "automation",
  },
  {
    number: "03",
    type: "AI PRODUCT",
    title: "SupportPilot AI",
    description: "An interactive support workspace with searchable tickets, priority workflows, contextual AI reply drafts, internal notes, and server-backed demo actions.",
    features: ["Ticket workflows", "AI-assisted replies", "Customer context", "Server actions"],
    stack: ["Next.js", "React", "TypeScript", "Vercel"],
    live: "https://supportpilot-ai-chi.vercel.app",
    github: "https://github.com/davimiza1/supportpilot-ai",
    visual: "support",
  },
  {
    number: "04",
    type: "DATA EXPERIENCE",
    title: "CommercePulse",
    description: "A responsive e-commerce analytics dashboard for revenue, orders, customers, products, sales channels, and inventory health.",
    features: ["Interactive reporting", "Inventory alerts", "Product filtering", "Responsive dark mode"],
    stack: ["Next.js", "TypeScript", "Recharts", "Vercel"],
    live: "https://commerce-pulse.vercel.app",
    github: "https://github.com/davimiza1/commerce-pulse",
    visual: "commerce",
  },
];

const clientWork = [
  { title: "Home Seekers Real Estate", category: "WordPress · Real Estate", text: "Elementor layouts, property fields, CRM inquiry architecture, responsive browsing, and performance work.", link: "https://homeseekersre.com/" },
  { title: "Himalayas Overseas Education", category: "WordPress · Education", text: "Destination-led content architecture, inquiry generation, credibility content, and on-page SEO.", link: "https://himalayaseducation.pk/" },
  { title: "WordPress CRM Lead Connector", category: "PHP · Integration", text: "Original plugin for secure Elementor lead delivery with HMAC signing, retries, safe requests, and private logs.", link: "https://github.com/davimiza1/wordpress-crm-lead-connector" },
  { title: "Elevate Business Pro", category: "WordPress · Theme Engineering", text: "Original hybrid theme with Elementor support, Gutenberg patterns, design controls, and accessible navigation.", link: "https://github.com/davimiza1/wordpress-business-block-theme" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Muhammad Dawood home"><span>MD</span><b>Muhammad Dawood</b></a>
        <button className="menu-button" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}</button>
        <nav className={menuOpen ? "open" : ""} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="header-cta" href="/muhammad-dawood-cv.pdf" download>Download CV <span>↓</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="availability"><i /> Available for selected projects</p>
          <h1>I build websites<br />and <em>automations</em><br />that move business.</h1>
          <p className="hero-summary">Web developer and AI automation specialist creating polished digital products, dependable WordPress platforms, and practical CRM workflows.</p>
          <div className="hero-actions">
            <a className="primary-action" href="#work">Explore selected work <span>↘</span></a>
            <a className="text-action" href="mailto:muhammad.dawood1006@gmail.com">Start a conversation <span>→</span></a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="Professional snapshot">
          <div className="panel-top"><span>PROFILE / 2026</span><span>PK · REMOTE</span></div>
          <div className="monogram">M<span>D</span></div>
          <p>From business requirement<br />to production deployment.</p>
          <dl>
            <div><dt>Experience</dt><dd>4+ years</dd></div>
            <div><dt>Client projects</dt><dd>50+</dd></div>
            <div><dt>Focus</dt><dd>Web + AI</dd></div>
          </dl>
        </aside>
      </section>

      <section className="proof-strip" aria-label="Core capabilities">
        <span>WORDPRESS ENGINEERING</span><i>✦</i><span>FULL-STACK PRODUCTS</span><i>✦</i><span>CRM AUTOMATION</span><i>✦</i><span>AI WORKFLOWS</span><i>✦</i><span>PRODUCTION DELIVERY</span>
      </section>

      <section className="section-shell work-section" id="work">
        <div className="section-heading">
          <div><p className="kicker">SELECTED WORK</p><h2>Projects built to<br />solve real problems.</h2></div>
          <p>Product thinking, interface craft, integration logic, and dependable delivery—shown through working applications and documented source.</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`project-visual ${project.visual}`} aria-hidden="true">
                <span className="project-number">{project.number}</span>
                {project.visual === "leadiq" && <div className="ui-card"><p>Lead intelligence</p><strong>94</strong><span>HOT LEAD</span><i><b /></i><small>Ready to book a viewing</small></div>}
                {project.visual === "automation" && <div className="flow"><span>WordPress</span><i>→</i><span>Secure webhook</span><i>→</i><span>GoHighLevel</span></div>}
                {project.visual === "support" && <div className="support-ui"><span>Priority inbox</span><strong>AI reply ready</strong><p>Grounded response · 96% confidence</p><button>Send reply</button></div>}
                {project.visual === "commerce" && <div className="chart-ui"><span>Revenue overview</span><strong>$128.4K</strong><div><i /><i /><i /><i /><i /><i /><i /></div></div>}
              </div>
              <div className="project-copy">
                <p className="project-type">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <div className="tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-links">{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live project ↗</a>}<a href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-shell">
          <p className="kicker light">CAPABILITIES</p>
          <div className="expertise-heading"><h2>One builder.<br /><em>Four disciplines.</em></h2><p>I bridge visual quality and operational logic, so projects do more than look finished—they work in the real world.</p></div>
          <div className="expertise-grid">
            <article><span>01</span><h3>Web products</h3><p>Responsive React and Next.js applications with clear interfaces, practical interactions, APIs, authentication, and deployment.</p><small>React · Next.js · TypeScript · Supabase</small></article>
            <article><span>02</span><h3>AI automation</h3><p>Lead scoring, data validation, AI-assisted responses, CRM synchronization, workflow safeguards, and human review.</p><small>GoHighLevel · n8n · REST APIs · Webhooks</small></article>
            <article><span>03</span><h3>WordPress engineering</h3><p>Business websites, WooCommerce, custom themes and plugins, forms, performance, migrations, and ongoing production support.</p><small>PHP · Elementor · Gutenberg · WooCommerce</small></article>
            <article><span>04</span><h3>Launch & delivery</h3><p>Requirements, implementation, testing, source control, hosting, DNS, SSL, troubleshooting, documentation, and handoff.</p><small>GitHub · Vercel · Cloudflare · cPanel</small></article>
          </div>
        </div>
      </section>

      <section className="section-shell client-section" id="experience">
        <div className="section-heading compact"><div><p className="kicker">CLIENT & WORDPRESS WORK</p><h2>Commercial experience,<br />not just concepts.</h2></div><p>Selected platforms and original engineering work across real estate, education, technology, and service businesses.</p></div>
        <div className="client-grid">
          {clientWork.map((item, index) => <a href={item.link} target="_blank" rel="noreferrer" key={item.title}><span>0{index + 1}</span><p>{item.category}</p><h3>{item.title}</h3><small>{item.text}</small><b>View project ↗</b></a>)}
        </div>
        <div className="experience-line">
          <div><span>2024 — PRESENT</span><h3>WordPress Developer</h3><p>TVoxel Technology Pvt Ltd</p></div>
          <div><span>2024 — PRESENT</span><h3>Web Development Instructor</h3><p>Bano Qabil</p></div>
          <div><span>2020 — PRESENT</span><h3>Freelance Developer & Automation Builder</h3><p>Remote · International clients</p></div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-label"><span>LET&apos;S WORK TOGETHER</span><i /></div>
        <h2>Have a project that needs<br /><em>clarity and momentum?</em></h2>
        <p>Tell me what you are building, where the process is stuck, or what needs to be automated.</p>
        <a href="mailto:muhammad.dawood1006@gmail.com">muhammad.dawood1006@gmail.com <span>↗</span></a>
        <footer><div className="wordmark inverse"><span>MD</span><b>Muhammad Dawood</b></div><div><a href="https://github.com/davimiza1" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com/in/muhammad-dawood-03b307274" target="_blank" rel="noreferrer">LinkedIn</a><a href="/muhammad-dawood-cv.pdf" download>Download CV</a></div><small>© 2026 Muhammad Dawood</small></footer>
      </section>
    </main>
  );
}
