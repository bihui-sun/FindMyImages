import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)
  const [searchTerm, setSearchTerm] = useState('dog')

  const toggleTheme = () => {
    const newTheme = !isDarkTheme
    setIsDarkTheme(newTheme)
    document.body.classList.toggle('dark-theme', newTheme)
  }
  return (
    <AppContext.Provider
      value={{ isDarkTheme, toggleTheme, searchTerm, setSearchTerm }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => useContext(AppContext)
