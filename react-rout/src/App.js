import { Routes , Route, Navigate} from 'react-router-dom';

// import Blog from './components/pages/Blog';
// import Service from './components/pages/Service';
// import Connect from './components/pages/Connect';
// import Dashboard from './components/pages/Dashboard';
// import Login from './components/pages/Login';
// import Logout from './components/pages/Logout';
// import Post from './components/pages/Post';
// import Navbar from './components/Navbar';

// import {Feed} from './components/project/Feed';
// import About from './components/project/About';
// import {Contact} from './components/project/Contact';
// import Home from './components/project/Home';
// import Layout from './components/Layout';
// import PostLayout from './components/PostLayout';
// import PostDetail from './components/project/PostDetail';

import { useState } from "react";
import { Property } from "./components/Property/Property";
import { Header } from "./components/Header/Header";
import { Page } from "./components/Page/Page";

import './App.css';

export function App(){

  const [favProperty, setFavProperty] = useState([]);

  let isLogged = true ;
  let data = {
    'st' : "This is like passing props , you can pass anything you want ."
  }

  return (
    <>

    {/* <Navbar />

    <Routes>

      <Route  path = '/'  element  =  {<div> I am Home Page , slash means by default </div>}/>
      <Route  path = '/contact'  element =  {<div> I am Contact Page , you are coming from Home page </div>}/>
      <Route  path = '/about'  element  =  {<div> I am About Page . Do you want to say something about me   </div>}/>
      
      <Route  path = '/blog'  element  =  {<Blog />} />
      <Route  path = '/service'  element  =  {<Service />} />
      <Route  path = '/connect'  element  =  {<Connect />} /> */}


{/* Conditional Rendering Examples */}
    {/* <Route  path = '/login'  element  =  {<Login />} />
    <Route  path = '/logout'  element  =  {<Logout />} />
    <Route  path = '/dashboard'  element  =  {isLogged ? <Dashboard /> : <Navigate to="/Login" replace state={data}/>} />



      <Route  path = '/post'  element  =  {<Post />} /> */}
{/* if we write anything after URL in post then it show Error , For removing this error we use */}
      {/* <Route  path = '/Post/:category'  element  =  {<Post />} />
      <Route  path = '/Post/:category/:id'  element  =  {<Post />} /> */}

{/* For showing Error Page */}
{/* <Route  path = '*'  element  =  {<h1> <strong>OOPs Sorry , Error 404 Page not Found !!</strong></h1>}/>

    </Routes>  */}


{/* @@@###$$$%%%^^^&&&&==>>  Creating  a  Basic  Layout  Project  using  React - Router V6  <<==@@@###$$$%%%^^^&&&&*/}


   {/* <Routes> */}

{/* For creating Nested Routes , don't use Self closed tag . line no- 70 is parent , every one is child*/}
   {/* <Route  path = '/'  element  =  {<Layout />} >

   <Route  path = 'about'  element  =  {<About />} /> 
   <Route  path = 'contact'  element  =  {<Contact />} /> 


   <Route  path = 'Feed'  element  =  {<PostLayout />} >
   <Route path = ':category'  element  =  {<PostDetail />}/>
   <Route index element  =  {<Feed />} /> 

    </Route>  */}


{/* index shares  with " / "  parent means In layout page we can see Home page */}
   {/* <Route index element  =  {<Home />} /> 
   
   </Route>

   <Route  path = '*'  element  =  {<h1>Error 404 Page not Found !!</h1>} />
   </Routes> */}

   <Routes>
      <Route
        path="/"
        element={
          <Header favProperty={favProperty} setFavProperty={setFavProperty} />
        }
      >
        <Route
          index
          element={
            <Property
              favProperty={favProperty}
              setFavProperty={setFavProperty}
            />
          }
        />
        <Route
          path="page"
          element={
            <Page favProperty={favProperty} setFavProperty={setFavProperty} />
          }
        />
      </Route>
    </Routes>

</>

  );

}



