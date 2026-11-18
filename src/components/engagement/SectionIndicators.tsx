import React, { useEffect, useRef, useState } from 'react';

interface Section {
  id: string;
  label: string;
}

export const SectionIndicators: React.FC<{ sections: Section[] }> = ({ sections }) => {
  const [active, setActive] = useState<string>(sections[0]?.id || '');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(section.id);
          });
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      style={{
        position: 'fixed',
        right: '20px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 80,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
      className="section-indicators"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          aria-label={`Jump to ${section.label}`}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'flex-end' }}
        >
          <span
            style={{
              fontSize: '0.72rem',
              fontWeight: 600,
              color: active === section.id ? '#00f0ff' : 'transparent',
              transition: 'color 0.2s ease',
              whiteSpace: 'nowrap',
            }}
          >
            {section.label}
          </span>
          <span
            style={{
              width: active === section.id ? '22px' : '8px',
              height: '8px',
              borderRadius: '9999px',
              background: active === section.id ? '#00f0ff' : 'rgba(255,255,255,0.25)',
              transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: active === section.id ? '0 0 10px rgba(0,240,255,0.6)' : 'none',
              flexShrink: 0,
            }}
          />
        </a>
      ))}
    </nav>
  );
};
