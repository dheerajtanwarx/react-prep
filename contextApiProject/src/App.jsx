import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider.jsx'
import Profile from './components/Profile.jsx'
import Login from './components/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
  <UserContextProvider>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
