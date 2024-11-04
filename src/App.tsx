import React from 'react';
import Home from './Home';
import About from './About';
import Gallery from './Gallery';
import Nave from './components/Nave';
import Getstarted from './Getstarted';
import Footer_u from "./components/Footer_u"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/getstarted" element={<Getstarted/>}/>
            <Route path="/Gallery" element={<Gallery/>}/>
          </Routes>
        </div>
        <Footer_u/>
      </div>
    </Router>
  );
};

export default App
