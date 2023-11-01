import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Centers from './components/Centers';
import Photos from './components/Photos';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, visible]);
  return (

    <div className="App">
      <Router>
        <NavBar isVisible={visible} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />/
          <Route path="/centers" element={<Centers />} />
          <Route path="/photos" element={<Photos />} />
           {/*<Route path="/" element={<Events />} />
          <Route path="/" element={<Social />} />
          <Route path="/" element={<ContactUs />} /> */}
          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
