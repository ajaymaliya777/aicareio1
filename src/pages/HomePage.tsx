import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Bot,
  BrainCircuit,
  FileCheck2,
  Workflow,
  Cpu,
  ShieldCheck,
  Building2,
  CheckCircle2,
  Layers,
  ChevronRight,
  Database,
  Code2,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, CASE_STUDIES_DATA, WHY_CHOOSE_US, DEVELOPMENT_PROCESS } from '../data/siteData.js';
import { EnquiryForm } from '../components/EnquiryForm.js';

export const HomePage: React.FC = () => {
  return (
    <div>
      {/* 1. HERO SECTION */}
      <section style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '7rem', overflow: 'hidden' }}>
        {/* Ambient Glows */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '450px',
            background: 'radial-gradient(ellipse at center, rgba(0, 240, 255, 0.12), rgba(168, 85, 247, 0.08) 50%, transparent 80%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            {/* Proof Badge */}
            <div className="badge-pill" style={{ marginBottom: '1.75rem' }}>
              <Sparkles size={14} color="#00f0ff" />
              <span>AI Solutions for Real-World Businesses</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span style={{ color: '#ffffff' }}>100+ Clients Served</span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)',
                fontWeight: '800',
                letterSpacing: '-0.035em',
                lineHeight: '1.15',
                marginBottom: '1.75rem',
              }}
            >
              Build Smarter.{' '}
              <span className="gradient-text">Move Your Business Forward.</span>
            </h1>

            {/* Company Introduction / Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                color: '#94a3b8',
                maxWidth: '780px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.65',
              }}
            >
              aicareio is an enterprise AI and data science consultancy engineering custom generative AI systems, RAG document pipelines, intelligent automation, and production web architectures built for reliable commercial operations.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1.25rem',
                flexWrap: 'wrap',
                marginBottom: '4rem',
              }}
            >
              <a href="#consultation" className="btn-primary" style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}>
                Schedule Enterprise Consultation <ArrowRight size={18} />
              </a>
              <Link to="/case-studies" className="btn-secondary" style={{ padding: '0.95rem 2.2rem', fontSize: '1rem' }}>
                Explore Case Studies
              </Link>
            </div>

            {/* Proof Metric Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1.5rem',
                textAlign: 'left',
              }}
            >
              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#00f0ff', marginBottom: '0.25rem' }}>
                  100+
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff' }}>Clients Served</div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>
                  Verified delivery across diverse operational, technical, and data challenges.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#a855f7', marginBottom: '0.25rem' }}>
                  Hospitality
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff' }}>Product to Market</div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>
                  Direct market experience taking hotel guest communication workflows to production.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ fontSize: '2.2rem', fontWeight: '800', color: '#38bdf8', marginBottom: '0.25rem' }}>
                  Enterprise RAG
                </div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#ffffff' }}>Grounded Accuracy</div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', marginTop: '0.25rem' }}>
                  Eliminating hallucination with deterministic source citations and vector search.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Banner Asset Display */}
        <div className="container" style={{ marginTop: '4.5rem' }}>
          <div
            className="glass-card"
            style={{
              padding: '0.75rem',
              borderRadius: '20px',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              overflow: 'hidden',
              boxShadow: '0 25px 60px -15px rgba(0, 240, 255, 0.15)',
            }}
          >
            <img
              src="/aicareio-banner.png"
              alt="aicareio enterprise platform architecture banner"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '420px',
                objectFit: 'cover',
                borderRadius: '14px',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW SECTION */}
      <section className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '4rem' }}>
            <div className="badge-pill">Core Engineering Capabilities</div>
            <h2 className="section-title">End-to-End Enterprise AI Capabilities</h2>
            <p className="section-subtitle mx-auto">
              We design, evaluate, and deploy high-performance software systems that integrate seamlessly with your existing infrastructure.
            </p>
          </div>

          <div className="grid-3">
            {SERVICES_DATA.slice(0, 6).map((service) => (
              <div key={service.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '10px',
                      background: 'rgba(56, 189, 248, 0.1)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem',
                      color: '#00f0ff',
                    }}
                  >
                    <Workflow size={22} />
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8' }}>
                    {service.category}
                  </span>
                  <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.85rem', color: '#ffffff' }}>
                    {service.title}
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                    {service.tagline}
                  </p>
                </div>

                <Link
                  to="/services"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#00f0ff',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                  }}
                >
                  Explore Deliverables <ChevronRight size={16} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <Link to="/services" className="btn-secondary">
              View All 7 Dedicated Practice Areas <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. INDUSTRY SOLUTIONS SECTION */}
      <section className="section">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '4rem' }}>
            <div className="badge-pill">Commercial Application</div>
            <h2 className="section-title">Industry Solutions Grounded in Reality</h2>
            <p className="section-subtitle mx-auto">
              How our technical architecture adapts to real operational requirements across target commercial sectors.
            </p>
          </div>

          <div className="grid-3">
            <div className="glass-card">
              <div style={{ color: '#00f0ff', marginBottom: '1rem' }}>
                <Building2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                Hospitality & Guest Operations
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                Operational triage, front-desk ticket coordination, and digital guest request routing designed to handle peak check-in pressures.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#00f0ff" /> Front-desk SLA tracking
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#00f0ff" /> Housekeeping task routing
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#00f0ff" /> Multi-channel guest request intake
                </li>
              </ul>
            </div>

            <div className="glass-card">
              <div style={{ color: '#a855f7', marginBottom: '1rem' }}>
                <FileCheck2 size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                Enterprise & Legal Knowledge
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                Secure, internal RAG systems converting massive repositories of compliance binders, SOPs, and contracts into instant, cited answers.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#a855f7" /> Semantic vector retrieval (FAISS)
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#a855f7" /> Page-level source attribution
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#a855f7" /> Strict hallucination prevention
                </li>
              </ul>
            </div>

            <div className="glass-card">
              <div style={{ color: '#38bdf8', marginBottom: '1rem' }}>
                <Bot size={32} />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                High-Volume Services & Booking
              </h3>
              <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                Voice-enabled conversational agents that translate spontaneous natural customer speech into structured booking API transactions.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#38bdf8" /> Real-time LLM function calling
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#38bdf8" /> Sub-second conversational responses
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={14} color="#38bdf8" /> Direct calendar and DB sync
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CASE STUDIES PREVIEW */}
      <section className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '4rem' }}>
            <div className="badge-pill">Verified Workflows</div>
            <h2 className="section-title">Featured Production Case Studies</h2>
            <p className="section-subtitle mx-auto">
              Real architectural solutions engineered for hospitality operations, enterprise document extraction, and real-time voice automation.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {CASE_STUDIES_DATA.map((cs) => (
              <div
                key={cs.id}
                className="glass-card"
                style={{
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '2.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                  <span className="badge-pill" style={{ marginBottom: 0 }}>
                    {cs.badge}
                  </span>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {cs.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '0.75rem',
                          background: 'rgba(255, 255, 255, 0.05)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '6px',
                          color: '#94a3b8',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                  {cs.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                  {cs.summary}
                </p>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.85rem' }}>
                    <ShieldCheck size={16} /> Production architecture & verifiable engineering
                  </div>
                  <Link
                    to="/case-studies"
                    className="btn-secondary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
                  >
                    View System Workflow <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE AICAREIO & PROCESS */}
      <section className="section">
        <div className="container">
          <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '4rem' }}>
            <div className="badge-pill">Enterprise Philosophy</div>
            <h2 className="section-title">Why Business Leaders Choose aicareio</h2>
            <p className="section-subtitle mx-auto">
              We bridge the gap between complex AI research and predictable, high-value corporate technology assets.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: '5rem' }}>
            {WHY_CHOOSE_US.map((item, idx) => (
              <div key={idx} className="glass-card">
                <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <CheckCircle2 size={18} color="#00f0ff" />
                  <span>{item.title}</span>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.65' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Development Process Timeline */}
          <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '4.5rem' }}>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Methodology</div>
              <h3 style={{ fontSize: '2rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Our 5-Stage Engineering Lifecycle
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
                Predictable milestones, transparent code deliverables, and structured technical validation.
              </p>
            </div>

            <div className="grid-3">
              {DEVELOPMENT_PROCESS.map((p) => (
                <div key={p.step} className="glass-card" style={{ position: 'relative' }}>
                  <div
                    style={{
                      fontSize: '2.5rem',
                      fontWeight: '800',
                      color: 'rgba(56, 189, 248, 0.2)',
                      lineHeight: '1',
                      marginBottom: '1rem',
                    }}
                  >
                    {p.step}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    {p.phase}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.6' }}>
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOMEPAGE CUSTOM ENQUIRY FORM SECTION */}
      <section id="consultation" className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <h2 className="section-title">Discuss Your Project with Our Engineering Team</h2>
              <p className="section-subtitle mx-auto">
                No endless sales calls. Direct technical consultation to evaluate your architecture, determine feasibility, and structure a delivery roadmap.
              </p>
            </div>

            <EnquiryForm idPrefix="home-consultation" />
          </div>
        </div>
      </section>
    </div>
  );
};
