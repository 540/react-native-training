import { Button, StyleSheet, Text, View } from 'react-native'
import { Layout } from './Layout'
import { useNavigation, useRoute } from './NavigationHooks'

export const Detail = () => {
  const {
    params: { comic }
  } = useRoute<'Detail'>()
  const navigation = useNavigation()

  return (
    <Layout>
      <Text style={styles.title}>{comic.title}</Text>
      {comic.characters.map(character => (
        <Text style={styles.character} key={character}>
          {character}
        </Text>
      ))}
      <View style={styles.footer}>
        <Text>Elementos en la lista: {comic.characters.length}</Text>
        <Button title="Volver a la lista de comics" onPress={navigation.goBack} />
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    textAlign: 'center'
  },
  character: {
    textAlign: 'center',
    padding: 5
  },
  footer: { flex: 1, justifyContent: 'flex-end' }
})
