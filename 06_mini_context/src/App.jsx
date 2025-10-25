import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [cou, setcou] = useState(2)
  const ok = () => {
    setcou(prev => prev + 1)
    setcou(prev => prev + 1)
    
  }
  return (
    <UserContextProvider>
      <h1>React Global variable</h1>
      <button className='' onClick={ok}>ok {cou} </button>

    </UserContextProvider>
  )
}

export default App
