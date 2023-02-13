import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.MY_BLOG_apiKey,
  authDomain: process.env.MY_BLOG_authDomain,
  projectId: process.env.MY_BLOG_projectId,
  storageBucket: process.env.MY_BLOG_storageBucket,
  messagingSenderId: process.env.MY_BLOG_messagingSenderId,
  appId: process.env.MY_BLOG_appId
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
