

import Imagedisplay from "./components/Imagedisplay";
import image_1 from "./assets/Gallery/20240725_215740.jpg"
import image_2 from "./assets/Gallery/20240725_215802.jpg"
import image_3 from "./assets/Gallery/20240725_215822.jpg"
import image_4 from "./assets/Gallery/20240725_215849.jpg"
import image_5 from "./assets/Gallery/20240725_220024.jpg"
import image_6 from "./assets/Gallery/C2.png"
import image_7 from "./assets/Gallery/CM.png"
import image_8 from "./assets/Gallery/ISLAND.png"
import image_9 from "./assets/Gallery/ROME.png"
// import image_10 from "./assets/Gallery/d2.png"
// import image_11 from "./assets/Gallery/dpng.png"
// import image_12 from "./assets/Gallery/google meet.png"
// import image_13 from "./assets/Gallery/room.png"

function Gallery() {
  return (
    <div className="glass_g">
      <h1 className="int">Gallery</h1>
      <div id="st">
        <div id="row1">
          <Imagedisplay image={image_1}></Imagedisplay>
        <Imagedisplay image={image_2}></Imagedisplay>
        <Imagedisplay image={image_3}></Imagedisplay>
        </div>
        <div id="row2">
        <Imagedisplay image={image_4}></Imagedisplay>
        <Imagedisplay image={image_5}></Imagedisplay>
        <Imagedisplay image={image_6}></Imagedisplay>
        </div>
        <div id="row3">
          <Imagedisplay image={image_7}></Imagedisplay>
          <Imagedisplay image={image_8}></Imagedisplay>
          <Imagedisplay image={image_9}></Imagedisplay>
        </div>
      </div>
     

    </div>
  );
}

export default Gallery;
