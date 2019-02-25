import React from 'react'

const RestaurantPage = (props) => {
  console.log(props.randRest)




  return (

    <div>
      <h2>Random Pick For You</h2>
      
      {
        props.randRest ?
          <div>
            <h2>{props.randRest.name}</h2>
            {props.randRest.location.display_address.map(arr => <p>{arr}</p>)}
            <h2>{props.randRest.phone}</h2>

          </div>
          :
          <></>
      }

      <h3></h3>

    </div>

  )


}

export default RestaurantPage;