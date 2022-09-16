import React from 'react';
import ReactDOM from 'react-dom/client';     //ReactDOM is a class  present in  NPM  package.
import './index.css';
// import {App} from './App';      //this method is using when export with class
import {Parent} from './Parent';      //this method is using when export with class
import  {Counter} from "./Counter";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(        //render means , create element in the UI
  <React.StrictMode>

    <Parent />

    <Counter />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// cycles : (1) => "Mounting"  OR  "rendering"  OR  " painting"  OR   "loading"
//          (2) =>  Re-rendering  OR  Updating
//           (3)=>  un-mounting (removing the element)