import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Services from './Components/Services/Services.jsx';
import About from './Components/About/About.jsx';
import Team from './Components/Team/Team.jsx';
import Pricing from './Components/Pricing/Pricing.jsx';
import Contact from './Components/Contact/Contact.jsx';
// import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Team />
      {/* <Pricing /> */}
      <Contact />
    </>
  )
}

export default App
