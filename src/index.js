import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import reportWebVitals from './reportWebVitals';
//import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Medición de rendimiento de la aplicación
reportWebVitals(console.log);
