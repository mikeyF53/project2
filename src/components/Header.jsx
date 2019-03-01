import React from 'react'

const Header = (props) => {
  return(
    <div>
      <div className='headerBox'>
        <div>
        <img className='headerImg' src={window.location.origin + '/media/food1.png'}></img>
        </div>
      <h1 className='headTitle'>What's For Lunch?</h1>
      </div>
    </div>
  )
};
export default Header