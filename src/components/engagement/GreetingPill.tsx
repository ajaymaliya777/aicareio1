import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useGreeting } from './useGreeting';

export const GreetingPill: React.FC = () => {
  const { line, isReturning } = useGreeting();

  if (!line) return null;

  return (
    <div className="greeting-pill hero-enter" style={{ marginBottom: '1.25rem' }}>
      {isReturning ? <Moon size={14} /> : <Sun size={14} />}
      <span>{line}</span>
    </div>
  );
};
