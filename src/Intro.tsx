import { StyleSheet, Text } from 'react-native'

export const Intro = () => (
  <>
    <Text style={styles.title}>Buscador de cómics de Marvel</Text>
    <Text style={styles.description}>
      Este buscador encontrará los cómics en los que aparezcan los dos personajes que selecciones en el formulario
    </Text>
  </>
)

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'left'
  },
  description: {
    marginBottom: 30,
    textAlign: 'left'
  }
})
