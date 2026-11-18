import React from 'react';
import {
  ShieldCheck,
  Target,
  Compass,
  Cpu,
  Layers,
  CheckCircle2,
  Lock,
  Workflow,
  Sparkles,
  ArrowRight,
  MapPin,
  Building2,
} from 'lucide-react';
import { COMPANY_INFO, WHY_CHOOSE_US, DEVELOPMENT_PROCESS } from '../data/siteData.js';
import { EnquiryForm } from '../components/EnquiryForm.js';

export const CompanyPage: React.FC = () => {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="container text-center">
          <div className="badge-pill">Enterprise AI Consultancy</div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem' }}>
            Built for Reality.{' '}
            <span className="gradient-text">Engineered for Scale.</span>
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.15rem', color: '#94a3b8' }}>
            aicareio is an enterprise AI and data science consultancy located in Jaipur, Rajasthan, India, delivering practical, production-ready technology assets to domestic and international business clients.
          </p>
        </div>
      </section>

      {/* Corporate Overview & Pillars */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center', marginBottom: '5rem' }}>
            <div>
              <div className="badge-pill">Company Overview</div>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: '#ffffff' }}>
                Bridging Enterprise Business Needs with Advanced AI Engineering
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                We believe software must solve verifiable operational problems rather than showcase technical novelty. Our engineering practice focuses on designing dependable, secure AI architectures that integrate seamlessly into real-world commercial workflows.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#94a3b8', lineHeight: '1.7' }}>
                With over 100+ clients served across varied business domains and direct market experience bringing software products to life, aicareio provides the technical discipline and strategic clarity needed to deploy artificial intelligence with complete confidence.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <ShieldCheck size={22} color="#00f0ff" /> Institutional Principles
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: '#00f0ff', fontWeight: 'bold' }}>01</div>
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Grounded Business First</strong>
                    <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Every algorithm and architectural decision begins with unit economics, workflow constraints, and measurable ROI.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: '#a855f7', fontWeight: 'bold' }}>02</div>
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Zero Fluff & Hallucination Guardrails</strong>
                    <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>We engineer systems with verifiable source citations, deterministic fallbacks, and rigorous boundary testing.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: '#38bdf8', fontWeight: 'bold' }}>03</div>
                  <div>
                    <strong style={{ color: '#ffffff', display: 'block' }}>Enterprise Ownership & Privacy</strong>
                    <span style={{ fontSize: '0.88rem', color: '#94a3b8' }}>Your data, model weights, and custom codebases remain completely proprietary, secure, and segregated.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Mission & Vision Section */}
          <div className="grid-2" style={{ gap: '2rem', marginBottom: '5rem' }}>
            <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
              <div style={{ color: '#00f0ff', marginBottom: '1.25rem' }}>
                <Compass size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.7' }}>
                To empower forward-thinking enterprises with robust, high-performance AI systems and modern software applications that reduce operational drag, elevate human team productivity, and deliver tangible commercial leverage.
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2.5rem', border: '1px solid rgba(168, 85, 247, 0.2)' }}>
              <div style={{ color: '#a855f7', marginBottom: '1.25rem' }}>
                <Target size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Our Vision
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: '1.7' }}>
                To be the trusted global partner for organizations seeking practical, mission-critical artificial intelligence—delivering engineering excellence, transparent methodology, and sustainable software longevity.
              </p>
            </div>
          </div>

          {/* Quality & Reliability Principles */}
          <div style={{ marginBottom: '5rem' }}>
            <div className="text-center mx-auto" style={{ maxWidth: '750px', marginBottom: '3.5rem' }}>
              <div className="badge-pill">Quality Standards</div>
              <h2 className="section-title">Enterprise Engineering Standards</h2>
              <p className="section-subtitle mx-auto">
                How we enforce stability, data confidentiality, and architectural resilience across every client engagement.
              </p>
            </div>

            <div className="grid-3">
              <div className="glass-card">
                <div style={{ color: '#00f0ff', marginBottom: '1rem' }}><Lock size={26} /></div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>Enterprise Data Isolation</h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  Client document repositories and vectorized corporate knowledge are partitioned within dedicated, encrypted storage environments with zero cross-tenant leakage.
                </p>
              </div>

              <div className="glass-card">
                <div style={{ color: '#a855f7', marginBottom: '1rem' }}><Cpu size={26} /></div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>Deterministic Fallback Design</h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  AI models operate with bounded execution paths. In scenarios of low model confidence or unexpected API downtime, systems gracefully revert to deterministic rules.
                </p>
              </div>

              <div className="glass-card">
                <div style={{ color: '#38bdf8', marginBottom: '1rem' }}><Workflow size={26} /></div>
                <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.5rem' }}>Clean Modular Codebases</h4>
                <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                  Written entirely in modern TypeScript, Python FastAPI, and structured microservice boundaries, facilitating effortless audits and straightforward in-house handovers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Custom Consultation Form */}
      <section className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div className="badge-pill">Partner With Us</div>
              <h2 className="section-title">Engage Our Technical Consultancy</h2>
              <p className="section-subtitle mx-auto">
                Submit your project specifications or schedule an introductory architectural review with our engineering leadership.
              </p>
            </div>

            <EnquiryForm idPrefix="company-form" />
          </div>
        </div>
      </section>
    </div>
  );
};
