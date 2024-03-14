import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Comments from './components/Comments'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Greeting /> 
      {/* <Comments /> */}
    </>
  )
}

export default App
