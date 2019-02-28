import React from 'react'
import { Route, Link } from "react-router-dom";

import Header from './Header';

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <form onSubmit={props.onSubmit}>
        <input className='inputBox' type='text' placeholder='Zip Code or City' onChange={props.onChange} />
        <br/>
        <input className='button' type='submit' value='Submit' />
      </form>
      
    </div>

  )

}



export default Homepage