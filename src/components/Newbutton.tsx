
import { NavLink } from 'react-router-dom';

function NewButton() {
  return (
    <button type="button"  className="btn">
      <NavLink className="active-link a"  to="/getstarted">Get Started</NavLink>
    </button>
  );
};


export default NewButton;
  