import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App'; // Importing the App component from App.js
import Loginpage from './Loginpage.js';
import "bootstrap/dist/css/bootstrap-grid.css";
import "bootstrap/dist/js/bootstrap.js";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Loginpage/>
    <App />
  </div>,
  document.getElementById("root")
);