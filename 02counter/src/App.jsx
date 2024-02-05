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
    setCounter(counter+1)//16

    /* Understanding Working of Fibre as batches.
    For updating counter 4 times expected is 20 but as 
    fibre works in batches it will do updation only 1 time for repeated
    statements OUTPUT counter=17 */
   
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)


    /*Handling this setCounter is a callback fxn*/
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1)
    // setCounter((prevCounter)=>prevCounter+1) OUTPUT-->20
    }
  }
  // const decreasevalue=()=>{
  //   if(counter>0){
  //   console.log('clicked',counter);
  //   setCounter(counter-1)
  //   }
  //}

  return (
    <>
     <h1>React Project</h1> 
     <h2>Counter Value:{counter}</h2>
     <button
     onClick={addvalue}>Increment</button>
     {/* <button
     onClick={decreasevalue}>Decrement</button> */}
    </>
  )
}

export default App
