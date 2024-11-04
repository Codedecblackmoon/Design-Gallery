
interface props{
  image: string
}

function Imagedisplay({image}:props) {
  return (
    <div className="gallery">
        <img width="600" height="400" className="image_g" src={image} alt="" />
    </div>
  )
}

export default Imagedisplay