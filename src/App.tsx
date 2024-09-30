import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Getstarted from './Getstarted';
import Nave from './components/Nave';
import Footer_u from "./components/Footer_u"

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="content">
          <div id="header">
            <h1 id="logo">Design Gallery</h1>
            <Nave></Nave>
          </div>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/getstarted" element={<  Getstarted />} />
          </Routes>
        </div>
        <Footer_u />
      </div>
    </Router>
      
      
  );
};

export default App
