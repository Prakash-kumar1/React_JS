import React from 'react';
import ReactDOM from 'react-dom/client';     //ReactDOM is a class  present in  NPM  package.
import './index.css';
import {App} from './App';      //this method is using when export with class
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(        //render means , create element in the UI
  <React.StrictMode>

{/* Inside return in app.js will replace this App and show on the page */}

    <App name="Harry potter Self closed tag"/>  

    <App name="Harry potter Normal tag"> 
    <h2>if i write in this format then i can pass extra tags but not in Self closing tag </h2>
    </App>      


  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// cycles : (1) => "Mounting"  OR  "rendering"  OR  " painting"  OR   "loading"
//          (2) =>  Re-rendering  OR  Updating
//           (3)=>  un-mounting (removing the element)