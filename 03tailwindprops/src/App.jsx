import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


let myObj={
  username:"tammy",
  age:18
}
function App() {
  const [count, setCount]=useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4' >Tailwind Test</h1>
      <Card username="Selena Gomez" btntext="Click Me"/>

      <Card username='Kylie Jenner' btntext="visit me"/>

    </>
  )
}

export default App
