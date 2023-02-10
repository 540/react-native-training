import { Button, StyleSheet, Text, View } from 'react-native'
import { Layout } from './Layout'
import { useNavigation, useRoute } from './NavigationHooks'
import { useTranslation } from 'react-i18next'

export const Detail = () => {
  const {
    params: { comic }
  } = useRoute<'Detail'>()
  const navigation = useNavigation()
  const { t } = useTranslation()

  return (
    <Layout>
      <Text style={styles.title}>{comic.title}</Text>
      {comic.characters.map(character => (
        <Text style={styles.character} key={character}>
          {character}
        </Text>
      ))}
      <View style={styles.footer}>
        <Text>{t('detail.count', { charactersCount: comic.characters.length })}</Text>
        <Button title={t('detail.button.back')} onPress={navigation.goBack} />
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
