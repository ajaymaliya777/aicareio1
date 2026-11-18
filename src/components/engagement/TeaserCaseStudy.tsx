import React, { useState } from 'react';
import { Lock, Unlock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CaseStudy } from '../../data/siteData.js';
import { useToast } from './ToastProvider';
import { Reveal } from './Reveal';

export const TeaserCaseStudy: React.FC<{ cs: CaseStudy; index: number }> = ({ cs, index }) => {
  const [revealed, setRevealed] = useState(false);
  const { showToast } = useToast();

  return (
    <Reveal delay={index * 80}>
      <div className="glass-card" style={{ padding: '2.5rem' }}>
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

        <h3 style={{ fontSize: '1.65rem', color: '#ffffff', marginBottom: '0.75rem' }}>{cs.title}</h3>

        <div style={{ fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
          <p style={{ color: '#94a3b8', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
            <strong style={{ color: '#38bdf8' }}>The challenge:</strong> {cs.challenge.split('.')[0]}.
          </p>
          <p className={revealed ? '' : 'teaser-blur'} style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
            <strong style={{ color: '#a855f7' }}>Our solution:</strong> {cs.solution}
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          {revealed ? (
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: '#4ade80', fontSize: '0.85rem', fontWeight: 600 }}>
              <Unlock size={15} /> Solution unlocked
            </span>
          ) : (
            <button
              type="button"
              className="btn-secondary"
              style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}
              onClick={() => {
                setRevealed(true);
                showToast('Nice — the full architecture is yours.');
              }}
            >
              <Lock size={14} /> Reveal how we solved it
            </button>
          )}
          <Link to="/case-studies" className="btn-primary" style={{ padding: '0.55rem 1.25rem', fontSize: '0.88rem' }}>
            Full System Workflow <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </Reveal>
  );
};
