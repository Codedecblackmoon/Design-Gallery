
// import PropTypes from 'prop-types'

interface props{
    great: string
}

function Greating({great}:props) {
  return (
    <div>{great}</div>
  )
}


export default Greating
