import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 
function App() {

  //use state hum ui pr value ko populate krne ke liye use krte hai iske bina bhi code chl rha tha lekin ui pr update ni ho rha tha  
  let [counter, setCounter] = useState(10)

  const increaseCount = ()=>{
    if(counter>=20){
      return
    }
    counter+=1
    setCounter(counter)
    console.log("Counter value", counter)
  }
  const removeValue = ()=>{

    if(counter <= 0){
      return
    }
    counter-=1
    setCounter(counter)
    
    console.log("counter value", counter)
  }
  return (
   <>
   <h1>Hello Dheeraj</h1>
   <h3>counter value : {counter}</h3>

   <button onClick={increaseCount}>Add</button>
   <br />
   <button onClick={removeValue}>Remove</button>
   </>
  )
}

export default App
