import React from 'react'
import { Route, Link } from "react-router-dom";
import RestaurantPage from './RestaurantPage';


const Homepage = (props) => {
  return (
    <div>
      <h1>What's For Lunch?</h1>
      <form action="google.com" target='self' method='post' onSubmit={props.onSubmit}>
        <input type='text' placeholder='ZipCode or City' onChange={props.onChange} />
        <input type='submit' value='Submit' />
      </form>
    </div>

  )

}



export default Homepage