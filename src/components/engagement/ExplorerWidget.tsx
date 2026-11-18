import React, { useEffect, useRef, useState } from 'react';
import { Award } from 'lucide-react';
import { useToast } from './ToastProvider';
import { useExplorer, TOTAL_SECTIONS } from './explorerStorage';

const MILESTONE_MESSAGES: Record<number, string> = {
  3: 'Nice — 3 sections explored! Keep going.',
  5: 'Over halfway to Explorer status!',
};

export const ExplorerWidget: React.FC = () => {
  const [count, setCount] = useState(0);
  const { showToast } = useToast();
  const { getScore, markCelebrated } = useExplorer();
  const celebratedRef = useRef(false);

  useEffect(() => {
    celebratedRef.current = getScore().celebrated;
    const update = () => {
      const { count: current, celebrated } = getScore();
      setCount(current);
      if (current >= TOTAL_SECTIONS && !celebrated && !celebratedRef.current) {
        celebratedRef.current = true;
        markCelebrated();
        showToast('Certified aicareio Explorer — you read the whole thing!');
      }
      const milestone = MILESTONE_MESSAGES[current];
      if (milestone) showToast(milestone);
    };
    update();
    const interval = window.setInterval(update, 2000);
    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pct = Math.min((count / TOTAL_SECTIONS) * 100, 100);

  return (
    <div className="explorer-widget" title="Explorer progress">
      <Award size={17} color="#00f0ff" />
      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1', whiteSpace: 'nowrap' }}>
        {count}/{TOTAL_SECTIONS}
      </span>
      <div className="explorer-progress-track">
        <div className="explorer-progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
};
