import { RouteProp, useNavigation as useNativeNavigation, useRoute as useNativeRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { NavigationParams, RouteName } from './model'

export const useNavigation = () => useNativeNavigation<NativeStackNavigationProp<NavigationParams>>()
export const useRoute = <T extends RouteName>() => useNativeRoute<RouteProp<NavigationParams, T>>()
