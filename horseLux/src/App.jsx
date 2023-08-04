import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
// import QariCard from './Pages/QariCard'
import Card from './Pages/Card'
import Aziz from './Pages/Aziz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
     <Card/>
     <Aziz/>
    </>
  )
}

export default App
