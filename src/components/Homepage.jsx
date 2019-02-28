import React from 'react'
import { Route, Link } from "react-router-dom";

import Header from './Header';

const Homepage = (props) => {
  return (
    <div>
      <Header />
      <form onSubmit={props.onSubmit}>
        <input type='text' placeholder='ZipCode or City' onChange={props.onChange} />
        <input type='submit' value='Submit' />
      </form>
      
    </div>

  )

}



export default Homepage