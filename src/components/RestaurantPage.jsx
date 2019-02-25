import React from 'react'

const RestaurantPage = (props) => {
  // console.log(props.randRest)
  // console.log(props.randAddress.display_address)
  


  return (

    <div>
      <h2>Random Pick For You</h2>
      
      <h2>{props.randRest.name}</h2>
      <h3>{props.randAddress}</h3>
      <h3>{props.randRest.phone}</h3>
      
    </div>

  )


}

export default RestaurantPage;