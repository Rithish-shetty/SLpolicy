import React, { useState, useEffect } from 'react';

const sections = [
  {
    id: '01',
    title: 'Data Architecture',
    icon: '◈',
    content: (
      <>
        <p>SmartLearn AI is built on a <strong>Local-First</strong> philosophy. Your notes, tasks, and study materials live exclusively on your device — never on our servers.</p>
        <div className="highlight-box">
          <span className="highlight-label">Core Principle</span>
          <p>We do not maintain a central database of your personal content. What's yours stays yours.</p>
        </div>
      </>
    ),
  },
  {
    id: '02',
    title: 'AI Tutoring',
    icon: '◉',
    content: (
      <>
        <p>When you use the AI Tutor, your messages are processed via <strong>Google Gemini 2.5 Flash Lite</strong> to generate a response.</p>
        <div className="pill-list">
          <div className="pill">
            <span className="pill-icon">→</span>
            <div><strong>Processing</strong><br/>Data is transmitted only to generate your response.</div>
          </div>
          <div className="pill">
            <span className="pill-icon">→</span>
            <div><strong>No Retention</strong><br/>Chat logs are never stored on our servers.</div>
          </div>
          <div className="pill">
            <span className="pill-icon">→</span>
            <div><strong>Third-Party</strong><br/>Google processes this data under the Google APIs Terms of Service.</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '03',
    title: 'Payments & Reports',
    icon: '◇',
    content: (
      <>
        <div className="pill-list">
          <div className="pill">
            <span className="pill-icon">₿</span>
            <div><strong>RevenueCat</strong><br/>Handles all subscription validation. We never see or store your payment details.</div>
          </div>
          <div className="pill">
            <span className="pill-icon">✉</span>
            <div><strong>EmailJS</strong><br/>Bug reports you submit are transmitted via EmailJS directly to our support team.</div>
          </div>
        </div>
      </>
    ),
  },
  {
    id: '04',
    title: 'Your Rights',
    icon: '◎',
    content: (
      <>
        <p>Because your data stays on your device, you have full control at all times.</p>
        <div className="rights-grid">
          {['Delete your data anytime from device settings', 'Export your content whenever you choose', 'No account required to use core features', 'No tracking or analytics on your study habits'].map((right, i) => (
            <div key={i} className="right-item">
              <span className="right-check">✓</span>
              <span>{right}</span>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    id: '05',
    title: 'Contact',
    icon: '◐',
    content: (
      <>
        <p>Questions about this policy? We're here to help.</p>
        <div className="contact-box">
          <span className="contact-label">Nexias Support</span>
          <a href="mailto:[Your Email]" className="contact-email">[Your Email]</a>
        </div>
      </>
    ),
  },
];

const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 50);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body { background: #0f172a; }


        .pp-root {
          min-height: 100vh;
          background: #0f172a;
          color: #cbd5e1;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.7;
          padding: 0 20px 80px;
        }

        .pp-inner {
          max-width: 720px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .pp-inner.visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Header */
        .pp-header {
          padding: 64px 0 48px;
          border-bottom: 1px solid #1e293b;
          margin-bottom: 48px;
        }

        .pp-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #475569;
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .pp-eyebrow::after {
          content: '';
          display: block;
          height: 1px;
          width: 40px;
          background: #ccc;
        }

        .pp-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 700;
          color: #e2e8f0;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .pp-title span {
          color: #64748b;
        }

        .pp-meta {
          font-size: 13px;
          color: #475569;
          display: flex;
          gap: 24px;
          align-items: center;
        }

        .pp-meta-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #334155;
        }

        /* Sections */
        .pp-section {
          margin-bottom: 2px;
          border: 1px solid #1e293b;
          border-radius: 12px;
          overflow: hidden;
          transition: border-color 0.2s ease;
        }

        .pp-section:hover {
          border-color: #ccc;
        }

        .pp-section.open {
          border-color: #334155;
        }

        .pp-section-header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          cursor: pointer;
          background: #1e293b;
          transition: background 0.2s ease;
          user-select: none;
        }

        .pp-section-header:hover {
          background: #263548;
        }

        .pp-section.open .pp-section-header {
          background: #2a3a50;
        }

        .pp-section-num {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #334155;
          letter-spacing: 0.1em;
          min-width: 28px;
        }

        .pp-section-icon {
          font-size: 18px;
          color: #475569;
          min-width: 24px;
          text-align: center;
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .pp-section.open .pp-section-icon {
          opacity: 1;
          color: #cbd5e1;
        }

        .pp-section-title {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #e2e8f0;
          flex: 1;
        }

        .pp-section-arrow {
          font-size: 12px;
          color: #334155;
          transition: transform 0.3s ease, color 0.2s ease;
        }

        .pp-section.open .pp-section-arrow {
          transform: rotate(180deg);
          color: #64748b;
        }

        .pp-section-body {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s ease;
        }

        .pp-section.open .pp-section-body {
          max-height: 600px;
        }

        .pp-section-content {
          padding: 0 24px 24px 68px;
          color: #94a3b8;
          font-size: 14.5px;
        }

        .pp-section-content p { margin-bottom: 12px; }
        .pp-section-content p:last-child { margin-bottom: 0; }
        .pp-section-content strong { color: #e2e8f0; font-weight: 500; }

        /* Components */
        .highlight-box {
          background: #1e293b;
          border-left: 2px solid #334155;
          border-radius: 0 8px 8px 0;
          padding: 14px 16px;
          margin-top: 14px;
        }

        .highlight-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #475569;
          display: block;
          margin-bottom: 6px;
        }

        .highlight-box p { margin-bottom: 0; }

        .pill-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 14px;
        }

        .pill {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #1a2840;
          border-radius: 8px;
          padding: 12px 14px;
          border: 1px solid #1e293b;
        }

        .pill-icon {
          color: #475569;
          font-size: 14px;
          min-width: 16px;
          margin-top: 1px;
        }

        .pill strong {
          display: block;
          margin-bottom: 2px;
          font-size: 13px;
          color: #e2e8f0;
        }

        .pill div { font-size: 13px; line-height: 1.5; }

        .rights-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 14px;
        }

        @media (max-width: 480px) {
          .rights-grid { grid-template-columns: 1fr; }
        }

        .right-item {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 13px;
          padding: 10px 12px;
          background: #1a2840;
          border-radius: 8px;
          border: 1px solid #1e293b;
        }

        .right-check {
          color: #64748b;
          font-size: 12px;
          margin-top: 1px;
          flex-shrink: 0;
        }

        .contact-box {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-top: 14px;
          padding: 16px 18px;
          background: #1e293b;
          border-radius: 10px;
          border: 1px solid #1e293b;
        }

        .contact-label {
          font-family: 'Inter', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: #475569;
        }

        .contact-email {
          color: #e2e8f0;
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          transition: color 0.2s;
        }

        .contact-email:hover { color: #64748b; }

        /* Footer */
        .pp-footer {
          margin-top: 56px;
          padding-top: 24px;
          border-top: 1px solid #1e293b;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .pp-footer-brand {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
        }

        .pp-footer-text {
          font-size: 12px;
          color: #334155;
        }
      `}</style>

      <div className="pp-root">
        <div className={`pp-inner${visible ? ' visible' : ''}`}>
          <header className="pp-header">
            <div className="pp-eyebrow">SmartLearn AI · Nexias</div>
            <h1 className="pp-title">Privacy<br/><span>Policy</span></h1>
            <div className="pp-meta">
              <span>Last updated: February 28, 2026</span>
              <div className="pp-meta-dot" />
              <span>Version 1.0</span>
            </div>
          </header>

          <div>
            {sections.map((section) => {
              const isOpen = activeSection === section.id;
              return (
                <div key={section.id} className={`pp-section${isOpen ? ' open' : ''}`}>
                  <div
                    className="pp-section-header"
                    onClick={() => setActiveSection(isOpen ? null : section.id)}
                  >
                    <span className="pp-section-num">{section.id}</span>
                    <span className="pp-section-icon">{section.icon}</span>
                    <span className="pp-section-title">{section.title}</span>
                    <span className="pp-section-arrow">▼</span>
                  </div>
                  <div className="pp-section-body">
                    <div className="pp-section-content">{section.content}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <footer className="pp-footer">
            <span className="pp-footer-brand">SmartLearn AI</span>
            <span className="pp-footer-text">© 2026 Nexias. All rights reserved.</span>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;