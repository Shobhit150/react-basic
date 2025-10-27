import { useCallback, useState } from 'react'
import { ThemeProvider } from "./Context/Theme"
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'


function App() {
  const [themeMode, setThemeMode] = useState("light")

  const changeTheme = useCallback(() => {
    document.documentElement.classList.toggle("dark")
    themeMode === "light" ? setThemeMode("dark") :  setThemeMode("light")
  },[themeMode, setThemeMode])

  
  return (
    <ThemeProvider value={{themeMode, changeTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn/>
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card/>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
