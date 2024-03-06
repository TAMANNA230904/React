import { useEffect, useState } from 'react'
import { ThemeProvider } from './Context/theme'
import ThemeBtn from './components/ThemeBtn';
import Card from './components/Card';
import './App.css'

function App() {
 const [thememode, setThemeMode]=useState("Light");
 const LightTheme=()=>{
  setThemeMode("Light")
 }

 const darkTheme=()=>{
  setThemeMode("dark")
 }
 //actual change in theme
 useEffect(()=>{
  document.querySelector('html').classList.remove("Light","dark");
  document.querySelector('html').classList.add(thememode)
 },[thememode])

  return (
    <ThemeProvider value={{thememode,darkTheme,LightTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn/>
        </div>
 
        <div className="w-full max-w-sm mx-auto">
          <Card/>
        </div>
    </div>
</div>
</ThemeProvider>
  )
}

export default App
