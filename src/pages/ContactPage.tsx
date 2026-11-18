import React from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  MessageSquare,
  Globe2,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.js';
import { EnquiryForm } from '../components/EnquiryForm.js';

export const ContactPage: React.FC = () => {
  return (
    <div>
      {/* Header Banner */}
      <section style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '3.5rem', overflow: 'hidden' }}>
        <div className="container text-center">
          <div className="badge-pill">Commercial & Technical Inquiries</div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem' }}>
            Connect with Our{' '}
            <span className="gradient-text">Engineering Leads.</span>
          </h1>
          <p style={{ maxWidth: '720px', margin: '0 auto', fontSize: '1.15rem', color: '#94a3b8' }}>
            Whether you are scoping an enterprise RAG deployment, automating complex operational workflows, or modernizing software systems, our technical team is ready to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Custom Connected Form */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
            {/* Direct Contact Information Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div className="glass-card" style={{ padding: '2.25rem' }}>
                <h3 style={{ fontSize: '1.35rem', color: '#ffffff', marginBottom: '1.25rem' }}>
                  Direct Business Channels
                </h3>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Email */}
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#00f0ff',
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Executive Email
                      </span>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '600' }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')}
                      >
                        {COMPANY_INFO.email}
                      </a>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        Typical response within 24 business hours.
                      </p>
                    </div>
                  </li>

                  {/* Phone */}
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#38bdf8',
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Direct Telephone
                      </span>
                      <a
                        href={`tel:${COMPANY_INFO.phone}`}
                        style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '600' }}
                        onMouseOver={(e) => (e.currentTarget.style.color = '#38bdf8')}
                        onMouseOut={(e) => (e.currentTarget.style.color = '#ffffff')}
                      >
                        {COMPANY_INFO.phone}
                      </a>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        Monday to Saturday · 9:30 AM to 6:30 PM IST
                      </p>
                    </div>
                  </li>

                  {/* WhatsApp */}
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(34, 197, 94, 0.1)',
                        border: '1px solid rgba(34, 197, 94, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#22c55e',
                        flexShrink: 0,
                      }}
                    >
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Instant Chat / WhatsApp Business
                      </span>
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20aicareio,%20I%20would%20like%20to%20discuss%20an%20enterprise%20project`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '1.05rem', color: '#22c55e', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                      >
                        Chat on WhatsApp <ArrowUpRight size={14} />
                      </a>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        Rapid response channel for active scoping and technical coordination.
                      </p>
                    </div>
                  </li>

                  {/* Location */}
                  <li style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(168, 85, 247, 0.1)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#a855f7',
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block' }}>
                        Headquarters
                      </span>
                      <div style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: '600' }}>
                        {COMPANY_INFO.address}
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '0.2rem' }}>
                        India & Global Remote Project Engagements
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Engagement Assurance Box */}
              <div
                className="glass-card"
                style={{
                  padding: '2rem',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'rgba(15, 23, 42, 0.5)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: '#00f0ff', marginBottom: '0.75rem', fontWeight: '700' }}>
                  <ShieldCheck size={20} />
                  <span>Confidentiality & Non-Disclosure</span>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#94a3b8', lineHeight: '1.65' }}>
                  We routinely execute standard enterprise NDAs before reviewing proprietary datasets, workflow diagrams, or internal codebases. Your intellectual property is protected at every stage.
                </p>
              </div>
            </div>

            {/* Custom Connected Enquiry Form */}
            <div>
              <EnquiryForm idPrefix="contact-page-form" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
