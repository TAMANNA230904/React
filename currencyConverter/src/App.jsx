import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-3xl bg-orange-500'>Currency Converter</h1>
    </>
  )
}

export default App
