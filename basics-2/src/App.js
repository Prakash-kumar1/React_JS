// import logo from './logo.svg';
import './App.css';
import { WelcomeClass } from './components/WelcomeClass';

// // importing welcome function from components
import {WelcomeFn} from "./components/WelcomeFn" ;


// function App() {
// // Remove Everything In-Built and atarted from scratch .
//   return ( 
//     <div>
//   <h1>Welcome to React class</h1>
//   <p>If we can,t wrap h1 and p inside div  Or  Section tag , it will throw Error because there are two elements</p>
//   </div>
//   );  
// }

// // Here I am Exporting by default , so, we change file name in Index.js from App to  Prakash or any Name.
// export default App;


// Using Functions for exporting (comment Line no. 4 to line no. 15)

export function App(){
  return (
    <section>
      <h1>Using Function For exporting</h1>
      <p>This is a function and there is no need of export default app</p>
      <WelcomeFn/>

{/* each one of will come 3 times because we copy App 3 times */}
      <WelcomeClass name="Sameer" age= "20" />
      <WelcomeClass name="Anjali" age= "23" />
      <WelcomeClass name="Prakash" age= "22" />
      <WelcomeClass name="Govind" age= "21" />
      
    </section>
  ) ;
}

// Never use Two function in a js File 
export function App2(){
  return <h2>app2 is a second function </h2>
}

