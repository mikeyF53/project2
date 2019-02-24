import React from 'react'

const Homepage = (props) => {
  return(
    <div>
      <form onSubmit = {props.onSubmit}>
      <input type='text' placeholder='zipcode' onChange={props.onChange} />
      <input type='submit' value='Submit'/>
      </form>
      <h1>Homepage</h1>
    </div>

  )

}



export default Homepage