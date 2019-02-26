import React from 'react'
import { Route, Link } from "react-router-dom";

const RestaurantPage = (props) => {
  // console.log(props.randRest)
  return (
    <div>
      <Link to='/'>Back to Home</Link>
      <h2>Random Pick For You</h2>
      {
        props.randRest ?
          <div>
            <h2>{props.randRest.name}</h2>
            {props.randRest.location.display_address.map((arr, id) => <p key={id}>{arr}</p>)}
            <p>{props.randRest.phone}</p>
            <img src={props.randRest.image_url} alt='yay pic'/>
          </div>
          :
          <></>
      }
    </div>
  )
}
export default RestaurantPage;