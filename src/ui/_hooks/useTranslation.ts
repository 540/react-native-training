import { useContainer } from 'ui/_context/diContext'

export const useTranslation = () => ({
  t: useContainer().translate
})
