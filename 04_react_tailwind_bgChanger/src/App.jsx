import React, { useState } from 'react'



function App() {
  const [count, setCount] = useState("bg-green-500")
  
  const colorMap = {
    green: "bg-green-500",
    red: "bg-red-500",
    blue: "bg-blue-500",
  }

  const changeColor  = (bgname) => {
    setCount(bgname)
  }
  return (
    <>
    <div className={`h-screen ${count} border flex justify-center items-center`}>
    <div className=' h-fit  bg-white flex flex-wrap'>
        {Object.entries(colorMap).map(([color,bgname], index) => (
          
            <button key={index} onClick={() => changeColor(bgname)} className={` ${bgname} text-white p-4 m-4 `}>
              {color}
            </button>
          

        ))}
      </div>
    </div>
      
    </>
  )
}

export default App 
