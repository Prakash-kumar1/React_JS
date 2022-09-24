// React-JS Is a Javascript library and also a Dependcies. it helps to build single page application . 

// Components :=   Header , Footer , section , aside  etc  everything  is a component .

import logo from './logo.svg';
import './App.css';
import { WelcomeClass } from './components/WelcomeClass';

// // importing welcome function from components
import {WelcomeFn} from "./components/WelcomeFn" ;

let name = "kumar-(Frontend Engineer)" ;          //Always declaring above 

// concept of getting data without reloading (Refreashing) the page , is known as  AJAX .

export function App() {
  return (
 

// using <> and </> , when we write something above on  div .
    <>
    <h1> This is me , Prakash {name} </h1>
    <p>React - JS is a Client side javascript library . ( HTML + JS ==  JSX) it is used to build User Interface (UI designs) and Single Page Applications (SPA) . Loading the page is called " Rendering " . react - Js is lightWeight , Fastest and React has Component based Architecture . React Js follow  Declartive approach (line no.- 4) . React-js creates Virtual DOM . compare to Real DOM , Virtual DOM is very lightWeight and fast . it is like internal tree data structure . </p>
    
    <div className="ist">Lovely</div>
    <img src="C:\Users\Monika Priya Singh\OneDrive\Pictures\Screenshots\github.jpg" alt="nothing Image found" />
   
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          Today we are starting React with Vasanth sir .
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Prakash Kumar
        </a>
      </header>
    </div>
    
    <section>
      <h1 className='head'>Using Function For exporting</h1>
      <p>This is a function and there is no need of export default app</p>
      <WelcomeFn/>

{/* each one of will come 3 times because we copy App 3 times */}
      <WelcomeClass name="Sameer" age= "20" place="Madhya pradesh" food="Chicken" />
      <WelcomeClass name="Anjali" age= "23" place="Noida" food="Dosa"/>
      <WelcomeClass name="Prakash" age= "22" place=" " food="mutton" />
      <WelcomeClass name="Govind" age= "21" place="Luckhnow" food=" "/>
      
    </section>
    </>
   
  );
}

// export default App;

// Never use Two function in a js File 
export function App2(){
  return <h2>app2 is a second function </h2>
}

// React Introduction ==>>   React (also known as React.js or ReactJS)  is a Javascript library for building User
//                           Interfaces . It is maintained by  Facebook  and it play with  Virtual DOM . This is 
//                           very fast due to  Virtual DOM . that's why react is more popular to other Framework 
//                           and  Library . React has component based Architecture for application Development . 


// state :=>  state is current Information or data of the component .


// Node-Modules =>>  Anything that we required for our project present inside the node module . When we installed
//                     any kind of dependcies ( like Bootstrap) it will stored inside the node module . 


// package.json =>>  whatever dependcies stored inside node module , it  Will Listed in package.json


// package-lock.json =>> whole Dependcies tree (Whatever installed or unistalled) is present in package-lock.json .


