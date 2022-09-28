// import logo from './logo.svg';
import './App.css';
import { RefExample } from './components/RefExample';
// import Check from './components/Check';
// import { useState } from 'react';
// import UseCustomHook from './components/UseCustomHook';
// import { Define } from './components/Define';
// import { CounterHooks } from './components/CounterHooks';
// import { StateWithObj } from './components/StateWithObj';
// import { StateWithArr } from './components/StateWithArr';
// import { TitleChangeClass } from './components/TitleChangeClass';
// import { TitleChangeHooks } from './components/TitleChangeHooks';
// import { ToDoApp } from './components/ToDoApp';
// import { UseState } from './components/UseState';
// import { UseEffect } from './components/UseEffect';


export function App(){
  // For our custom hooks
  // const data =  UseCustomHook() ;

// For Check.jsx which keep increaseing on a certain  Time - Interval 
        //  const [valid , setValid]  =  useState(0) ;

  return (

 <>
  {/* <Define />
  <CounterHooks />
  <StateWithObj />
  <StateWithArr />
  <TitleChangeClass />
  <TitleChangeHooks />
  <ToDoApp />
  <UseState />
  <UseEffect />
  <Check />    */}

  {/* Using  Check.jsx  with  UseState  in App.js */}
  {/* {(valid < 10 || valid > 15) && <Check />}
  <button onClick={() => setValid((prev) => prev+1)}>click = {valid}</button> */}

{/* // For our custom hooks */}
  {/* <h3>count Up : {data.count}</h3>
  <button type="button" onClick={data.handleIncrement}>addBy5</button> */}

  < RefExample />

  </>

  );

}



