import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //propogating changes in variable to UI---hooks ->useState
  let [counter, setCounter]=useState(15)
  //let counter=15
  const addvalue=()=>{
    if(counter<20){
    console.log('clicked',counter);
    setCounter(counter+1)
    }
  }
  const decreasevalue=()=>{
    if(counter>0){
    console.log('clicked',counter);
    setCounter(counter-1)
    }
  }

  return (
    <>
     <h1>React Project</h1> 
     <h2>Counter Value:{counter}</h2>
     <button
     onClick={addvalue}>Increment</button>
     <button
     onClick={decreasevalue}>Decrement</button>
    </>
  )
}

export default App
