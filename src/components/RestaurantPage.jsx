import React from 'react'


const RestaurantPage = (props) => {
  console.log(props)
  return (
    <div>
      <h2>Random Pick For You</h2>
      {
        props.randRest ?
          <div>
            <h2>{props.randRest.name}</h2>
            {props.randRest.location.display_address.map((arr, id) => <h2 key={id}>{arr}</h2>)}
            <h2>{props.randRest.phone}</h2>
          </div>
          :
          <></>
      }
    </div>
  )
}
export default RestaurantPage;