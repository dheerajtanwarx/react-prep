import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Home2 from './components/Home2.jsx'
import Home4 from './components/Home4.jsx'
import { BioProvider } from './hooks/ContextApi/index.jsx'

function App() {


  return (
  <>
  <BioProvider>
  <Home />

  </BioProvider>
  {/*example of propdrilling go and check all files home 2 home 3 home4 */}
  <Home2 myname="dheeraj"/>
  </>
  )
}

export default App
