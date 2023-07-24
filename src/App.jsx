import React from 'react';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/Home.jsx';
import Floater from './Components/Floater/Floater.jsx';
import BitSaudi from './Components/Solutions/BitSaudi.jsx';
import BitWallet from './Components/Solutions/BitWallet.jsx';
import Gaming from './Components/Solutions/Gaming/Gaming.jsx';
import IT_Services from './Components/Solutions/IT_Services/IT_Services.jsx';
import About from './Components/About/About.jsx';
import Team from './Components/Team/Team.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx';
import { Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
      <div className="overlay"></div>
      <Navbar />
      <Home />
      <Floater />
      <About />
      <BitSaudi />
      <BitWallet />
      <Gaming />
      <IT_Services />
      <Team />
      <Contact />
      <Footer />

      {/* <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  )
}

export default App
