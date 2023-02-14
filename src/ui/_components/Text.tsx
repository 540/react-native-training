import { StyleSheet, Text as BaseText, TextProps } from 'react-native'
import { useTheme } from 'ui/_context/themeContext'

export const Text = ({ style, ...props }: TextProps | Readonly<TextProps>) => {
  const { darkMode } = useTheme()

  return <BaseText {...props} style={StyleSheet.flatten([style, darkMode && styles.dark])} />
}

const styles = StyleSheet.create({
  dark: {
    color: '#fff'
  }
})
