import { useState } from 'react'
import './App.css'

function App() {

  let [counter,setCounter] = useState(5)
  
  // let counter = 5

  const addValue = () =>{
    // counter = counter + 1
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1)

    setCounter((prevCounter) =>  prevCounter + 1)
    setCounter((prevCounter) =>  prevCounter + 1)
    setCounter((prevCounter) =>  prevCounter + 1)
    setCounter((prevCounter) =>  prevCounter + 1)
  }
  const removeValue = () => {
    // counter = counter - 1
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >add value</button>
      <br />
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
