import React, { useState } from 'react'
import { useTodo } from '../context/TodoContext';

function TodoForm() {
const[todo, setTodo] = useState("") //ye wala single todo add krne ke liye

const {addTodo} = useTodo() //ye humne context store se liya 

const add = (e) =>{
    e.preventDefault()
 //agr koi todo add hi ni hua to null return
    if(!todo) return
    
    //addTodo wale function ko call kiya app.jsx me se usecontext ke through usme humne todo object pass kr diya or completed ko by default false kr diya 
    addTodo({todo, completed:false})
    setTodo("")
}


  return (
      <form onSubmit={add} className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}
              
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
