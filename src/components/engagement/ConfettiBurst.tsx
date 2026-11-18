import React from 'react';

const COLORS = ['#00f0ff', '#38bdf8', '#a855f7', '#4ade80', '#fbbf24'];

export const ConfettiBurst: React.FC = () => {
  const pieces = React.useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        x: `${(Math.random() - 0.5) * 140}px`,
        rot: `${Math.random() * 360}deg`,
        color: COLORS[i % COLORS.length],
        left: `${20 + Math.random() * 60}%`,
        delay: `${Math.random() * 0.15}s`,
      })),
    []
  );

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={
            {
              left: p.left,
              top: '30%',
              background: p.color,
              animationDelay: p.delay,
              '--confetti-x': p.x,
              '--confetti-rot': p.rot,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};
