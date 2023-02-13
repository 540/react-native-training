import { Text } from 'react-native'
import { useTranslation } from 'ui/_hooks/useTranslation'

interface Props {
  comicCount: number
}

export const Footer = ({ comicCount }: Props) => {
  const { t } = useTranslation()

  return <Text>{t('home.comic.count', { comicCount })}</Text>
}
