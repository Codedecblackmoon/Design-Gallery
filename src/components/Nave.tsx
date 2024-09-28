
import React from 'react';
import { Link } from 'react-router-dom';

const Nave: React.FC = () => {
  return (
    <>
        <nav id="navbar">
            <ul>
              <li><Link id="a" to="/">Home</Link></li>
              <li><Link id="a" to="/about">About</Link></li>
              <li><Link id="a" to="/">Get Started</Link></li>
              <li><Link id="a" to="/">Gallery</Link></li>
              {/* <link rel="stylesheet" href="" />
                <li><a to="/" href="#Home">Home</a></li> */}
                {/* <li><a href="#Abou">About</a></li>
                <li><a href="#Get Started">Get Started</a></li>
                <li><a href="#Info">Info</a></li> */}
            </ul>
            
        </nav>
    </>
  )
}

export default Nave