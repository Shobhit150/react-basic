import React, { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const pass = useRef(null)


  const handleCopy = () => {
    pass.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  const passGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"
    if (numAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*(){}~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numAllowed, charAllowed])

  useEffect(() => {
    passGenerator()
  }, [passGenerator, length, numAllowed, charAllowed])


  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-center text-white mb-6">
            Password Generator
          </h1>

          {/* Password Display with Copy */}
          <div className="flex items-center mb-6">
            <input
              type="text"
              value={password}
              ref={pass}
              placeholder="Generated Password"
              readOnly
              className="flex-1 p-2 rounded-l-lg bg-gray-700 text-white outline-none"
            />
            <button
              // onClick={() => {
              //   navigator.clipboard.writeText(password);
              // }}

              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-r-lg cursor-pointer"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>

          <div className="space-y-5">
            {/* Password Length */}
            <div className="flex items-center justify-between">
              <label className="text-gray-300 font-medium">Password Length</label>
              <div className="flex items-center gap-3">
                <input
                  type="number"
                  value={length}
                  min="4"
                  max="32"
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-20 p-2 rounded-md text-center bg-gray-700 text-white outline-none"
                />
                <span className="text-sm text-gray-400">({length || "0"})</span>
              </div>
            </div>

            {/* Include Numbers */}
            <div className="flex items-center justify-between">
              <label className="text-gray-300 font-medium">Include Numbers</label>
              <input
                type="checkbox"
                checked={numAllowed}
                onChange={(e) => setNumAllowed(e.target.checked)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Include Symbols */}
            <div className="flex items-center justify-between">
              <label className="text-gray-300 font-medium">Include Symbols</label>
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={(e) => setCharAllowed(e.target.checked)}
                className="w-5 h-5 accent-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default App
