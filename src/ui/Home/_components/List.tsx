import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useTranslation } from 'ui/_hooks/useTranslation'
import { useNavigation } from 'ui/_navigation'

interface Props {
  comics: Comic[]
}

export interface Comic {
  id: number
  title: string
  characters: string[]
}

export const List = ({ comics }: Props) => {
  const { t } = useTranslation()
  const navigation = useNavigation()

  return (
    <ScrollView style={styles.scrollView}>
      {comics.map(comic => (
        <View key={comic.id} style={styles.container}>
          <Text style={styles.title}>{comic.title}</Text>
          <Text>{comic.characters.join(', ')}</Text>
          <Pressable onPress={() => navigation.navigate('Detail', { comic })}>
            <Text style={styles.detail}>{t('home.comic.detail')}</Text>
          </Pressable>
        </View>
      ))}
    </ScrollView>
  )
}

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
