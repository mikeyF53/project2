import React from 'react'
import RestaurantPage from './RestaurantPage'
import Nav from './Nav';

import { Route, Link } from "react-router-dom";

const RestaurantList = (props) => {
  console.log(props.restaurant)
  return (
    <div>
      <Nav />

      <h3 className='title'>Restaurant List</h3>
      {
        props.restaurant ?
          <div className='listContainer'>
            {props.restaurant.map(data =>
              <div className='listInfo' key={data.id}>
                <h2 className='listName' >
                <img className='listImg' src={data.image_url} alt='yay pic' />
                <br/>
                  <a href={data.url} target='blank'>{data.name}</a>
                </h2>
                {data.location.display_address.map((arr, id) =>
                  <p className='listAddress' key={id}>{arr}</p>)}
                <p className='listPhone'>{data.display_phone}</p>
              </div>
            )}
          </div>
          :
          <><img className='loadingGif'></img></>
      }

    </div>
  )
}
export default RestaurantList
