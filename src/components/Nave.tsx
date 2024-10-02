
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nave: React.FC = () => {
  return (
    <>
        <nav id="navbar">
            <ul>
              <li><NavLink className="a" to="/" >Home</NavLink></li>
              <li><NavLink className="a" to="/about">About</NavLink></li>
              <li><NavLink className="a" to="/getstarted">Get Started</NavLink></li>
              <li><NavLink className="a" to="/Gallery">Gallery</NavLink></li>
            </ul> 
{/*           jkl;\'''' */}
        </nav>
    </>
  )
}

export default Nave
