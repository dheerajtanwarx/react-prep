import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
   <div className='w-screen h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 'style={{backgroundColor:"white"}}>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-blue px-3 py-2 rounded-3xl text-white'>
          <button className='outline-none px-4 'style={{backgroundColor:"black"}} onClick={()=>setColor("black")}>Black</button>
          <button className='outline-none px-4 'style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className='outline-none px-4 'style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
          <button className='outline-none px-4 'style={{backgroundColor:"yellow"}} onClick={()=>(setColor("yellow"))}>yellow</button>
          //yaha par hum onClick me direct ase ni kr skte jse X onClick(setColor("red")) X ye glt hai kyuki onClick ko function chahiye hota hai lekin yaha to hum direct hi function execute kr rhe h isliye hum usme ek arrow  function lagate h or phir uske andr setColor ko call krte hai 
        
          
        </div>
      </div>
   </div>
  )
}

export default App
