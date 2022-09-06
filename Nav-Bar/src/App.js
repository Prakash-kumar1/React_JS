// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  return (
// importing NavBar from Navbar.js
<>
  <Navbar/>
{/* passing tile in navbar*/}
  <Navbar title = "Project-1 Text-Utils" aboutText = "about Project-1" />
</>

  );
}

export default App;
