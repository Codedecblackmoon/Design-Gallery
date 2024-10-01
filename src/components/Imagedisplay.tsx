
interface props{
  image: string
}

function Imagedisplay({image}:props) {
  return (
    <div>
        <img className="image_g" src={image} alt="" />
    </div>
  )
}

export default Imagedisplay