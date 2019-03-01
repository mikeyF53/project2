import React from 'react'
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div>
      <h4>
        <Link className='randomLink'to='/'>Back to Random Picker</Link>
      </h4>
    </div>
  )
};
export default Nav;