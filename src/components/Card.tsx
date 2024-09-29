interface props {
  images: string;
}

function Card({images}:props) {
  return (
    <>
        <img className="image" src={images} alt="" /> 
    </>
  )
}

export default Card