import React, { useContext } from 'react'
import { BioContext } from '../hooks/ContextApi'

const Home = () => {

    //ab hume wo context values ko use krne ke liye useContext hook ka use krna pdta hai or usko usi same naam ke variable me store krna best practice hota  h or use context me apne context ka reference dena pdta hai 
const {name, myage} = useContext(BioContext)

  return (
    <div>
      <h1>Hello sir . My name is {name} and i am {myage} years old.</h1>
    </div>
  )
}

export default Home
