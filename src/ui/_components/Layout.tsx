import { ReactNode } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { useTheme } from 'ui/_context/themeContext'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  const { darkMode } = useTheme()

  return (
    <SafeAreaView style={[styles.container, darkMode && styles.darkContainer]}>
      <View style={styles.wrapper}>{children}</View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  darkContainer: {
    backgroundColor: '#000'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20
  }
})
