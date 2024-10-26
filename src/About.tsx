import React from 'react'
import Card from "./components/Card"
import myImage from './assets/flower head.png'
import myImage1 from './assets/GAXE.png'
import Display from './components/Display'

const About: React.FC = () => {
  return (
    <>
      <div className="homepage glass">
        <Display tit='About'>
          <p>
{/*             something */}
{/*             another something */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam, totam libero pariatur ex, ratione tempore sint deleniti, dolor illo molestiae iste! Eaque dolorum excepturi hic tempore provident similique reiciendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis saepe amet illo doloribus nostrum in ipsam ut doloremque nihil nulla, quis, accusantium nemo! Quas doloribus aut laudantium atque odit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt aliquid voluptatibus esse, inventore illo aliquam, a atque numquam ad soluta repudiandae veniam optio eius! Minus, sed. Amet, repellendus iure.
          </p>
        </Display>
        <Card images={myImage}></Card>
      </div>

      <div className="homepage1 glass">
        <Display tit='About'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam, totam libero pariatur ex, ratione tempore sint deleniti, dolor illo molestiae iste! Eaque dolorum excepturi hic tempore provident similique reiciendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis saepe amet illo doloribus nostrum in ipsam ut doloremque nihil nulla, quis, accusantium nemo! Quas doloribus aut laudantium atque odit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt aliquid voluptatibus esse, inventore illo aliquam, a atque numquam ad soluta repudiandae veniam optio eius! Minus, sed. Amet, repellendus iure.
          </p>
        </Display>
        <Card images={myImage1}></Card>
      </div>

      <div className="homepage glass">
        <Display tit='About'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam, totam libero pariatur ex, ratione tempore sint deleniti, dolor illo molestiae iste! Eaque dolorum excepturi hic tempore provident similique reiciendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis saepe amet illo doloribus nostrum in ipsam ut doloremque nihil nulla, quis, accusantium nemo! Quas doloribus aut laudantium atque odit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt aliquid voluptatibus esse, inventore illo aliquam, a atque numquam ad soluta repudiandae veniam optio eius! Minus, sed. Amet, repellendus iure.
          </p>
        </Display>
        <Card images={myImage}></Card>
      </div>

      <div className="homepage1 glass">
        <Display tit='About'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veniam, totam libero pariatur ex, ratione tempore sint deleniti, dolor illo molestiae iste! Eaque dolorum excepturi hic tempore provident similique reiciendis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis saepe amet illo doloribus nostrum in ipsam ut doloremque nihil nulla, quis, accusantium nemo! Quas doloribus aut laudantium atque odit.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis sunt aliquid voluptatibus esse, inventore illo aliquam, a atque numquam ad soluta repudiandae veniam optio eius! Minus, sed. Amet, repellendus iure.
          </p>
        </Display>
        <Card images={myImage1}></Card>
      </div>
    </>
  )
}

export default About;
