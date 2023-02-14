import { createContext, ReactNode, useContext, useState } from 'react'

const defaultValue = {
  darkMode: false,
  toggleDarkMode: () => {}
}

interface Props {
  children: ReactNode
}

const ThemeContext = createContext(defaultValue)

export const ThemeProvider = ({ children }: Props) => {
  const [darkMode, setDarkMode] = useState(defaultValue.darkMode)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  return <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
