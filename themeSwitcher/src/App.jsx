
import { useCallback } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useContext } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
const [themeMode, setThemeMode] = useState("light")

//ye dono function wo hai jo humne by default diye the theme.js me unki functionality hum yaha define kr rhe h same naam hone ki wjh se ye auto link ho jaye ge unn function se 
const lightTheme = ()=>{
  setThemeMode("light")
}
const darkTheme = () =>{
  setThemeMode("dark")
}

//actual logic for change in theme by using js
useEffect(()=>{
  document.querySelector('html').classList.remove("light", "dark") //iska mtlb hai html me phle se jo bhi value set hai usko remove krdo 
  document.querySelector('html').classList.add(themeMode) //or ab phle wali values ko remove krke jo bhi value theme mode me set hai usko add krdo
},[themeMode]) //jaise hi thememode change ho useEffect run ho jaye

  return (
    // ab inn sb value ka access hume mil gya hai inko hum ab kisi bhi component me use kr skte h
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}> 

<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>

 </ThemeProvider>
  )
}

export default App
