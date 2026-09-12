import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>My First React App</h1>
      <p>I love learning React</p>
      <button>Click Me</button>
    </div>


  )
}

export default App
