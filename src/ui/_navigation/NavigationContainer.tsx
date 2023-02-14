import { DarkTheme, DefaultTheme, NavigationContainer as BaseNavigationContainer } from '@react-navigation/native'
import { useTheme } from 'ui/_context/themeContext'

export const NavigationContainer = props => {
  const { darkMode } = useTheme()

  return <BaseNavigationContainer {...props} theme={darkMode ? DarkTheme : DefaultTheme} />
}
