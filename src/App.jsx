import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QuizIndex } from './components/QuizIndex'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <QuizIndex />
      
    </>
  )
}

export default App
