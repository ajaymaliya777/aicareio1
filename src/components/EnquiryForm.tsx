import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import axios from 'axios';
import { ConfettiBurst } from './engagement/ConfettiBurst.js';
import { useToast } from './engagement/ToastProvider.js';
import { useSectionVisit } from './engagement/useSectionVisit.js';

interface FormProps {
  idPrefix?: string;
  defaultService?: string;
}

export const EnquiryForm: React.FC<FormProps> = ({ idPrefix = 'enquiry', defaultService = 'GEN Ai' }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: defaultService,
    budget: '',
    requirements: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { showToast } = useToast();
  useSectionVisit(`form-${idPrefix}`);

  const services = [
    { label: 'Generative AI & LLM Applications', value: 'GEN Ai' },
    { label: 'RAG Systems & Knowledge Assistants', value: 'Rag ai' },
    { label: 'Custom Machine Learning Solutions', value: 'Machine Learning' },
    { label: 'Computer Vision & High-Precision OCR', value: 'Computer Vision & OCR' },
    { label: 'Web Applications & Resilient APIs', value: 'Webdevelopment' },
    { label: 'Data Science & Strategic Analytics', value: 'Data Analytics' },
    { label: 'IT Systems & Architecture Support', value: 'IT & Technical' },
  ];

  const budgetOptions = [
    '< $5,000 / Discovery Sprint',
    '$5,000 - $15,000 / MVP Phase',
    '$15,000 - $50,000 / Production Deployment',
    '$50,000+ / Enterprise Scale',
    'Custom / Milestone Based',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      // 1. Submit through the secure Node/Express backend which directly forwards to Google Forms
      const response = await axios.post('/api/enquiry', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      });

      if (response.data && response.data.success) {
        setSubmitted(true);
        showToast('Excellent — request received!');
      } else {
        throw new Error(response.data?.message || 'Submission failed');
      }
    } catch (err: any) {
      // Direct client fallback to Google Forms endpoint if local server is operating without API gateway
      try {
        const formPayload = new URLSearchParams();
        formPayload.append('entry.378124612', formData.fullName);
        formPayload.append('entry.1643538742', formData.phone);
        formPayload.append('entry.66680179', formData.email);
        formPayload.append('entry.67958042', formData.service);
        
        const compositeDetails = `${formData.requirements}\n\n[Organization: ${formData.company || 'Not specified'}]\n[Budget Range: ${formData.budget || 'Not specified'}]`;
        formPayload.append('entry.624228568', compositeDetails);

        await fetch(
          'https://docs.google.com/forms/d/e/1FAIpQLSfNnLaWSJRTxN9x9gAhY7PnUKTkvBBlCb1eMf2dz-BoW6tukg/formResponse',
          {
            method: 'POST',
            mode: 'no-cors',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formPayload.toString(),
          }
        );

        setSubmitted(true);
        showToast('Excellent — request received!');
      } catch (fallbackError) {
        setErrorMessage('Unable to dispatch request automatically. Please reach us directly at designerstudio597@gmail.com.');
      }
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div
        className="glass-card text-center"
        style={{
          padding: '3.5rem 2rem',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          boxShadow: '0 0 35px rgba(0, 240, 255, 0.15)',
        }}
      >
        <ConfettiBurst />
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(0, 240, 255, 0.1)',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            border: '1px solid #00f0ff',
          }}
        >
          <CheckCircle2 size={36} color="#00f0ff" />
        </div>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#ffffff' }}>
          Consultation Request Recorded
        </h3>
        <p style={{ color: '#94a3b8', maxWidth: '540px', margin: '0 auto 2rem', fontSize: '1rem' }}>
          Thank you, <strong style={{ color: '#ffffff' }}>{formData.fullName}</strong>. Your project details have been successfully synchronized to our enterprise review queue. Our engineering leads will review your requirements and respond within one business day.
        </p>
        <div style={{ display: 'inline-flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                fullName: '',
                email: '',
                phone: '',
                company: '',
                service: 'GEN Ai',
                budget: '',
                requirements: '',
              });
            }}
            className="btn-secondary"
          >
            Submit Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="glass-card"
      style={{
        border: '1px solid rgba(56, 189, 248, 0.25)',
        boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 240, 255, 0.08)',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <div className="badge-pill">
          <Sparkles size={14} /> Custom Enterprise Consultation
        </div>
        <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem', color: '#ffffff' }}>
          Start an Engineering Discussion
        </h3>
        <p style={{ fontSize: '0.95rem', color: '#94a3b8' }}>
          Direct technical consultation. Share your business problem, systems context, and target timeline.
        </p>
      </div>

      {errorMessage && (
        <div
          style={{
            padding: '1rem',
            background: 'rgba(239, 68, 68, 0.12)',
            border: '1px solid rgba(239, 68, 68, 0.35)',
            borderRadius: '8px',
            color: '#fca5a5',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
            fontSize: '0.9rem',
          }}
        >
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="grid-2">
          {/* Full Name */}
          <div className="form-group">
            <label htmlFor={`${idPrefix}-name`} className="form-label">
              Full Name <span className="req">*</span>
            </label>
            <input
              type="text"
              id={`${idPrefix}-name`}
              name="fullName"
              required
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Sarah Jenkins"
              className="form-input"
            />
          </div>

          {/* Business Email */}
          <div className="form-group">
            <label htmlFor={`${idPrefix}-email`} className="form-label">
              Business Email <span className="req">*</span>
            </label>
            <input
              type="email"
              id={`${idPrefix}-email`}
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="s.jenkins@company.com"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid-2">
          {/* Phone Number */}
          <div className="form-group">
            <label htmlFor={`${idPrefix}-phone`} className="form-label">
              Phone Number / WhatsApp
            </label>
            <input
              type="tel"
              id={`${idPrefix}-phone`}
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+1 (555) 000-0000 / +91"
              className="form-input"
            />
          </div>

          {/* Company Name */}
          <div className="form-group">
            <label htmlFor={`${idPrefix}-company`} className="form-label">
              Company or Organization
            </label>
            <input
              type="text"
              id={`${idPrefix}-company`}
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Apex Global Operations"
              className="form-input"
            />
          </div>
        </div>

        <div className="grid-2">
          {/* Service Required */}
          <div className="form-group">
            <label htmlFor={`${idPrefix}-service`} className="form-label">
              Primary Practice Focus <span className="req">*</span>
            </label>
            <select
              id={`${idPrefix}-service`}
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="form-select"
            >
              {services.map((svc) => (
                <option key={svc.value} value={svc.value}>
                  {svc.label}
                </option>
              ))}
            </select>
          </div>

          {/* Estimated Project Budget */}
          <div className="form-group">
            <label htmlFor={`${idPrefix}-budget`} className="form-label">
              Project Budget (Optional)
            </label>
            <select
              id={`${idPrefix}-budget`}
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="form-select"
            >
              <option value="">Select an investment tier...</option>
              {budgetOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div className="form-group">
          <label htmlFor={`${idPrefix}-requirements`} className="form-label">
            Project Description & Business Requirements <span className="req">*</span>
          </label>
          <textarea
            id={`${idPrefix}-requirements`}
            name="requirements"
            required
            rows={4}
            value={formData.requirements}
            onChange={handleChange}
            placeholder="Tell us about the business problem, current bottlenecks, target systems, or specific workflows you want to modernize..."
            className="form-textarea"
          />
        </div>

        {/* Anti-spam note & Privacy */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            🔒 Confidential. Directly connected to our enterprise evaluation pipeline.
          </span>

          <button
            type="submit"
            disabled={loading}
            className="btn-primary"
            style={{ minWidth: '220px', cursor: loading ? 'not-allowed' : 'pointer', opacity: loading ? 0.7 : 1 }}
          >
            {loading ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Transmitting...
              </>
            ) : (
              <>
                Submit Inquiry <Send size={16} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
