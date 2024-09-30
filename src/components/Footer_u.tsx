import myImage1 from "../assets/download (1).png";
import myImage3 from "../assets/LinkedIn-T-Image.png";
import myImage4 from "../assets/github-icon-white-2.png";

function footer() {
  return (
    <>
      <footer className="footer">
        <div id="media">
          <a href="https://www.instagram.com/gideon.l2">
            <img id="media_image" src={myImage1} alt="" />
          </a>
          <a href="https://www.linkedin.com/in/gideon-lenge">
            <img id="media_image" src={myImage3} alt="" />
          </a>
          <a href="https://github.com/Codedecblackmoon">
            <img id="media_image" src={myImage4} alt="" />
          </a>
          
        </div>
        <div id="content">
          <h6 id="email">gideonlenge96@gmail.com</h6>
          <h6 id="tel">+27 815 - 892 - 060</h6>
        </div>
      </footer>
    </>
  );
}

export default footer;
