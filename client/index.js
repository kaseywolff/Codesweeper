import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App.jsx';
=======
import WebPackage from './components/WebPackage.jsx';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> main

import styles from './scss/app.scss'

// ReactDOM.render(<App />, document.getElementById('root'));

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <WebPackage />
  </BrowserRouter>
)
