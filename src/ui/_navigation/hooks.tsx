import { RouteName } from './model'
import { useContainer } from 'ui/_context/diContext'

export const useNavigation = () => useContainer().useNavigation()

export const useRoute = <T extends RouteName>() => useContainer().useRoute<T>()
