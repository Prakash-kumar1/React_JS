import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';        //when you are not using default then written in Curly Braces . 
import reportWebVitals from './reportWebVitals';

// "root"  DOM node
const root = ReactDOM.createRoot(document.getElementById('root'));

// React  Element
root.render(

// if there is any error React.StrictMode , throws an error and we have to fix it

  <React.StrictMode>        
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
