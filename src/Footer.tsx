import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'

interface Props {
  comicCount: number
}

export const Footer = ({ comicCount }: Props) => {
  const { t } = useTranslation()

  return <Text>{t('home.comic.count', { comicCount })}</Text>
}
