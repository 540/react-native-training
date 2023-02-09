import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'

interface Props {
  comics: Comic[]
}

interface Comic {
  id: number
  title: string
  characters: string[]
}

export const List = ({ comics }: Props) => (
  <ScrollView style={styles.scrollView}>
    {comics.map(comic => (
      <View key={comic.id} style={styles.container}>
        <Text style={styles.title}>{comic.title}</Text>
        <Text>{comic.characters.join(', ')}</Text>
        <Pressable onPress={() => {}}>
          <Text style={styles.detail}>Ver detalle</Text>
        </Pressable>
      </View>
    ))}
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  scrollView: {
    paddingBottom: 10
  },
  detail: {
    color: '#2296F3',
    textDecorationLine: 'underline'
  }
})
