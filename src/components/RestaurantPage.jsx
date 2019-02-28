import React from 'react'
import { Route, Link } from "react-router-dom";
import RestaurantList from './RestaurantList';

const RestaurantPage = (props) => {
  // console.log(props)
  return (
    <div>
      <h3>Random Pick For You</h3>
      {
        props.randRest ?
          <div>

            <h2 className='randName'>
              <a href={props.url}>{props.randRest.name}</a>
            </h2>
            <img className='randImg' src={props.randRest.image_url} alt='yay pic' />
            {props.randRest.location.display_address.map((arr, id) =>
              <p className='randAddress' key={id}>{arr}</p>)}
            <p className='randPhone'>{props.randRest.display_phone}</p>

          </div>
          :
          <><img className='loadingGif' /></>
      }
      <br />
      <div>If you dont like it here's a</div>
      <br />
      <Link to="/components/RestaurantList">List of Restaurants</Link>
    </div>
  )
}
export default RestaurantPage;