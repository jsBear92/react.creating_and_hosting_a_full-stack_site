import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAa8UrLI3jeeOw-yZz3uQaNSPjoJRb-poE",
  authDomain: "my-react-blog-ee911.firebaseapp.com",
  projectId: "my-react-blog-ee911",
  storageBucket: "my-react-blog-ee911.appspot.com",
  messagingSenderId: "234940158658",
  appId: "1:234940158658:web:312dd694396d758002a15b"
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
