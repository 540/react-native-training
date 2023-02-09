import { ReactNode } from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'

interface Props {
  children: ReactNode
}

export const Layout = ({ children }: Props) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.wrapper}>{children}</View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 20
  }
})
