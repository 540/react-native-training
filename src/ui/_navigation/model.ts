import { Comic } from 'core/comic/domain/comic'

export type NavigationParams = {
  Home: undefined
  Detail: { comic: Comic }
}

export type RouteName = keyof NavigationParams
