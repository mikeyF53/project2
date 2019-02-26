import React from 'react'

const Homepage = (props) => {
  return(
    <div>
      <h1>What's For Lunch?</h1>
      <form onSubmit = {props.onSubmit}>
      <input type='text' placeholder='ZipCode or City' onChange={props.onChange} />
      <input type='submit' value='Submit'/>
      </form>
  
    </div>

  )

}



export default Homepage