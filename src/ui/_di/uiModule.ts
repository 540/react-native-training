import { asValue } from '_di/resolvers'
import { Translate } from 'ui/_utils/translations/translate'
import { i18nTranslate } from 'ui/_utils/translations/i18nTranslate'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { Navigation, NavigationParams, RouteName } from 'ui/_navigation/model'

export const uiModule = {
  translate: asValue<Translate>(i18nTranslate),
  useNavigation: asValue<Navigation>(useNavigation),
  useRoute: asValue(<T extends RouteName>() => useRoute<RouteProp<NavigationParams, T>>())
}
