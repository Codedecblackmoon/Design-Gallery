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
          Hello! I’d like to introduce you to Design Gallery, a fantastic
          platform tailored for graphic designers. It offers a streamlined way
          to organize and manage your design assets, allowing you to save your
          images, typography, templates in one convenient location. No more
          wasting time sifting through folders! With smart tagging and
          categorization, you can find what you need in an instant, boosting
          your productivity.
          <br/>
          <br/>
          But that’s not all! Design Gallery also enhances collaboration within
          teams. Its easy sharing features let you present your work to clients
          or colleagues and receive realtime feedback. Plus, sharing assets
          across projects ensures consistency in your designs. Using Design
          Gallery can truly elevate your workflow and help you create stunning
          designs more efficiently!
          </p>
        </Intro>
        <Card images={myImage}></Card>
      </div>
    </>
  )
}

export default Home