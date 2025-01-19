import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/UserContext'
import Card from './compunents/Card'
import Btn from './compunents/Btn'
function App() {

  const [themeMode, setThemeMode] = useState('dark')

  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  return (

    <ThemeProvider value={{ darkTheme, lightTheme, themeMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Btn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
