import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO, SERVICES_DATA } from '../data/siteData.js';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#05070e', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '4.5rem', paddingBottom: '3rem' }}>
      <div className="container">
        <div className="grid-4" style={{ marginBottom: '3.5rem' }}>
          {/* Column 1: Brand & Positioning */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <img
                src="/aicareio-logo.png"
                alt="aicareio logo"
                style={{ height: '34px', width: 'auto', objectFit: 'contain' }}
              />
              <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.02em', color: '#ffffff' }}>
                aicare<span style={{ color: '#00f0ff' }}>io</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.65' }}>
              {COMPANY_INFO.tagline}. High-impact AI consulting, enterprise workflow automation, RAG intelligence, and modern software engineering.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8', fontSize: '0.82rem', fontWeight: '600' }}>
              <CheckCircle2 size={16} />
              <span>{COMPANY_INFO.clientsServed}</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link to="/" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')} onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')} onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  All Services
                </Link>
              </li>
              <li>
                <Link to="/case-studies" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')} onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Case Studies & Workflows
                </Link>
              </li>
              <li>
                <Link to="/company" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')} onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  About aicareio
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')} onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                  Contact & Consultations
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Practices */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Capabilities
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {SERVICES_DATA.slice(0, 5).map((s) => (
                <li key={s.id}>
                  <Link to="/services" style={{ color: '#94a3b8', fontSize: '0.9rem' }} onMouseOver={(e) => (e.currentTarget.style.color = '#00f0ff')} onMouseOut={(e) => (e.currentTarget.style.color = '#94a3b8')}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Location & Direct Contact */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#ffffff', marginBottom: '1.25rem' }}>
              Business Inquiries
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.9rem' }}>
                <MapPin size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                <span>{COMPANY_INFO.location}</span>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.9rem' }}
                >
                  <Mail size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#cbd5e1', fontSize: '0.9rem' }}
                >
                  <Phone size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hello%20aicareio,%20I%20would%20like%20to%20discuss%20an%20enterprise%20project`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ padding: '0.6rem 1rem', fontSize: '0.85rem', width: '100%', justifyContent: 'center' }}
                >
                  WhatsApp Business <ArrowUpRight size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b',
          }}
        >
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved. Enterprise AI and Data Science Consultancy.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <span>Jaipur, Rajasthan, India</span>
            <span>•</span>
            <span>Global Remote Engagements</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
