import React, { useState } from "react"
function App() {

  return (
    <h1>Hello</h1>
  )
}

export const App2 = () => {
  const [counter, setCounter] = useState(15)
  const change = () => {
    setCounter(counter+1)
  }
  return (
    <h1>
      {counter}
      <button onClick={change} className=" bg-blue">button</button>
    </h1>
  )
}
export default App
