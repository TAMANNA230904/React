import { useState,useCallback,useEffect,useRef } from 'react'



//useCallback is a React Hook that lets you cache a function definition between re-renders.
function App() {
  const [length, setlength] = useState(8)
  const [number ,Setnumber]=useState(false)
  const [character,Setcharacter]=useState(false)
  const [password,Setpassword]=useState("")

  const passwordRef = useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str+="0123456789"
    if(character) str+="!@#$%^&*"

    for (let i=1; i<=length;i++) {
     let index=Math.floor(Math.random()*str.length+1)
     pass+=str.charAt(index)
    }

    Setpassword(pass)

  },[length,number,character,Setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

   useEffect(() => {
    passwordGenerator()
  }, [length, number, character, passwordGenerator])
  return (
    
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 '>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text' value={password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly
      ref={passwordRef}></input>
      <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
     </div>
     <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              Setnumber((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={character}
              id="characterInput"
              onChange={() => {
                  Setcharacter((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
    </div>
   
  )
}

export default App
