import { Comic } from 'core/comic/domain/comic'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export type NavigationParams = {
  Home: undefined
  Detail: { comic: Comic }
}

export type RouteName = keyof NavigationParams

export type Navigation = () => NativeStackNavigationProp<NavigationParams>
