import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { PublicClientApplication } from '@azure/msal-browser';

const pca =new PublicClientApplication({
  auth:{
     clientId: '15106e5c-47b1-40b8-9075-1b6a3ee0b771',
    authority: 'https://login.microsoftonline.com/e4e34038-ea1f-4882-b6e8-ccd776459ca0',
    redirectUrl: 'https://localhost/3000', // Update with your redirect URI
  },
  cache: {
    cacheLocation:"localStorage",

    // storeAuthStateInCookie: false,
  },
 })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
    <App  msalInstance={pca}/>

    </Router>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
