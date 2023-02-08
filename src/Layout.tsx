import { ReactNode } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => <SafeAreaView style={styles.container}>{children}</SafeAreaView>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 30
  }
})
