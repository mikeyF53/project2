import React from 'react'
import RestaurantPage from './RestaurantPage'

import { Route, Link } from "react-router-dom";

const RestaurantList = (props) => {
  console.log(props)
  return (
    <div>
      <Link to='/'>Back to Random Picker</Link>
      <h4>
      </h4>
      <h3>Restaurant List</h3>
      {
        props.restaurant ?
          <div>
            {props.restaurant.map((data, id) =>
              <div id={data.id}>
                <p className='name' key={id}>{data.name}</p>
                {data.location.display_address.map((arr, id) =>
                  <p key={id}>{arr}</p>)}
                <p>{data.phone}</p>
                <img src={data.image_url} alt='yay pic' />
                <p></p>
              </div>
            )}
          </div>
          :
          <>LOADING GIF..</>
      }
     
    </div>
  )
}
export default RestaurantList
