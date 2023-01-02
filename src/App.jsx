import { useState } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Login from './Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Login/>
    </div>
  )
}

export default App
