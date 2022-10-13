import { Routes , Route} from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog';
import Service from './components/pages/Service';
import Connect from './components/pages/Connect';
import Navbar from './components/Navbar';

export function App(){

  return (
    <>
    <Navbar />

    <Routes>

      <Route  path = '/'  element  =  {<div> I am Home Page , slash means by default </div>}/>
      <Route  path = '/contact'  element =  {<div> I am Contact Page , you are coming from Home page </div>}/>
      <Route  path = '/about'  element  =  {<div> I am About Page . Do you want to say something about me   </div>}/>
      
      <Route  path = '/Blog'  element  =  {<Blog />} />
      <Route  path = '/Service'  element  =  {<Service />} />
      <Route  path = '/Connect'  element  =  {<Connect />} />

    </Routes>

</>
  );

}



