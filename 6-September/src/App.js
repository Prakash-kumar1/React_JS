// import logo from './logo.svg';
import './App.css';
import {Toggle} from './components/Toggle.js'
// inside curly braces toggle represents class

import Prop from './Prop';




function App() {
  return (
    <section>
      <Toggle name="Present in props , console" />
<Prop 

// Passing Props in Functional component
text="Passing data in props" 
obj={{name:'Rinki' , food:'Dosa' , note: 'Passing Object in two curly Braces'}}

// Passing Props in Class component
text1="Passing data in class component always used with this keyword"
obj1={{name:'Prakash' , food:'Chicken' , note: 'Passing Object in two curly Braces'}}
/>

    </section>
  );
}

export default App;
