import React from 'react';
import ReactDOM from 'react-dom/client'; // This line should appear ONLY ONCE
import './styles.css'; // This is the new line we added for global styles
import App from './App'; // This line should appear ONLY ONCE

// These lines below should be commented out or deleted as we did in Step 16
// import './index.css';
// import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// This section should also be commented out or deleted
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();