
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { useState } from 'react';
import "./index.css";
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <> 
     {!isLoaded && <LoadingScreen onComplete={()=> setIsLoaded(true)}/>} {" "}
  <div className={`min-h-screen transition-opacity duration-100 ${isLoaded ? "opacity-100" : "opacity-0"}text-gray-100`}>

       

        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>

        <Home/>
        <About/>
        <Experience/>
       
      </div>
      </>
       
  )
}

export default App
