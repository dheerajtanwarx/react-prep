import { useEffect } from 'react'
import { useCallback, useRef } from 'react'
import { useState } from 'react'



function App() {

 // Agar useState use na karte?•	UI update hi nahi hoti.•	Value change hogi par screen pe reflect nahi hogi.
   const [length, setLength] = useState(8)
   const [numberAllowed, setNumberAllowed] = useState(false)
   const [charAllowed, setCharAllowed] = useState(false)
   const [password, setPassword] = useState("")

   //useRef hook ❓ useRef na hota to? Copy karne se pehle text select nahi kar pate. copy to ho jata lekin wo blueline jse usi pr dikhe jo select ho uske liye 

   const passwordRef = useRef(null)

   // useCallback na hota to? Function har render me recreate hota. Performance thodi slow hoti.
   const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random()* str.length + 1)
       pass += str.charAt(char)

    }

    setPassword(pass)
   }, [length, numberAllowed, charAllowed, setPassword]) //dependency array => In values ke change hone par  hi function recreate hoga.


   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select(); //kisko select krna hai
    passwordRef.current?.setSelectionRange(0, 101) //kitne char select kr skte h
    window.navigator.clipboard.writeText(password) //sirf password ko select kro copy kro clipboard me 
    
   })

 
  // useEffect na hota to? Password tabhi generate hota jab manually function call karte.
  useEffect(()=>{
    passwordGenerator()
  },[length, numberAllowed, charAllowed, passwordGenerator]) 
//   Jab bhi:
// 	•	length change,
// 	•	numbers toggle,
// 	•	characters toggle,
// password automatically regenerate hota hai.

  console.log("pass", password)
  return (
  <>
  <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly //Password show hota hai, edit nahi kar sakte.
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
    
   
  </>
  )
}

export default App
