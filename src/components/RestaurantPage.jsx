import React from 'react'
import { Route, Link } from "react-router-dom";
import RestaurantList from './RestaurantList';

const RestaurantPage = (props) => {
  // console.log(props)
  return (
    <div>
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
          <>LOADING GIF</>
      }
       <br />
      If you dont like it here's a<br />
      <Link to="/components/RestaurantList">List of Restaurants</Link>
    </div>
  )
}
export default RestaurantPage;