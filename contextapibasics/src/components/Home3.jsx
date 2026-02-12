import React from 'react'
import Home4 from './Home4'
const Home3 = (props) => {
  return (
    <div>
      this is home 3 inside the home 2
      <Home4 myname={props.myname}/>
    </div>
  )
}

export default Home3
