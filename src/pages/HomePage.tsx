import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Sparkles,
  Bot,
  FileCheck2,
  Building2,
  CheckCircle2,
  ChevronRight,
  ChevronDown,
  ShieldCheck,
  Users,
  Star,
  Workflow,
} from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA, CASE_STUDIES_DATA, WHY_CHOOSE_US } from '../data/siteData.js';
import { EnquiryForm } from '../components/EnquiryForm.js';
import { Reveal } from '../components/engagement/Reveal.js';
import { AnimatedCounter } from '../components/engagement/AnimatedCounter.js';
import { GreetingPill } from '../components/engagement/GreetingPill.js';
import { AIReadinessQuiz } from '../components/engagement/AIReadinessQuiz.js';
import { TeaserCaseStudy } from '../components/engagement/TeaserCaseStudy.js';
import { JourneyProcess } from '../components/engagement/JourneyProcess.js';
import { useSectionVisit } from '../components/engagement/useSectionVisit.js';
import { RippleLink } from '../components/engagement/RippleLink.js';
import { useToast } from '../components/engagement/ToastProvider.js';

export const HomePage: React.FC = () => {
  const { showToast } = useToast();
  useSectionVisit('home-hero');
  useSectionVisit('home-quiz');
  useSectionVisit('home-services');
  useSectionVisit('home-industries');
  useSectionVisit('home-case-studies');
  useSectionVisit('home-why');
  useSectionVisit('consultation');

  return (
    <div>
      {/* ============ 1. HERO — First 3 seconds hook ============ */}
      <section id="home-hero" style={{ position: 'relative', paddingTop: '4.5rem', paddingBottom: '6rem', overflow: 'hidden' }}>
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
            {/* Personalized greeting — Personalization & Reciprocity */}
            <GreetingPill />

            <div className="badge-pill hero-enter" style={{ ['--enter-delay' as string]: '100ms', marginBottom: '1.5rem' }}>
              <Sparkles size={14} color="#00f0ff" />
              <span>AI Solutions for Real-World Businesses</span>
              <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
              <span style={{ color: '#ffffff' }}>100+ Clients Served</span>
            </div>

            <h1
              className="hero-enter"
              style={{
                ['--enter-delay' as string]: '200ms',
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

            <p
              className="hero-enter"
              style={{
                ['--enter-delay' as string]: '320ms',
                fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
                color: '#94a3b8',
                maxWidth: '780px',
                margin: '0 auto 2.5rem',
                lineHeight: '1.65',
              }}
            >
              aicareio is an enterprise AI and data science consultancy engineering custom generative AI systems, RAG document pipelines, intelligent automation, and production web architectures built for reliable commercial operations.
            </p>

            {/* One primary CTA + supporting proof next to it — clear hierarchy */}
            <div
              className="hero-enter"
              style={{
                ['--enter-delay' as string]: '440ms',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '3.5rem',
              }}
            >
              <RippleLink
                href="#consultation"
                className="btn-primary"
                style={{ padding: '0.95rem 2.4rem', fontSize: '1.05rem' }}
                onRippleClick={() => showToast('Nice choice — the team is one form away.')}
              >
                Schedule Enterprise Consultation <ArrowRight size={18} />
              </RippleLink>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#fbbf24' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <Link to="/case-studies" style={{ fontSize: '0.9rem', color: '#94a3b8', borderBottom: '1px dashed rgba(148,163,184,0.5)' }}>
                  or explore verified case studies first
                </Link>
              </div>
            </div>

            {/* Animated live counters — Social Proof */}
            <div
              className="hero-enter"
              style={{
                ['--enter-delay' as string]: '560ms',
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <span className="counter-chip">
                <Users size={14} color="#00f0ff" />
                <strong style={{ color: '#00f0ff' }}><AnimatedCounter target={100} suffix="+" /></strong>&nbsp;clients served
              </span>
              <span className="counter-chip">
                <Workflow size={14} color="#a855f7" />
                <strong style={{ color: '#c084fc' }}><AnimatedCounter target={7} /></strong>&nbsp;practice areas
              </span>
              <span className="counter-chip">
                <Star size={14} color="#fbbf24" />
                <strong style={{ color: '#fbbf24' }}><AnimatedCounter target={4.9} decimals={1} /></strong>&nbsp;avg. satisfaction
              </span>
            </div>

            {/* Scroll hint */}
            <div className="hero-enter scroll-hint" style={{ ['--enter-delay' as string]: '900ms', marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
              <a href="#home-quiz" aria-label="Scroll to explore" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem', color: '#64748b', fontSize: '0.8rem' }}>
                Scroll — there is a quick win below
                <ChevronDown size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Brand banner — lazy loaded below the fold */}
        <div className="container" style={{ marginTop: '3.5rem' }}>
          <Reveal>
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
                loading="lazy"
                decoding="async"
                width={1600}
                height={420}
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
          </Reveal>
        </div>
      </section>

      {/* ============ 2. AI READINESS QUIZ — Reciprocity ============ */}
      <section id="home-quiz" className="section" style={{ paddingBottom: '3rem', paddingTop: '2rem' }}>
        <div className="container">
          <Reveal>
            <AIReadinessQuiz />
          </Reveal>
        </div>
      </section>

      {/* ============ 3. SERVICES — Variable rewards, staggered reveals ============ */}
      <section id="home-services" className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Core Engineering Capabilities</div>
              <h2 className="section-title">End-to-End Enterprise AI Capabilities</h2>
              <p className="section-subtitle mx-auto">
                We design, evaluate, and deploy high-performance software systems that integrate seamlessly with your existing infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="grid-3">
            {SERVICES_DATA.slice(0, 6).map((service, idx) => (
              <Reveal key={service.id} delay={idx * 70}>
                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
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
                    <h3 style={{ fontSize: '1.3rem', margin: '0.5rem 0 0.85rem', color: '#ffffff' }}>{service.title}</h3>
                    <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                      {service.tagline}
                    </p>
                  </div>
                  <Link
                    to="/services"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: '#00f0ff', fontSize: '0.9rem', fontWeight: '600' }}
                  >
                    Explore Deliverables <ChevronRight size={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link to="/services" className="btn-secondary">
                View All 7 Dedicated Practice Areas <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 4. INDUSTRY SOLUTIONS ============ */}
      <section id="home-industries" className="section">
        <div className="container">
          <Reveal>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Commercial Application</div>
              <h2 className="section-title">Industry Solutions Grounded in Reality</h2>
              <p className="section-subtitle mx-auto">
                How our technical architecture adapts to real operational requirements across target commercial sectors.
              </p>
            </div>
          </Reveal>

          <div className="grid-3">
            {[
              {
                icon: <Building2 size={32} />,
                color: '#00f0ff',
                title: 'Hospitality & Guest Operations',
                desc: 'Operational triage, front-desk ticket coordination, and digital guest request routing designed to handle peak check-in pressures.',
                items: ['Front-desk SLA tracking', 'Housekeeping task routing', 'Multi-channel guest request intake'],
              },
              {
                icon: <FileCheck2 size={32} />,
                color: '#a855f7',
                title: 'Enterprise & Legal Knowledge',
                desc: 'Secure, internal RAG systems converting massive repositories of compliance binders, SOPs, and contracts into instant, cited answers.',
                items: ['Semantic vector retrieval (FAISS)', 'Page-level source attribution', 'Strict hallucination prevention'],
              },
              {
                icon: <Bot size={32} />,
                color: '#38bdf8',
                title: 'High-Volume Services & Booking',
                desc: 'Voice-enabled conversational agents that translate spontaneous natural customer speech into structured booking API transactions.',
                items: ['Real-time LLM function calling', 'Sub-second conversational responses', 'Direct calendar and DB sync'],
              },
            ].map((card, idx) => (
              <Reveal key={card.title} delay={idx * 80}>
                <div className="glass-card" style={{ height: '100%' }}>
                  <div style={{ color: card.color, marginBottom: '1rem' }}>{card.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#ffffff' }}>{card.title}</h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', marginBottom: '1.25rem' }}>{card.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    {card.items.map((item) => (
                      <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={14} color={card.color} /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 5. CASE STUDIES — Curiosity gap teasers ============ */}
      <section id="home-case-studies" className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Verified Workflows</div>
              <h2 className="section-title">Featured Production Case Studies</h2>
              <p className="section-subtitle mx-auto">
                The challenges are public. The solutions are one click away — reveal how each system works.
              </p>
            </div>
          </Reveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {CASE_STUDIES_DATA.map((cs, idx) => (
              <TeaserCaseStudy key={cs.id} cs={cs} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ 6. WHY CHOOSE US ============ */}
      <section id="home-why" className="section">
        <div className="container">
          <Reveal>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Enterprise Philosophy</div>
              <h2 className="section-title">Why Business Leaders Choose aicareio</h2>
              <p className="section-subtitle mx-auto">
                We bridge the gap between complex AI research and predictable, high-value corporate technology assets.
              </p>
            </div>
          </Reveal>

          <div className="grid-3">
            {WHY_CHOOSE_US.map((item, idx) => (
              <Reveal key={item.title} delay={idx * 60}>
                <div className="glass-card" style={{ height: '100%' }}>
                  <div style={{ fontSize: '1.15rem', fontWeight: '700', color: '#ffffff', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle2 size={18} color="#00f0ff" />
                    <span>{item.title}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: '1.65' }}>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 7. PROCESS JOURNEY — Progress & completion ============ */}
      <section className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <Reveal>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Methodology</div>
              <h2 className="section-title">Our 5-Stage Engineering Lifecycle</h2>
              <p className="section-subtitle mx-auto">
                Predictable milestones, transparent code deliverables, and structured technical validation. Follow the journey from discovery to handover.
              </p>
            </div>
          </Reveal>

          <div style={{ maxWidth: '760px', margin: '0 auto' }}>
            <JourneyProcess />
          </div>

          {/* Endless-flow next step */}
          <Reveal>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', marginBottom: '1.25rem' }}>
                Stage 01 starts with a single conversation — no commitment required.
              </p>
              <RippleLink
                href="#consultation"
                className="btn-primary"
                onRippleClick={() => showToast('Almost there — the form is right below.')}
              >
                Start Your Stage 01 <ArrowRight size={17} />
              </RippleLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ 8. CONSULTATION FORM ============ */}
      <section id="consultation" className="section" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <Reveal>
            <div style={{ maxWidth: '840px', margin: '0 auto' }}>
              <div className="text-center" style={{ marginBottom: '2.5rem' }}>
                <h2 className="section-title">Discuss Your Project with Our Engineering Team</h2>
                <p className="section-subtitle mx-auto">
                  No endless sales calls. Direct technical consultation to evaluate your architecture, determine feasibility, and structure a delivery roadmap.
                </p>
              </div>
              <EnquiryForm idPrefix="home-consultation" />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
