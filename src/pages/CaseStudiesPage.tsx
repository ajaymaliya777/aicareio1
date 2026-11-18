import React from 'react';
import {
  ShieldCheck,
  Building2,
  FileCheck2,
  Bot,
  Layers,
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  Database,
  Terminal,
  Clock,
  Users,
  AlertTriangle,
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/siteData.js';
import { EnquiryForm } from '../components/EnquiryForm.js';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div>
      {/* Page Header */}
      <section style={{ position: 'relative', paddingTop: '5rem', paddingBottom: '4rem', overflow: 'hidden' }}>
        <div className="container text-center">
          <div className="badge-pill">Production Case Studies & Market Experience</div>
          <h1 style={{ fontSize: 'clamp(2.3rem, 4.5vw, 3.6rem)', marginBottom: '1.25rem' }}>
            Proven Architectures.{' '}
            <span className="gradient-text">Real-World Operations.</span>
          </h1>
          <p style={{ maxWidth: '780px', margin: '0 auto', fontSize: '1.15rem', color: '#94a3b8' }}>
            Explore detailed architectural breakdowns of our market-tested hospitality workflow product, high-precision EnterpriseDoc RAG pipeline, and real-time Voice AI booking assistant.
          </p>
        </div>
      </section>

      {/* Case Studies Deep Dive */}
      <section className="section" style={{ paddingTop: '1rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5.5rem' }}>
            {/* ========================================================== */}
            {/* CASE STUDY A: HOTEL / HOSPITALITY PRODUCT MARKET EXPERIENCE */}
            {/* ========================================================== */}
            <article
              id="hospitality"
              className="glass-card"
              style={{
                padding: '3rem',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                background: 'rgba(11, 17, 32, 0.8)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge-pill" style={{ marginBottom: '0.5rem' }}>
                    Case Study 01 · Hospitality Product Experience
                  </span>
                  <h2 style={{ fontSize: '2.1rem', color: '#ffffff', margin: '0.2rem 0 0.5rem' }}>
                    Hotel Operational Workflow & Guest Communication System
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#38bdf8' }}>
                    Taking a hotel-focused digital operational product to market to solve front-desk friction and fragmented staff communication.
                  </p>
                </div>
              </div>

              {/* Context Notice */}
              <div
                style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(56, 189, 248, 0.05)',
                  borderLeft: '4px solid #38bdf8',
                  borderRadius: '4px',
                  marginBottom: '2.5rem',
                  fontSize: '0.88rem',
                  color: '#cbd5e1',
                }}
              >
                <strong>Market Positioning Note:</strong> Reflects actual product thinking and go-to-market execution in hospitality operations. All workflow schemas and interface diagrams below represent our illustrative product architecture.
              </div>

              <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <AlertTriangle size={18} color="#f59e0b" /> The Hospitality Operating Challenge
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
                    In dynamic hotel operations, guest requests arrive in high volumes across multiple uncoordinated channels—front-desk lines, direct phone calls, in-room intercoms, and messaging.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>•</span>
                      <strong>Front-Desk Bottlenecks:</strong> Staff juggling simultaneous check-ins and phone inquiries, leading to delayed service and frustrated guests.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>•</span>
                      <strong>Staff Communication Gaps:</strong> Requests manually conveyed over radio or paper notes get lost between front desk and housekeeping/maintenance.
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: '#f59e0b', fontWeight: 'bold' }}>•</span>
                      <strong>Lack of Operational Visibility:</strong> Supervisors have no live status of active room requests, pending tasks, or SLA resolution times.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Building2 size={18} color="#00f0ff" /> Product Solution & Workflow Engineering
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
                    We designed a unified operational dashboard and mobile task routing interface that coordinates guest inquiries directly with on-duty hotel staff.
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.88rem', color: '#cbd5e1' }}>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="#00f0ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>Multi-Channel Ingestion:</strong> Captures digital guest requests into a central priority queue.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="#00f0ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>Automated Department Routing:</strong> Intelligently classifies tasks into Housekeeping, Maintenance, Front Desk, or Concierge.</span>
                    </li>
                    <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle2 size={16} color="#00f0ff" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span><strong>Escalation Timers:</strong> Visual countdown triggers supervisor alerts if a guest request remains unaddressed past target SLA.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Illustrative Dashboard Visual Mockup */}
              <div
                style={{
                  background: '#060a14',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '2rem',
                  marginBottom: '2.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', paddingBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                    <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#ffffff' }}>Illustrative Hospitality Operational Dashboard</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Live Architecture Mockup
                  </span>
                </div>

                {/* Dashboard Metrics Bar */}
                <div className="grid-4" style={{ marginBottom: '1.75rem' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Active Guest Tickets</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#ffffff' }}>18 Open</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Housekeeping Dispatch</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#00f0ff' }}>8 Assigned</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Maintenance Urgent</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#f59e0b' }}>2 Pending</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Avg Resolution SLA</span>
                    <div style={{ fontSize: '1.4rem', fontWeight: '700', color: '#10b981' }}>11.4 Mins</div>
                  </div>
                </div>

                {/* Ticket Table Wireframe */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem', color: '#cbd5e1' }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'left', color: '#64748b' }}>
                        <th style={{ padding: '0.75rem 0.5rem' }}>Room #</th>
                        <th style={{ padding: '0.75rem 0.5rem' }}>Request Details</th>
                        <th style={{ padding: '0.75rem 0.5rem' }}>Department</th>
                        <th style={{ padding: '0.75rem 0.5rem' }}>Status</th>
                        <th style={{ padding: '0.75rem 0.5rem' }}>Assigned To</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <td style={{ padding: '0.75rem 0.5rem', fontWeight: '600', color: '#ffffff' }}>Suite 408</td>
                        <td style={{ padding: '0.75rem 0.5rem' }}>Extra fresh towels and dental amenity kit</td>
                        <td style={{ padding: '0.75rem 0.5rem', color: '#00f0ff' }}>Housekeeping</td>
                        <td style={{ padding: '0.75rem 0.5rem' }}><span style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>In Progress</span></td>
                        <td style={{ padding: '0.75rem 0.5rem' }}>Staff Floor 4</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                        <td style={{ padding: '0.75rem 0.5rem', fontWeight: '600', color: '#ffffff' }}>Room 215</td>
                        <td style={{ padding: '0.75rem 0.5rem' }}>Air conditioning thermostat calibration</td>
                        <td style={{ padding: '0.75rem 0.5rem', color: '#f59e0b' }}>Maintenance</td>
                        <td style={{ padding: '0.75rem 0.5rem' }}><span style={{ background: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Dispatched</span></td>
                        <td style={{ padding: '0.75rem 0.5rem' }}>Duty Engineer</td>
                      </tr>
                      <tr>
                        <td style={{ padding: '0.75rem 0.5rem', fontWeight: '600', color: '#ffffff' }}>Room 312</td>
                        <td style={{ padding: '0.75rem 0.5rem' }}>Airport transfer vehicle confirmation for 06:00 AM</td>
                        <td style={{ padding: '0.75rem 0.5rem', color: '#a855f7' }}>Concierge / Desk</td>
                        <td style={{ padding: '0.75rem 0.5rem' }}><span style={{ background: 'rgba(168, 85, 247, 0.2)', color: '#c084fc', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>Verified</span></td>
                        <td style={{ padding: '0.75rem 0.5rem' }}>Front Desk Lead</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Technologies & Strategic Takeaways */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['React', 'TypeScript', 'Node.js', 'Express', 'Real-time WebSockets', 'PostgreSQL'].map((t, idx) => (
                    <span key={idx} style={{ fontSize: '0.78rem', background: 'rgba(255,255,255,0.06)', padding: '0.3rem 0.75rem', borderRadius: '6px', color: '#94a3b8' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Engineering Focus: Fast load, mobile viewport optimization, zero-lag dispatching
                </div>
              </div>
            </article>

            {/* ========================================================== */}
            {/* CASE STUDY B: ENTERPRISEDOC AI — RAG DOCUMENT INTELLIGENCE */}
            {/* ========================================================== */}
            <article
              id="enterprisedoc"
              className="glass-card"
              style={{
                padding: '3rem',
                border: '1px solid rgba(168, 85, 247, 0.25)',
                background: 'rgba(11, 17, 32, 0.8)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge-pill" style={{ marginBottom: '0.5rem', color: '#c084fc', borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                    Case Study 02 · RAG Document Intelligence
                  </span>
                  <h2 style={{ fontSize: '2.1rem', color: '#ffffff', margin: '0.2rem 0 0.5rem' }}>
                    EnterpriseDoc AI: High-Accuracy RAG Question-Answering
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#c084fc' }}>
                    Document question-answering architecture grounding generative responses in corporate files with verified citations.
                  </p>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem' }}>
                    The Enterprise Information Problem
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
                    Corporate documents—legal agreements, SOPs, vendor contracts, technical specs—are massive, multi-page PDFs. Locating accurate answers manually wastes valuable technical hours.
                  </p>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7' }}>
                    Using generic public LLMs leads to severe hallucinations, security vulnerabilities, and answers that lack verifiable provenance. EnterpriseDoc AI was designed to guarantee answers grounded solely in provided text.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem' }}>
                    The Architectural Solution
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
                    A modular, high-speed Retrieval-Augmented Generation pipeline combining Python, FastAPI, Gemini API, and FAISS vector indexing.
                  </p>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7' }}>
                    Every answer is accompanied by exact paragraph excerpts and source document citations, giving auditors and managers instant verification without reading 100-page manuals.
                  </p>
                </div>
              </div>

              {/* Technical Pipeline Flow Diagram */}
              <div
                style={{
                  background: '#060a14',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '2rem',
                  marginBottom: '2.5rem',
                }}
              >
                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', textAlign: 'center' }}>
                  EnterpriseDoc AI Technical Execution Pipeline
                </h4>

                <div className="grid-3" style={{ gap: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#00f0ff', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>STAGE 01</div>
                    <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.4rem' }}>Ingestion & OCR</div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Parsing multi-format PDFs, scans, and DOCX files. Cleaning text and extracting tables while preserving spatial context.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#a855f7', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>STAGE 02</div>
                    <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.4rem' }}>Chunking & FAISS</div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Semantic chunking preserving sentence boundaries. Generating high-dimensional embeddings indexed in FAISS for top-K vector search.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>STAGE 03</div>
                    <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.4rem' }}>Grounded Synthesis</div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Prompting Gemini API with strict context injection. Producing precise answers with mandatory footnote citations to original pages.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Breakdown */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Python', 'FastAPI', 'Gemini API', 'FAISS', 'Embeddings', 'Semantic Retrieval', 'React', 'TypeScript'].map((t, idx) => (
                    <span key={idx} style={{ fontSize: '0.78rem', background: 'rgba(168,85,247,0.1)', border: '1px solid rgba(168,85,247,0.3)', padding: '0.3rem 0.75rem', borderRadius: '6px', color: '#e9d5ff' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Zero Hallucination Guardrails · Page-Level Citations
                </div>
              </div>
            </article>

            {/* ========================================================== */}
            {/* CASE STUDY C: VOICE AI BOOKING ASSISTANT */}
            {/* ========================================================== */}
            <article
              id="voice-assistant"
              className="glass-card"
              style={{
                padding: '3rem',
                border: '1px solid rgba(0, 240, 255, 0.25)',
                background: 'rgba(11, 17, 32, 0.8)',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <span className="badge-pill" style={{ marginBottom: '0.5rem' }}>
                    Case Study 03 · Voice AI & Function Calling
                  </span>
                  <h2 style={{ fontSize: '2.1rem', color: '#ffffff', margin: '0.2rem 0 0.5rem' }}>
                    Voice AI Booking Assistant: Conversational Appointment Automation
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#00f0ff' }}>
                    Real-time conversational voice assistant converting spontaneous spoken dialogue into structured booking operations.
                  </p>
                </div>
              </div>

              <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '3rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem' }}>
                    The Scheduling Bottleneck
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
                    High-volume service providers, medical clinics, and consulting businesses lose substantial staff time managing phone-based booking queries, rescheduling, and manual calendar input.
                  </p>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7' }}>
                    Standard interactive voice response (IVR) phone trees are deeply frustrating for customers. Clients want natural verbal interaction that understands scheduling intents without pressing keypad numbers.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1rem' }}>
                    The Conversational Function-Calling Stack
                  </h3>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '1rem' }}>
                    We engineered a sub-second voice automation pipeline utilizing the Groq API for ultra-low latency LLM inference, native function calling, and a modern MERN stack dashboard.
                  </p>
                  <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: '1.7' }}>
                    The system converts speech into structured function parameters (date, time, service type, client info), verifies slot availability against database records, and confirms the reservation.
                  </p>
                </div>
              </div>

              {/* Function Calling Flow Graphic */}
              <div
                style={{
                  background: '#060a14',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '14px',
                  padding: '2rem',
                  marginBottom: '2.5rem',
                }}
              >
                <h4 style={{ fontSize: '0.95rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Voice-to-Execution Execution Architecture
                </h4>

                <div className="grid-3" style={{ gap: '1.25rem' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#00f0ff', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>STEP 01</div>
                    <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.4rem' }}>Spoken Audio Ingestion</div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Streaming incoming caller speech into high-speed STT models, extracting natural phrase timestamps and intent tokens.
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>STEP 02</div>
                    <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.4rem' }}>Groq Function Calling</div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Ultra-low latency LLM inference maps caller speech into structured JSON parameters: reserve_appointment(time, client, service).
                    </p>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1.25rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ color: '#a855f7', fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem' }}>STEP 03</div>
                    <div style={{ fontWeight: '600', color: '#ffffff', marginBottom: '0.4rem' }}>API & Service Execution</div>
                    <p style={{ fontSize: '0.82rem', color: '#94a3b8' }}>
                      Node/FastAPI services execute verified booking transactions, update calendars, and send instant audio confirmations back to the caller.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Breakdown */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {['Python', 'Groq API', 'LLM Function Calling', 'FastAPI', 'Node.js', 'Express', 'React', 'TypeScript'].map((t, idx) => (
                    <span key={idx} style={{ fontSize: '0.78rem', background: 'rgba(0,240,255,0.1)', border: '1px solid rgba(0,240,255,0.3)', padding: '0.3rem 0.75rem', borderRadius: '6px', color: '#a5f3fc' }}>
                      {t}
                    </span>
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                  Sub-second Conversational Latency · Zero Input Hallucination
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Case Study Consultation Section */}
      <section className="section" style={{ background: '#080d1a', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div className="text-center" style={{ marginBottom: '2.5rem' }}>
              <div className="badge-pill">Enterprise Technical Feasibility</div>
              <h2 className="section-title">Deploy Similar Architectures for Your Business</h2>
              <p className="section-subtitle mx-auto">
                Schedule an architectural discovery session to review how these exact technical workflows apply to your proprietary data and operational systems.
              </p>
            </div>

            <EnquiryForm idPrefix="casestudies-form" defaultService="Rag ai" />
          </div>
        </div>
      </section>
    </div>
  );
};
