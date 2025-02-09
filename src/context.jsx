import { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

//check localStorage theme and prefered theme
const getInitialTheme = () => {
  const storedDarkTheme = localStorage.getItem('darkTheme') // returns a string ("true" or "false") or null
  const preferDarkTheme = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches

  if (storedDarkTheme === null) {
    return preferDarkTheme
  }

  return storedDarkTheme === 'true'
}

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(getInitialTheme())
  const [searchTerm, setSearchTerm] = useState('dog')

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    localStorage.setItem('darkTheme', newTheme)
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', isDarkTheme)
  }, [isDarkTheme])

  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
