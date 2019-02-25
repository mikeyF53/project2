import React from 'react'

const RestaurantList = (props) => {
  return(

    <div>
      <h3>Restaurant List </h3>
      {props.restaurant.map((rest, id) =>
      <p key={id}>{rest.name}</p>

      )}
    </div>

  )

}



export default RestaurantList