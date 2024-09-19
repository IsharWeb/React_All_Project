import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <h1 className="text-3xl bg-black p-10 text-white font-bold underline">
      Hello world!
    </h1>
  )
}

export default App
