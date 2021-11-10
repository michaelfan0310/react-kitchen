import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactPlayer from 'react-player';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Photos from './components/Photos.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
