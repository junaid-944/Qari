import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp'
// import QariCard from './Pages/QariCard'
import Card from './Pages/Card'
import Aziz from './Pages/Aziz'
import Dewarming from './Pages/Dewarming'
import Coggins from './Pages/Coggins'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Home/> */}
     {/* <Card/> */}
     {/* <Aziz/> */}
     {/* <SignUp/> */}
     {/* <Dewarming/> */}
     <Coggins/>
    </>
  )
}

export default App
