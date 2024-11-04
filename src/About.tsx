import React from 'react'
import Card from "./components/Card"
import myImage from './assets/flower head.png'
import myImage1 from './assets/GAXE.png'
import myImage2 from './assets/o_p1.png'
import myImage3 from './assets/taplet.png'
import Display from './components/Display'

const About: React.FC = () => {
  return (
    <>
      <div className="homepage glass">
        <Display tit='About'>
          <p>
          Welcome to our space for designers! This site is crafted to inspire graphic designers, whether you're just starting out or have years of experience. Here, we provide fresh ideas, practical tips, and resources to fuel your creativity. Our mission is to give designers the spark they need to take their work to the next level while offering a place where they can always return for new perspectives.
            <br />
            <br />
            We aim to make design accessible and enjoyable, no matter where you are in your journey. With a mix of tutorials, articles, and showcases, this site is here to support your creative process and bring your ideas to life. Let’s explore, learn, and create together
          </p>
        </Display>
        <Card images={myImage}></Card>
      </div>

      <div className="homepage1 glass">
        <Display tit='Inspiration'>
          <p>
          Stuck in a creative rut? Our Inspiration section is here to help! Explore a collection of ideas, styles, and trends to jumpstart your imagination. We showcase everything from minimal designs to bold statements, ensuring there’s something to spark every type of creativity. Dive in and discover the inspiration you need to bring your next project to life
            <br />
            <br />
            We regularly update this section with fresh content, so there's always something new to discover. Whether it's a trending style, a seasonal theme, or a timeless classic, we’re here to keep you inspired and motivated
          </p>
        </Display>
        <Card images={myImage2}></Card>
      </div>

      <div className="homepage glass">
        <Display tit='Networking'>
          <p>
          Every designer needs a supportive community, and that’s what our Network section is all about. Here, you can connect with other designers, share ideas, get feedback, and grow together. Whether you're looking for collaborations, advice, or just want to chat with fellow creatives, this is your space to build lasting connections
            <br />
            <br />
            Networking isn't just about meeting people; it's about building a supportive group that challenges you, helps you grow, and celebrates your wins. In this community, you'll find designers of all levels who are just as passionate about their craft as you are.
          </p>
        </Display>
        <Card images={myImage1}></Card>
      </div>

      <div className="homepage1 glass">
        <Display tit='Calibrate'>
          <p>
          We believe in celebrating every achievement, big or small. In our Celebrate section, we highlight design wins and accomplishments from our community members. Share your latest projects, be proud of your journey, and let others cheer you on! Let’s uplift each other and celebrate the progress we’re all making
            <br />
            <br />
            We encourage you to showcase your work, share your story, and celebrate the creative milestones that mark your journey. Our Celebrate section is here to remind everyone that each step forward is worth recognition. Let’s make success a shared experience!
          </p>
        </Display>
        <Card images={myImage3}></Card>
      </div>
    </>
  )
}

export default About;
