import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Cpu,
  BrainCircuit,
  FileText,
  ScanFace,
  Code2,
  BarChart3,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/siteData.js';
import { EnquiryForm } from '../components/EnquiryForm.js';

export const ServicesPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(SERVICES_DATA[0].id);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu':
        return <Cpu size={24} color="#00f0ff" />;
      case 'BrainCircuit':
        return <BrainCircuit size={24} color="#38bdf8" />;
      case 'Sparkles':
        return <Sparkles size={24} color="#a855f7" />;
      case 'FileText':
        return <FileText size={24} color="#38bdf8" />;
      case 'ScanFace':
        return <ScanFace size={24} color="#00f0ff" />;
      case 'Code2':
        return <Code2 size={24} color="#a855f7" />;
      case 'BarChart3':
        return <BarChart3 size={24} color="#38bdf8" />;
      default:
        return <Cpu size={24} color="#00f0ff" />;
    }
  };

  return (
    <div>
      {/* Header Banner */}
      <section style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="container text-center">
          <div className="badge-pill">Enterprise Engineering Services</div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem' }}>
            Specialized Practice Areas.{' '}
            <span className="gradient-text">Measurable Results.</span>
          </h1>
          <p style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', color: '#94a3b8' }}>
            We provide deep expertise across custom AI development, generative models, high-accuracy RAG architectures, computer vision, and scalable full-stack web platforms.
          </p>
        </div>
      </section>

      {/* Main Services Detailed Breakdown */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4.5rem' }}>
            {SERVICES_DATA.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="glass-card"
                style={{
                  padding: '3rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(11, 17, 32, 0.75)',
                }}
              >
                {/* Service Header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div
                      style={{
                        width: '54px',
                        height: '54px',
                        borderRadius: '12px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {getServiceIcon(service.icon)}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#38bdf8' }}>
                        Service 0{index + 1} · {service.category}
                      </span>
                      <h2 style={{ fontSize: '1.85rem', color: '#ffffff', margin: '0.2rem 0 0' }}>
                        {service.title}
                      </h2>
                    </div>
                  </div>

                  <a
                    href="#service-enquiry"
                    className="btn-secondary"
                    style={{ padding: '0.6rem 1.25rem', fontSize: '0.88rem' }}
                    onClick={() => setSelectedServiceId(service.id)}
                  >
                    Request Delivery Scope <ArrowRight size={14} />
                  </a>
                </div>

                <p style={{ fontSize: '1.1rem', color: '#cbd5e1', marginBottom: '2.5rem', lineHeight: '1.7', maxWidth: '900px' }}>
                  {service.tagline}
                </p>

                {/* 4 Pillars: Problem, Solution, How it Works, Use Cases */}
                <div className="grid-2" style={{ gap: '2rem', marginBottom: '2.5rem' }}>
                  {/* Problem & Solution Box */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div
                      style={{
                        padding: '1.5rem',
                        background: 'rgba(239, 68, 68, 0.05)',
                        border: '1px solid rgba(239, 68, 68, 0.15)',
                        borderRadius: '12px',
                      }}
                    >
                      <h3 style={{ fontSize: '1rem', color: '#fca5a5', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        The Business Problem
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.65' }}>
                        {service.problem}
                      </p>
                    </div>

                    <div
                      style={{
                        padding: '1.5rem',
                        background: 'rgba(0, 240, 255, 0.05)',
                        border: '1px solid rgba(0, 240, 255, 0.18)',
                        borderRadius: '12px',
                      }}
                    >
                      <h3 style={{ fontSize: '1rem', color: '#00f0ff', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                        Our Technical Solution
                      </h3>
                      <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.65' }}>
                        {service.solution}
                      </p>
                    </div>
                  </div>

                  {/* How The Technology Works */}
                  <div
                    style={{
                      padding: '1.75rem',
                      background: 'rgba(15, 23, 42, 0.6)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '12px',
                    }}
                  >
                    <h3 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      How The System Works
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {service.howItWorks.map((step, sIdx) => (
                        <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.88rem', color: '#cbd5e1', lineHeight: '1.5' }}>
                          <span style={{ color: '#00f0ff', fontWeight: '700', fontSize: '0.8rem', paddingTop: '2px' }}>
                            0{sIdx + 1}.
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Practical Business Use Cases & Potential Deliverables */}
                <div className="grid-2" style={{ gap: '2rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '2rem' }}>
                  <div>
                    <h3 style={{ fontSize: '0.92rem', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                      Practical Commercial Use Cases
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {service.useCases.map((uc, uIdx) => (
                        <li key={uIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                          <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                          <span>{uc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 style={{ fontSize: '0.92rem', color: '#a855f7', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1rem' }}>
                      Tangible Deliverables
                    </h3>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                      {service.deliverables.map((del, dIdx) => (
                        <li key={dIdx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem', color: '#94a3b8' }}>
                          <ShieldCheck size={16} color="#a855f7" style={{ flexShrink: 0 }} />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="service-enquiry" className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div className="badge-pill">Initiate Service Engagement</div>
              <h2 className="section-title">Schedule a Technical Architecture Scoping Call</h2>
              <p className="section-subtitle mx-auto">
                Discuss exact data formats, integration constraints, and expected engineering deliverables with our technical leads.
              </p>
            </div>

            <EnquiryForm idPrefix="services-page-form" defaultService="GEN Ai" />
          </div>
        </div>
      </section>
    </div>
  );
};
