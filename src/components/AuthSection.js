import React, { useState } from 'react';
import './AuthSection.css';

const AuthSection = () => {
  const [copied, setCopied] = useState({});

  const authMethods = [
    {
      title: '🔑 API Key Authentication',
      key: 'X-API-Key: demo-api-key-123',
      label: 'Header',
      description: 'Add this header to all requests',
      copyText: 'demo-api-key-123'
    },
    {
      title: '🎫 Bearer Token',
      key: 'Authorization: Bearer demo-jwt-token-456',
      label: 'JWT',
      description: 'Alternative authentication method',
      copyText: 'demo-jwt-token-456'
    },
    {
      title: '👤 Basic Auth',
      key: 'demo:password123',
      label: 'Base64',
      description: 'ZGVtbzpwYXNzd29yZDEyMw==',
      copyText: 'ZGVtbzpwYXNzd29yZDEyMw=='
    }
  ];

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied({ ...copied, [id]: true });
      setTimeout(() => {
        setCopied({ ...copied, [id]: false });
      }, 2000);
    });
  };

  return (
    <section className="auth-section">
      <h2 className="section-title">Authentication Methods</h2>
      <div className="auth-grid">
        {authMethods.map((method, index) => (
          <div key={index} className="auth-card">
            <h3 className="auth-title">{method.title}</h3>
            <div className="auth-content">
              <code className="auth-key">{method.key}</code>
              <div className="auth-meta">
                <span className="auth-label">{method.label}</span>
                <button
                  className="copy-button"
                  onClick={() => copyToClipboard(method.copyText, index)}
                >
                  {copied[index] ? '✓ Copied' : 'Copy'}
                </button>
              </div>
              <p className="auth-description">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuthSection;
