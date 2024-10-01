import React from 'react';
import Imagedisplay from './components/Imagedisplay';

// Create a function to load images dynamically
function importAll(r:string) {
  let images = {};
  r.keys().forEach((item) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Import all images from the Gallery folder
const images = importAll(require.context('./assets/Gallery', false, /\.(png|jpe?g|svg)$/));

function Gallery() {
  return (
    <div>
      {Object.keys(images).map((imageName) => (
        <Imagedisplay key={imageName} image={images[imageName]} />
      ))}
    </div>
  );
}

export default Gallery;
