import React from 'react';
import ReactDOM from 'react-dom';
import WebPackage from './components/WebPackage.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import styles from './scss/app.scss'

// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WebPackage />
  </BrowserRouter>
)
