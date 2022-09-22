import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Prakash, { App } from './App';

// For using both function from App.js
import { App , App2 } from './App';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* /* <Prakash />  */}
{/* /* you can give App or App2 which you want */ }
    <App />          
    <App2 />   

 {/* Copying h1 and p just write <App />(you can use multiple times)  and similarly for h2  */}
 <App />   
 <App />    


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
