import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Nave from './components/Nave';
import Footer_u from "./components/Footer_u"

const App: React.FC = () => {
  return (
    <Router>
      <div id="header">
          <h1 id="logo">Design Gallery</h1>
          <Nave></Nave>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer_u />
    </Router>
  );
};

export default App
