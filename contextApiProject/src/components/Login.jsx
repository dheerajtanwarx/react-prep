import React, { useContext } from 'react'
import { useState } from 'react'
import userContext from '../context/UserContext'

const Login = () => {
const[username, setUsername] = useState('')
const[password, setPassword] = useState('')
  
const {setUser} = useContext(userContext)

    const handleSubmit = (e) =>{
      e.preventDefault()
      setUser({username, password}) //ye setuser hum contextprovider se access kr paa rhe hai ab setuser me ye wali values pass kr di ab ye values user me store ho jaye or humare pas user create ho jaye ga ab iska fayda hume ye mila ki hum iss user ki value ko profile component me bhi access kr skte h agr ye na hota to props pass krne pdte 
    }
  return (
    <div>
      <h1>Login</h1>
      <input 
      type="text"
      placeholder='username'
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
       />
       <br />
      <input 
      type="text"
      placeholder='password'
      value={password}
      onChange={(e)=>setPassword(e.target.value)}
       />
       <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
