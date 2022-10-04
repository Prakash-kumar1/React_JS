import './App.css';
import React ,{ useState } from 'react';
import { ReducerCounter } from './components/ReducerCounter';

// import { DataFetch } from './components/DataFetch';
// import { UseRef } from './components/UseRef';
// import { RefExample } from './components/RefExample';
// import { ReactTest } from './components/ReactTest';
// import Check from './components/Check';
// import UseCustomHook from './components/UseCustomHook';
// import { Define } from './components/Define';
// import { CounterHooks } from './components/CounterHooks';
// import { StateWithObj } from './components/StateWithObj';
// import { StateWithArr } from './components/StateWithArr';
// import { TitleChangeClass } from './components/TitleChangeClass';
// import { TitleChangeHooks } from './components/TitleChangeHooks';
// import { UseState } from './components/UseState';
// import { UseEffect } from './components/UseEffect';
// import { ToDoApp } from './components/ToDoApp';


// import { ComponentA } from './components/ComponentA';
// export const AgeContext = React.createContext() ;
// export const PlaceContext = React.createContext() ;
// export const FoodContext = React.createContext() ;


export function App(){
//   // For our custom hooks
//   const data =  UseCustomHook() ;

// // For Check.jsx which keep increaseing on a certain  Time - Interval 
//          const [valid , setValid]  =  useState(0) ;

// // Passing Props in component C 
// const [name , setName]  =  useState("Prakash ") ;
// const [age , setAge]  =  useState("23 ") ;
// const [place , setPlace]  =  useState("Uttar Pradesh ") ;
// const [food , setFood]  =  useState("Dosa , Chicken Biryani ") ;


  return (

 <>
  {/* <Define />
  <CounterHooks />
  <StateWithObj />
  <StateWithArr />
  <TitleChangeClass />
  <TitleChangeHooks />
  <UseEffect />
  <UseState />
  <UseRef />
  < RefExample /> 
  < DataFetch />
  <ReactTest />
<ToDoApp />
<Check />    */}
< ReducerCounter />

  {/* Using  Check.jsx  with  UseState  in App.js */}
  {/* {(valid < 10 || valid > 15) && <Check />}
  <button onClick={() => setValid((prev) => prev+1)}>click = {valid}</button> */}


{/* // For our custom hooks */}
  {/* <h3>count Up : {data.count}</h3>
  <button type="button" onClick={data.handleIncrement}>addBy5</button>*/}

{/* ####-=-=-=->>>>  Use- Context Method   ####-=-=-=->>>>*/}
{/* < ComponentA name={name}/> */}
{/* if i want to pass in Component-C , first pass in Component-A , then in Component-B and at last In Component-C */}
{/* This is a Lengthy Process also not good practice  */}

{/* <AgeContext.Provider value={age}>
<PlaceContext.Provider value={place}>
<FoodContext.Provider value={food}>
< ComponentA />
</FoodContext.Provider>
</PlaceContext.Provider>
</AgeContext.Provider> */}

  </>

  );

}



