
import React from 'react';
import { NavLink } from 'react-router-dom';

const Nave: React.FC = () => {
  return (
    <>
        <nav id="navbar">
            <ul>
              <li><NavLink   to="/home" className="active-link a"  >Home</NavLink></li>
              <li><NavLink className="active-link a" to="/about">About</NavLink></li>
              <li><NavLink className="active-link a" to="/getstarted">Get Started</NavLink></li>
              <li><NavLink className="active-link a" to="/">Gallery</NavLink></li>
            </ul>
        </nav>
    </>
  )
}

export default Nave