
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
// importing NavBar from Navbar.js
<>
  <Navbar/>
{/* passing tile in navbar*/}
  <Navbar title = "Project-1 Text-Utils" aboutText = "about Project-1" />

{/* textForm taking whole width , not look good. for solving this , we use a bootstrap class which is Container and putting textForm in a div (try without div , then know the difference) */}

<div className="container">
{/* passing heading as a Properties */}
  <TextForm heading="Enter your text to analyze below" />
  </div>

</>

  );
}

export default App;
