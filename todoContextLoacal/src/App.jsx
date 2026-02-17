
import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm.jsx'
import TodoItem from './components/TodoItem.jsx'


function App() {
 
  const[todos, setTodo] =  useState([])

  const addTodo = (todo) =>{
   setTodo((prev)=>[{id: Date.now(), ...todo}, ...prev]) //humne naya todo add krne ke liye phle prev todo liye unko spread kr diya phir ek object add kiya jisme ek id li jo ki unique honi chahiye uske liye hum date.now ka use kr rhe h or jo baki ki 2 propert hai unko bhi spread kr diya or ye ek single property bnn gyi 
  }

  const updateTodo = (id, todo) => {
    setTodo((prev)=> prev.map((prevTodo)=>(prevTodo.id === id ? todo : prevTodo))) //map ka mtlb h wo wala todo update kro jis ki id current id ke sath match ho rhi ho uski jgh new todo dal do agr todo updated ni aaya to purane wale ko hi as it is rakh do
  }

  const deleteTodo = (id) => {
    setTodo((prev)=>prev.filter((todo)=>todo.id !== id)) //filter ka matlab hai wo sbhi todo de do jinki id is current id se match ni karti agr match ho gyi to wo mt do
  }

  const toggleComplete = (id) => {
     setTodo((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))) //iska matlb hai map lagao har value ko check kro agr value id ke equal hai to uss todo object ko uthao sabhi values ko spread krdo or usme se sirf completed ko invert krdo or agr id se match ni kr rha to uss todo ko as it is rhne do
  }

//ye wala use effect to hai ki hum jab bhi page ko reload kre tb localstorage se data uhthaya jaye agr data hai to usko setTodo me dubara set kr diya jaye 
  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodo(todos)
    }
  },[])

  //ye wala useeffect hai jab bhi todos ki value change ho yani ki hum jab bhi koi new todo add kre tb todos nam ki key me todos nam ki value ko store krdo hume setItem me string value deni pdti h 
  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
     <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                         <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                         {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
