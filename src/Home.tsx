import React from 'react'
import Intro from "./components/Intro"
import Card from "./components/Card"

const Home: React.FC = () => {
  return (
    <>
      <div className="homepage glass">
        <Intro></Intro>
        <Card></Card>
      </div>
    </>
  )
}

export default Home