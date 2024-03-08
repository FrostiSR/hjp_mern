import React from 'react';
import { useLocation } from "react-router-dom";
import './App.css';
import NavBarTop from './NavbarTop'
import NavBar from './Navbar';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Home';
import OurTeam from './OurTeam';
import News from './News'
import Events from './Events'
import AboutUs from './AboutUs';
import Contact from './Contact';
import Footer from './Footer';
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
   
      <div className="App">
          <NavBarTop />
          <NavBar />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path='/' element={<Home />} />
              <Route path='/our-team' element={<OurTeam />} />
              <Route path='/news' element={<News />} />
              <Route path='/events' element={<Events />} />
              <Route path='/about' element={<AboutUs />} />
              <Route path='/contact' element={<Contact />} />
            </Routes>
          </AnimatePresence> 
          <Footer />
          
      </div>
  );
}

export default App;
