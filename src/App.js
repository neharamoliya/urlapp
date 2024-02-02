import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Home';
import About from "./About"
import Contact from "./Contact"
import Collection from './Collection';
import Blog from './Blog';


function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="collection" element={ <Collection/> } />
        <Route path="Blog" element={ <Blog/> } />
      </Routes>

    
    </>
  );
}

export default App;
