import { useEffect, useState } from 'react';

const STORAGE_KEY = 'aicareio-visitor';

interface VisitorState {
  firstVisit: number;
  lastVisit: number;
  visits: number;
}

const readVisitor = (): VisitorState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw) as VisitorState;
  } catch {
    // ignore
  }
  return { firstVisit: Date.now(), lastVisit: 0, visits: 0 };
};

export const useGreeting = (): { line: string; isReturning: boolean } => {
  const [greeting, setGreeting] = useState({ line: '', isReturning: false });

  useEffect(() => {
    const hour = new Date().getHours();
    const timeGreeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

    const visitor = readVisitor();
    const isReturning = visitor.visits > 0 && Date.now() - visitor.lastVisit > 1000 * 60 * 30;
    const visits = visitor.visits + 1;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...visitor, lastVisit: Date.now(), visits }));
    } catch {
      // ignore
    }

    if (isReturning) {
      setGreeting({ line: `${timeGreeting} — welcome back. Picking up where you left off?`, isReturning: true });
    } else if (visits > 1) {
      setGreeting({ line: `${timeGreeting} — great to see you again.`, isReturning: true });
    } else {
      setGreeting({ line: `${timeGreeting} — welcome to aicareio.`, isReturning: false });
    }
  }, []);

  return greeting;
};
