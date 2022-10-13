import { Routes , Route} from 'react-router-dom';
import './App.css';

export function App(){


  return (
    <Routes>
      <Route  path = '/'  element  =  {<div> I am Home Page , slash means by default </div>}/>
      <Route  path = '/contact'  element =  {<div> I am Contact Page , you are coming from Home page </div>}/>
      <Route  path = '/about'  element  =  {<div> I am About Page . Do you want to say something about me   </div>}/>
    </Routes>

  );

}



