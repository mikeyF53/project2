import React from 'react'
import { Route, Link } from "react-router-dom";

import Header from './Header';

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <form className='formBox' onSubmit={props.onSubmit}>
        <input className='inputBox' type='text' placeholder='Zip Code or City' onChange={props.onChange} />
        <br/>
        <input className='button' type='submit' value='Submit' />
        {/* <div className='thinkingDot'></div> */}
      </form>
      
    </div>

  )

}



export default Homepage