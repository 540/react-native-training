import { useTranslation } from 'react-i18next'
import { Text } from 'ui/_components/Text'

interface Props {
  comicCount: number
}

export const Footer = ({ comicCount }: Props) => {
  const { t } = useTranslation()

  return <Text>{t('home.comic.count', { comicCount })}</Text>
}
