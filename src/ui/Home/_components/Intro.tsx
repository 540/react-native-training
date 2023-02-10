import { StyleSheet, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

export const Intro = () => {
  const { t } = useTranslation()

  return (
    <>
      <Text style={styles.title}>{t('home.title')}</Text>
      <Text style={styles.description}>{t('home.description')}</Text>
    </>
  )
}

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
