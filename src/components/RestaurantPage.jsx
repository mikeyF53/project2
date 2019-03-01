import React from 'react'
import { Link } from "react-router-dom"

const RestaurantPage = (props) => {
  console.log(props.randRest)
  return (
    <div>
      <h3>Random Pick For You</h3>
      {
        props.randRest ?
          <div className='randContainer'>

            <h2 className='randName'>
              <a className='randTitle' href={props.randRest.url} target='blank'>{props.randRest.name}</a>
            </h2>
            <img className='randImg' src={props.randRest.image_url} alt='yay pic' />
            {props.randRest.location.display_address.map((arr, id) =>
              <p className='randAddress' key={id}>{arr}</p>)}
            <p className='randPhone'>{props.randRest.display_phone}</p>
          </div>
          :
          <><img className='loadingGif' src={window.location.origin + '/media/loading.gif'} alt='yay' /></>
      }
      <br />
      <div>If you dont like it here's a</div>
      <br />
      <Link className='randomLink' to="/components/RestaurantList">List of Restaurants</Link>
    </div>
  )
};
export default RestaurantPage;

