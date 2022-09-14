// React-JS Is a Javascript library . it helps to build single page application . 

// Components :=   Header , Footer , section , aside  etc  everything  is a component .


import logo from './logo.svg';
import './App.css';

let name = "kumar-(Frontend Engineer)" ;          //Always declaring above 

// concept of getting data without reloading (Refreashing) the page , is known as  AJAX .

function App() {
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
    
    </>
   
  );
}

export default App;


// Node-Modules =>>  Anything that we required for our project present inside the node module . When we installed
//                     any kind of dependcies ( like Bootstrap) it will stored inside the node module . 

// package.json =>>  whatever dependcies stored inside node module , it  Will Listed in package.json

// package-lock.json =>> whole Dependcies tree (Whatever installed or unistalled) is present in package-lock.json .


