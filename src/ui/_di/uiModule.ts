import { asValue } from '_di/resolvers'
import { Translate } from 'ui/_utils/translations/translate'
import { i18nTranslate } from 'ui/_utils/translations/i18nTranslate'

export const uiModule = {
  translate: asValue<Translate>(i18nTranslate)
}
