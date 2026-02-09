
import './App.css'
import Card1 from './Components/Card'
function App() {
  
  let myObj = {
    name:"Dheeraj",
    age:"21"
  }

  return (
   <>
    <h1 className="text-3xl font-bold underline bg-amber-300">
    Hello world!
  </h1>

  <Card1 username="dheeraj"  btnText="click me"/>
  <Card1 username="dheeraj"  btnText="learn more"/>
   </>
  )
}

export default App
