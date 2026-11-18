import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useToast } from './ToastProvider';

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { showToast } = useToast();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="back-to-top"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        showToast('Back to the top — thanks for exploring!');
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
};
