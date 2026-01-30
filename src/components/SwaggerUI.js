import React, { Component } from 'react';
import SwaggerUI from 'swagger-ui-react';
import './SwaggerUI.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Swagger UI Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-message">
          <h3>⚠️ Error loading Swagger UI</h3>
          <p>{this.state.error?.message || 'Unknown error occurred'}</p>
          <p>Please check the browser console for more details.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

const SwaggerUIComponent = () => {
  const openApiSpecUrl = '/openapi.json';

  return (
    <section className="swagger-section">
      <div className="swagger-container">
        <ErrorBoundary>
          <SwaggerUI
            url={openApiSpecUrl}
            docExpansion="list"
            defaultModelsExpandDepth={1}
            defaultModelExpandDepth={1}
            tryItOutEnabled={true}

            filter={true}   
            onComplete={() => {
              console.log('Swagger UI loaded successfully');
            }}
            onFailure={(error) => {
              console.error('Swagger UI failed to load:', error);
            }}
          />
        </ErrorBoundary>
      </div>
    </section>
  );
};

export default SwaggerUIComponent;
