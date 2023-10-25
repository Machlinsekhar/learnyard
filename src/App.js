import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import NavBar from './components/NavBar';

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
     <NavBar isVisible={visible} /> 
      <Home/>
      
    </div>
  );
}

export default App;
