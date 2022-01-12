import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import helmet from './assets/img/sword-1.png'

ReactDOM.render(
  <React.StrictMode>
    <img src={helmet} alt="" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
