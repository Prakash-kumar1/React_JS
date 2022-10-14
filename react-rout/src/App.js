import { Routes , Route, Navigate} from 'react-router-dom';
import './App.css';
import Blog from './components/pages/Blog';
import Service from './components/pages/Service';
import Connect from './components/pages/Connect';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import Post from './components/pages/Post';
import Navbar from './components/Navbar';

export function App(){
  let isLogged = false ;

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


{/* Conditional Rendering Examples */}
    <Route  path = '/Login'  element  =  {<Login />} />
    <Route  path = '/Dashboard'  element  =  {isLogged ? <Dashboard /> : <Navigate to="/Login" replace />} />



      <Route  path = '/Post'  element  =  {<Post />} />
{/* if we write anything after URL in post then it show Error , For removing this error we use */}
      <Route  path = '/Post/:category'  element  =  {<Post />} />
      <Route  path = '/Post/:category/:id'  element  =  {<Post />} />

{/* For showing Error Page */}
<Route  path = '*'  element  =  {<h1> <strong>Error 404 Page not Found !!</strong></h1>}/>

    </Routes>


</>
  );

}



