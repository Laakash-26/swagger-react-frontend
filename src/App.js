import React from 'react';
import Header from './components/Header';
import AuthSection from './components/AuthSection';
import SchemaSection from './components/SchemaSection';
import SwaggerUIComponent from './components/SwaggerUI';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <AuthSection />
        <SchemaSection />
        <SwaggerUIComponent />
      </div>
    </div>
  );
}

export default App;
