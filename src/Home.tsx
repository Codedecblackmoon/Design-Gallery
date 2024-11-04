import React from 'react'
import Intro from "./components/Intro"
import Card from "./components/Card"
import myImage from './assets/uuu.png'

const Home: React.FC = () => {
  return (
    <>
      <div className="homepage glass">
        <Intro tit='Why Us'>
          <p>
          Hello! I’d like to introduce you to <strong>Design Gallery</strong>, an incredible platform designed specifically for graphic designers to showcase their work and draw inspiration from others. With <strong>Design Gallery</strong>, you can easily upload your projects, share your creative process.
          <br/>
          <br/>
          Not only can you gain visibility for your designs, but you can also find fresh ideas and techniques from peers around the world. Whether you’re seeking feedback or simply looking to inspire others, <strong>Design Gallery</strong> is the perfect space to elevate your creative journey.
          </p>
        </Intro>
        <Card images={myImage}></Card>
      </div>
    </>
  )
}

export default Home