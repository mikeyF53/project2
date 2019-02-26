import React from 'react'
import RestaurantPage from './RestaurantPage'
import { Route, Link } from "react-router-dom";


const RestaurantList = (props) => {
  console.log(props)
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
              <div>
                <p className='name' key={id}>{data.name}</p>
                {data.location.display_address.map((arr, id) =>
                <p key={id}>{arr}</p>)}
                <p>{data.phone}</p>
                <img src={data.image_url} alt='yay pic'/>
                <p>{data.id}</p>
                <p>4</p>
              </div>
            )}
          </div>
          :
          <></>
      }
    </div>

  )

}



export default RestaurantList