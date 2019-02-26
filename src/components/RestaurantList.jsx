import React from 'react'
import RestaurantPage from './RestaurantPage'
import { Route, Link } from "react-router-dom";

const RestaurantList = (props) => {
  // console.log(props.restaurant)
  return (
    <div>
      <h4>
      <Link to='/'>Back to Home</Link>
      </h4>
      <h3>Restaurant List</h3>
      {
        props.restaurant ?
          <div>
            {props.restaurant.map((data, id) =>
              <p key={id}>{data.name}</p>
            )}
          </div>
          :
          <></>
      }
    </div>

  )

}



export default RestaurantList