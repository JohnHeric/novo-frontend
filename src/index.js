import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';

import 'bootstrap/dist/css/bootstrap.min.css'; /* Importando o bootstrap da pasta node_modules */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);