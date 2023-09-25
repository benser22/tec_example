import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tailwindcss/tailwind.css';
import { createRoot } from 'react-dom/client'; // Importa createRoot aquí
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Resto de tu código
reportWebVitals();
