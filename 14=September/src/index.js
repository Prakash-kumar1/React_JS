import React from 'react';
import ReactDOM from 'react-dom/client';     //ReactDOM is a class  present in  NPM  package.
import './index.css';
import "./App.css" ;
// import {App} from './App';      //this method is using when export with class
import {Parent} from './components/Parent';      //this method is using when export with class
import  {Counter} from "./components/Counter";
import  {Greeting} from "./components/Greeting";
import  {Names} from "./components/Names";
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(        //render means , create element in the UI
  <React.StrictMode>

    <Parent />

    <Counter />

    <Greeting />

    <Names />
    
  </React.StrictMode>
);

reportWebVitals();

// cycles : (1) => "Mounting"  OR  "rendering"  OR  " painting"  OR   "loading"
//          (2) =>  Re-rendering  OR  Updating
//           (3)=>  un-mounting (removing the element)