import { Routes , Route, Navigate} from 'react-router-dom';
import './App.css';



export function App(){

  let isLogged = true ;
  let data = {
    'st' : "This is like passing props , you can pass anything you want ."
  }

  return (
    <>

    <Navbar />

    <Routes>

      <Route  path = '/'  element  =  {<div> I am Home Page , slash means by default </div>}/>
      <Route  path = '/contact'  element =  {<div> I am Contact Page , you are coming from Home page </div>}/>
      <Route  path = '/about'  element  =  {<div> I am About Page . Do you want to say something about me   </div>}/>
      
      <Route  path = '/blog'  element  =  {<Blog />} />
      <Route  path = '/service'  element  =  {<Service />} />
      <Route  path = '/connect'  element  =  {<Connect />} />


{/* Conditional Rendering Examples */}
    <Route  path = '/login'  element  =  {<Login />} />
    <Route  path = '/logout'  element  =  {<Logout />} />
    <Route  path = '/dashboard'  element  =  {isLogged ? <Dashboard /> : <Navigate to="/Login" replace state={data}/>} />



      <Route  path = '/post'  element  =  {<Post />} />
{/* if we write anything after URL in post then it show Error , For removing this error we use */}
      <Route  path = '/Post/:category'  element  =  {<Post />} />
      <Route  path = '/Post/:category/:id'  element  =  {<Post />} />

{/* For showing Error Page */}
<Route  path = '*'  element  =  {<h1> <strong>OOPs Sorry , Error 404 Page not Found !!</strong></h1>}/>

    </Routes> 


{/* @@@###$$$%%%^^^&&&&==>>  Creating  a  Basic  Layout  Project  using  React - Router V6  <<==@@@###$$$%%%^^^&&&&*/}


   <Routes>

{/* For creating Nested Routes , don't use Self closed tag . line no- 70 is parent , every one is child*/}
   <Route  path = '/'  element  =  {<Layout />} >

   <Route  path = 'about'  element  =  {<About />} /> 
   <Route  path = 'contact'  element  =  {<Contact />} /> 


   <Route  path = 'Feed'  element  =  {<PostLayout />} >
   <Route path = ':category'  element  =  {<PostDetail />}/>
   <Route index element  =  {<Feed />} /> 

    </Route> 


{/* index shares  with " / "  parent means In layout page we can see Home page */}
   <Route index element  =  {<Home />} /> 
   
   </Route>

   <Route  path = '*'  element  =  {<h1>Error 404 Page not Found !!</h1>} />
   </Routes>
</>

  );

}



