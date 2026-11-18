const STORAGE_KEY = 'aicareio-explorer';

interface ExplorerState {
  visited: string[];
  celebrated: boolean;
}

const read = (): ExplorerState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as ExplorerState;
      if (Array.isArray(parsed.visited)) {
        return { visited: parsed.visited, celebrated: Boolean(parsed.celebrated) };
      }
    }
  } catch {
    // corrupted storage — start fresh
  }
  return { visited: [], celebrated: false };
};

const write = (state: ExplorerState) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage unavailable — ignore
  }
};

export const TOTAL_SECTIONS = 8;

export const useExplorer = () => {
  const visit = (id: string) => {
    const state = read();
    if (!state.visited.includes(id)) {
      state.visited.push(id);
      write(state);
    }
    return state.visited.length;
  };

  const getScore = (): { count: number; total: number; celebrated: boolean } => {
    const state = read();
    return { count: state.visited.length, total: TOTAL_SECTIONS, celebrated: state.celebrated };
  };

  const markCelebrated = () => {
    const state = read();
    state.celebrated = true;
    write(state);
  };

  const reset = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return { visit, getScore, markCelebrated, reset };
};
