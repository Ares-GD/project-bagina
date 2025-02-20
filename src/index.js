import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Ensure the container exists in the DOM
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Failed to find the root element in the DOM.");
}

// Create a root and render the App component
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);