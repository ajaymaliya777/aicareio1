import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Lightbulb, RotateCcw } from 'lucide-react';
import { useToast } from './ToastProvider';

interface QuizOption {
  label: string;
  hint: string;
}

const QUESTIONS: { question: string; options: QuizOption[] }[] = [
  {
    question: 'What slows your team down most today?',
    options: [
      { label: 'Repetitive manual tasks', hint: 'Automation & AI agents shine here' },
      { label: 'Finding answers in documents', hint: 'RAG knowledge systems are the fix' },
      { label: 'Guessing instead of knowing', hint: 'Predictive ML models fit this' },
      { label: 'Slow or outdated software', hint: 'Modern engineering solves it' },
    ],
  },
  {
    question: 'How is that handled right now?',
    options: [
      { label: 'Entirely by hand', hint: 'Biggest quick-win potential' },
      { label: 'Spreadsheets & email chains', hint: 'Great candidate for a pipeline' },
      { label: 'Some tools, lots of gaps', hint: 'Integration work pays off fast' },
      { label: 'A proper system, but aging', hint: 'Targeted modernization wins' },
    ],
  },
];

const RESULT_TIERS: { min: number; title: string; body: string }[] = [
  {
    min: 5,
    title: 'You are automation-ready',
    body: 'Your workflows have clear structure that AI can plug into quickly. Teams like yours typically see wins within the first month — our workflow automation and RAG practice areas are the natural starting point.',
  },
  {
    min: 3,
    title: 'You have strong AI potential',
    body: 'There is real, measurable value on the table. A short discovery sprint would map exactly which of your processes to automate first for the fastest return.',
  },
  {
    min: 0,
    title: 'A guided start is your best move',
    body: 'The opportunity is there, but the first step matters. We begin with problem-first discovery — mapping your operations before proposing any technology, so nothing is built for its own sake.',
  },
];

export const AIReadinessQuiz: React.FC = () => {
  const [answers, setAnswers] = useState<(QuizOption | null)[]>([null, null]);
  const [finished, setFinished] = useState(false);
  const { showToast } = useToast();

  const answered = answers.filter(Boolean).length;
  const pick = (qIndex: number, option: QuizOption) => {
    setAnswers((prev) => prev.map((a, i) => (i === qIndex ? option : a)));
    showToast(`Good pick — noted. ${answered + 1} of ${QUESTIONS.length} done`);
  };

  const score = answers.reduce<number>((sum, a) => (a ? sum + 2 : sum), 0);
  const tier = RESULT_TIERS.find((t) => score >= t.min) || RESULT_TIERS[RESULT_TIERS.length - 1];

  const reset = () => {
    setAnswers([null, null]);
    setFinished(false);
  };

  return (
    <div className="glass-card" style={{ maxWidth: '760px', margin: '0 auto', padding: '2.5rem' }}>
      {!finished ? (
        <>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
            <Lightbulb size={20} color="#fbbf24" />
            <span style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#fbbf24' }}>
              60-Second AI Readiness Check
            </span>
          </div>
          <p style={{ fontSize: '1rem', color: '#94a3b8', marginBottom: '2rem' }}>
            Two quick questions, zero email required. Get an instant read on where AI could fit your operations.
          </p>

          {/* Progress meter */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '9999px', overflow: 'hidden' }}>
              <div
                style={{
                  width: `${(answered / QUESTIONS.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #00f0ff, #38bdf8)',
                  borderRadius: '9999px',
                  transition: 'width 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              />
            </div>
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#00f0ff', whiteSpace: 'nowrap' }}>
              {answered} of {QUESTIONS.length}
            </span>
          </div>

          {QUESTIONS.map((q, qIndex) => (
            <div key={qIndex} style={{ marginBottom: '2rem' }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>
                {qIndex + 1}. {q.question}
              </h3>
              <div className="grid-2" style={{ gap: '0.85rem' }}>
                {q.options.map((option) => {
                  const selected = answers[qIndex]?.label === option.label;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      className={`quiz-option glass-card ${selected ? 'selected' : ''}`}
                      style={{ padding: '1.1rem 1.25rem' }}
                      onClick={() => pick(qIndex, option)}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#ffffff' }}>{option.label}</span>
                        {selected && <CheckCircle2 size={18} color="#00f0ff" style={{ flexShrink: 0 }} />}
                      </div>
                      <span style={{ display: 'block', fontSize: '0.8rem', color: '#64748b', marginTop: '0.35rem' }}>
                        {option.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}

          <button
            type="button"
            className="btn-primary"
            style={{ width: '100%', justifyContent: 'center', opacity: answered < QUESTIONS.length ? 0.5 : 1 }}
            disabled={answered < QUESTIONS.length}
            onClick={() => {
              setFinished(true);
              showToast('Your readiness read is ready!');
            }}
          >
            Reveal My AI Readiness <ArrowRight size={17} />
          </button>
        </>
      ) : (
        <div style={{ textAlign: 'center', position: 'relative' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,240,255,0.15), rgba(168,85,247,0.15))',
              border: '1px solid rgba(0,240,255,0.4)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem',
            }}
          >
            <CheckCircle2 size={32} color="#00f0ff" />
          </div>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.85rem' }}>{tier.title}</h3>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '540px', margin: '0 auto 2rem' }}>{tier.body}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#consultation" className="btn-primary">
              Discuss This With an Engineer <ArrowRight size={16} />
            </a>
            <button type="button" className="btn-secondary" onClick={reset}>
              <RotateCcw size={15} /> Retake
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
