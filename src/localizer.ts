import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as Localization from 'expo-localization'
import translationES from '../assets/translations/es.json'

export const localizer = {
  init: () =>
    i18n.use(initReactI18next).init({
      compatibilityJSON: 'v3',
      lng: Localization.locale,
      fallbackLng: 'es',
      interpolation: {
        escapeValue: false
      },
      resources: {
        es: {
          translation: translationES
        }
      }
    })
}
