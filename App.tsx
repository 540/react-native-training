import {Button, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View} from 'react-native'

const comics = [
  {
    id: 45977,
    title: 'Captain America (2012) #11',
    characters: ['Captain America']
  },
  {
    id: 43722,
    title: 'Captain America (2012) #1',
    characters: ['Captain America']
  },
  {
    id: 40391,
    title: 'Captain America (2011) #18',
    characters: ['Captain America']
  },
  {
    id: 43339,
    title: 'Uncanny Avengers (2012) #1',
    characters: ['Captain America', 'Havok', 'Rogue', 'Scarlet Witch', 'Thor', 'Wolverine']
  }
]

const App = () => (
  <SafeAreaView style={styles.container}>
    <Text style={styles.title}>
      Buscador de cómics de Marvel
    </Text>
    <Text style={styles.description}>
      Este buscador encontrará los cómics en los que aparezcan los dos personajes que selecciones en el formulario
    </Text>
    <Text style={styles.label}>
      Escribe un personaje en la lista
    </Text>
    <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 30}}>
      <TextInput style={styles.textInput}/>
      <Button title="Limpiar" />
    </View>
    <ScrollView>
      {comics.map(comic => (
        <View key={comic.id} style={styles.comicContainer}>
          <Text style={styles.comicTitle}>
            {comic.title}
          </Text>
          <Text>{comic.characters.join(', ')}</Text>
        </View>
      ))}
    </ScrollView>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 30
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    marginBottom: 20,
    textAlign: "left"
  },
  description: {
    marginBottom: 30,
    textAlign: "left"
  },
  label: {
    marginBottom: 5
  },
  textInput: {
    marginRight: 10,
    borderColor: "black",
    flex: 1,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  comicContainer: {
    marginBottom: 20
  },
  comicTitle: {
    fontWeight: "bold",
    marginBottom: 5
  }
})

export default App
