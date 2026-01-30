import React, { useState } from 'react';
import './SchemaSection.css';

const SchemaSection = () => {
  const [copied, setCopied] = useState({});

  const schemas = [
    { name: 'User', icon: '👤', json: { id: 1, name: 'John Doe' } },
    { name: 'Bill', icon: '📄', json: { id: 1, amount: 500 } },
    { name: 'Payment', icon: '💸', json: { id: 1, status: 'completed' } },
    { name: 'Biller', icon: '🏢', json: { id: 1, name: 'Airtel' } },
    { name: 'PaymentMethod', icon: '💳', json: { id: 1, type: 'upi' } },
    { name: 'Address', icon: '📍', json: { city: 'Mumbai' } },
    { name: 'UploadedFile', icon: '📁', json: { fileName: 'bill.pdf' } },
    { name: 'Error', icon: '⚠️', json: { message: 'Not Found' } }
  ];

  // ✅ Copy single schema
  const copyToClipboard = (json, index) => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
    setCopied(prev => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setCopied(prev => ({ ...prev, [index]: false }));
    }, 2000);
  };

  // ✅ Copy all schemas
  const copyAllSchemas = () => {
  const allSchemas = schemas.reduce((acc, s) => {
    acc[s.name] = s.json;
    return acc;
  }, {});

  navigator.clipboard.writeText(JSON.stringify(allSchemas, null, 2))
    .then(() => {
      alert('✔ All schemas copied to clipboard!');
    });
};


  // ✅ Download OpenAPI YAML (from public/openapi.yaml)
  const downloadOpenApiSpec = async () => {
    const response = await fetch('/openapi.yaml');
    const yaml = await response.text();

    const blob = new Blob([yaml], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'openapi.yaml';
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <section className="schema-section">
      <div className="schema-header">
        <h2>📋 JSON Schemas</h2>
        <p>Ready-to-use schemas for Postman & automation</p>
      </div>

      {/* SCHEMA CARDS */}
      <div className="schema-grid">
        {schemas.map((schema, index) => (
          <div key={index} className="schema-card">
            <div className="schema-icon">{schema.icon}</div>
            <h3 className="schema-name">{schema.name}</h3>

            <button
              className={`schema-copy-button ${copied[index] ? 'copied' : ''}`}
              onClick={() => copyToClipboard(schema.json, index)}
            >
              {copied[index] ? '✓ Copied' : 'Copy JSON'}
            </button>
          </div>
        ))}
      </div>

      {/* 🔽 THIS IS THE PART YOU ASKED ABOUT */}
      <div className="schema-actions">
        <button
          className="schema-action-btn"
          onClick={downloadOpenApiSpec}
        >
          📥 Download Full OpenAPI Spec
        </button>

        <button
          className="schema-action-btn"
          onClick={copyAllSchemas}
        >
          📋 Copy All Schemas
        </button>
      </div>
    </section>
  );
};

export default SchemaSection;
