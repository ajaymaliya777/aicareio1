import React from 'react';
import { DEVELOPMENT_PROCESS } from '../../data/siteData.js';
import { Reveal } from './Reveal';
import { useSectionVisit } from './useSectionVisit';

export const JourneyProcess: React.FC = () => {
  useSectionVisit('process-journey');

  return (
    <div className="process-journey" id="process-journey">
      {DEVELOPMENT_PROCESS.map((p, idx) => (
        <Reveal key={p.step} delay={idx * 60} style={{ position: 'relative', paddingBottom: '2.5rem' }}>
          <div className="process-step-marker step-reached">{idx + 1}</div>
          <div className="glass-card" style={{ padding: '1.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.9rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '1.8rem', fontWeight: 800, color: 'rgba(0, 240, 255, 0.35)' }}>{p.step}</span>
              <h4 style={{ fontSize: '1.2rem' }}>{p.phase}</h4>
            </div>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.65 }}>{p.description}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
};
