import React from 'react'

const RestaurantPage = (props) => {
  
  console.log(props.randRest);
  

  return(
  
    <div>
      <h2>Random Restaurant</h2>
      <h3> {props.randRest.name}</h3>
    </div>

  )

}



export default RestaurantPage