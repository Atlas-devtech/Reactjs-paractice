import { useState } from 'react'
import './App.css'
import Cards from './components/cards/cards'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: "marsad",
    age : 24
  }
  let newArr = [1,2,3]
  return (
    <>
    <h1 className='bg-emerald-500 rounded-xl text-black p-4 mb-4'>tailwindcss test</h1>
    <Cards userName="marsad" someObj={myObj} someObj2={newArr} btnText="click me" />
    <Cards userName="marsad usman" btnText="visit me"/>
    </>
  )
}

export default App
